import React, { useState } from 'react'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

function Chat () {
  const [username, setUsername] = useState('')

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function renderChatForm (creds) {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  return (<ChatEngine
    height='100vh' projectID='f2cbd1f4-72ae-4213-a08a-e4d0702bdb04' userName='Tarek' userSecret='test123' renderNewChatForm={(creds) => renderChatForm(creds)}
  />)
}

export default Chat

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

import { getHumansByID } from '../api'

function Chat () {
  const [username, setUsername] = useState('')
  const human = useSelector(state => state.human)
  const matches = useSelector(state => state.matches)

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  async function loadNewMatches (creds) {
    const ids = matches.map(obj => {
      const arr = Object.values(obj)
      return arr.find(val => val !== human.id && val !== obj.id)
    })
    await getHumansByID(ids, human.token)
      .then(res => {
        return res.map(obj => obj.name)
      })
      .then(names => {
        setUsername('oo')
        console.log(username)
        return username
      })
      .then(username => {
        if (username !== '') {
          createDirectChat(creds)
          return null
        } else { return null }
      })
      .catch(err => console.log(err.message))
  }

  function renderChatForm (creds) {
    return (
      <div>
        <button onClick={() => loadNewMatches(creds)}>
          Load Matches
        </button>
      </div>
    )
  }

  if (human.id) {
    return (<ChatEngine
      height='100vh' projectID='f2cbd1f4-72ae-4213-a08a-e4d0702bdb04' userName={human.name} userSecret={human.token} renderNewChatForm={(creds) => renderChatForm(creds)}
    />)
  } else { return (<p>loading...</p>) }
}

export default Chat

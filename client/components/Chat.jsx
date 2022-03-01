import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

import { getHumansByID } from '../api'

function Chat () {
  const [username, setUsername] = useState([])
  const [cred, setCreds] = useState('')
  const human = useSelector(state => state.human)
  const matches = useSelector(state => state.matches)
  const ids = matches.map(obj => {
    const arr = Object.values(obj)
    return arr.find(val => val !== human.id && val !== obj.id)
  })
  console.log(ids)
  useEffect(() =>
    getHumansByID(ids, human.token)
      .then(res => {
        const newUser = res.map(obj => obj.name)
        return newUser
      })
      .then(usernames => {
        console.log(usernames)
        for (let i = 0; i < usernames.length; i++) { getOrCreateChat(cred, { is_direct_chat: true, usernames: [usernames[i]] }) }
        return null
      })
      .catch(err => console.log(err.message)), [human.token, cred])

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function loadNewMatches (creds) {
    setCreds(creds)
    const ids = matches.map(obj => {
      const arr = Object.values(obj)
      return arr.find(val => val !== human.id && val !== obj.id)
    })
    getHumansByID(ids, human.token)
      .then(res => {
        const newUser = res.map(obj => obj.name)
        setUsername('Tarek')
        return newUser
      })
      .then((user) => {
        console.log(username)
        return username
      })
      .then(username => {
        console.log(username)
        if (username !== '') {
          createDirectChat(creds)
          return null
        } else { return null }
      })
      .catch(err => console.log(err.message))
  }

  function renderChatForm (creds) {
    setCreds(creds)
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
      height='100vh' projectID='f2cbd1f4-72ae-4213-a08a-e4d0702bdb04' userName={human.name} userSecret={human.token} renderNewChatForm={(creds) => {
        return renderChatForm(creds)
      }
      }
    />)
  } else { return (<p>loading...</p>) }
}

export default Chat

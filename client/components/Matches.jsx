import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCommonLikes } from '../../server/db/likes.js'
import { getMatches } from '../actions/matches.js'

function Matches () {
  const matches = useSelector(state => state.matches)
  
  useEffect(() => {
    // dispatch getMatches
    getCommonLikes()
    .then(remoteCommonMatches => setMatches)
    .catch(err => setError (err.message))

  }, [])

  return (
    <>
    <div>
      {matches.map(matches.id => (
            <p key={matches.id}>{matches.id}</p>)
           
            <button href="/chat">Chat to your match!</button>
            </div>
      )}
    
    </>)
}

export default Matches

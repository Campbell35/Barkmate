import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMatches } from '../actions/matches.js'

function Matches () {
  const matches = useSelector(state => state.matches)

  useEffect(() => {
    // dispatch getMatches
    dispatchEvent(getMatches())
  }, [])

  return (
    <div>
      {
        matches.map(match => {
          <p>{match.id}</p>
        })
      }
    </div>
  )
}

export default Matches

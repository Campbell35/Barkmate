import React from 'react'
import { connect } from 'react-redux'

function WaitIndicator (props) {
  return props.waiting
    ? <img className='wait-indicator' src='/dog_loading.gif' />
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)

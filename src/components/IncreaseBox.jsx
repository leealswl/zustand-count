import React from 'react'
import counterStore from '../stores/CounterStore'

const IncreaseBox = () => {
    const {increaseCount} =counterStore()
  return (
    <div>
        <h2>증가 : {increaseCount}</h2>
    </div>
  )
}

export default IncreaseBox
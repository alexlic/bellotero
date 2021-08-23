import React from 'react'

const SavingsResults = ({ value, description }) => (
  <div>
    <p className="font-roboto-medium text-blue-cobalt font-medium">
      <span className="text-4xl">{'$'}</span>
      <span className="text-7xl pl-2">{value}</span>
    </p>
    <p className="pl-8">{description}</p>
  </div>
)

export default SavingsResults

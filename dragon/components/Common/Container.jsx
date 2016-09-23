import React, { Component, PropTypes } from 'react'

function Container(props) {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

Container.propTypes = {}

export default Container

import React, { Component, PropTypes } from 'react'
// import Draggable, {DraggableCore} from 'react-draggable'
import styles from './style.less'

function DragonMenu(props) {
  const { components, dispatch } = props
  function onDragStart (e) {
    var name = e.target.dataset.name
    dispatch({
      type: 'dragon/dragstart',
      name: name
    })
  }
  return (
    <div className={styles.menuBox}>
      {
        components.map(com =>
          <div data-name={com.name} onDragStart={onDragStart} draggable="true" key={com.name} className={styles.dragbleItem}>
            {com.name}
          </div>
        )
      }
    </div>
  )
}

DragonMenu.propTypes = {}

export default DragonMenu

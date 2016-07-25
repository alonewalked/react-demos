import React, { Component, PropTypes } from 'react'
import styles from './style.less'
import { getComponentByName } from '../index'
import { Row, Col } from 'antd'
import { assignIn } from 'lodash'

function Render(props) {
  const { config, dispatch } = props
  const getStore = function (name) {
    return config.store && config.store[name]
  }
  var TopCom = generateComponent(config.component, {
    getStore: getStore,
    dispatch: dispatch
  })
  return (
    <div className={styles.renderContainer}>
      <TopCom></TopCom>
    </div>
  )
}

Render.propTypes = {}

export default Render

function generateComponent (config, utils, key) {
  if (!config) {
    return null
  }
  var children = null, store = null, props = null
  if (config.children && config.children.length) {
    children = config.children.map((c, index) => {
      return generateComponent(c.component, utils, '' + index)
    })
  }
  if (config.store) {
    store = utils.getStore(config.store)
  }
  var comConfig = getComponentByName(config.name)
  if (key) {
    if (store) {
      props = assignIn(store, {
        key: key
      })
    } else {
      props = {
        key: key
      }
    }
  } else {
    props = store
  }
  return wrapCom(config, comConfig, props, children, utils.dispatch)
}

function wrapCom (config, comConfig, props, children, dispatch) {
  var Com = comConfig.Component
  var WrapedBox = React.createClass({
    render: function() {
      children = children && children.map((Child, index) => {
        return <Child key={'' + index}></Child>
      })
      if (!comConfig.children) {
        return (
          <Com {...props}>
            {children}
          </Com>
        )
      } else {
        children = children && children.length ? children : <div>拖动组件到这里</div>
        return (
          <div onDrop={this.onDrop} onDragOver={this.onDragOver}>
            <Com {...props}>
              {children}
            </Com>
          </div>
        )
      }
    },
    onDrop: function(e) {
      console.log('onDrop')
      dispatch({
        type: 'dragon/add',
        parent: config.id
      })
      e.stopPropagation()
    },
    onDragOver: function(e) {
      e.preventDefault()
    }
  })
  return WrapedBox
}

import React, { Component, PropTypes } from 'react'
import styles from './style.less'
import { Row, Col } from 'antd'
import Render from './Render'
import Line from '../Common/Line'
import DragonMenu from './DragonMenu'

function PlayGround(props) {
  const { config, name, components } = props
  return (
    <div className={styles.container}>
      <Row>
        <Col span={24}>
          <h1>Dragon - {name}</h1>
        </Col>
      </Row>
      <Line/>
      <Row>
        <Col span={6}>
          <DragonMenu dispatch={props.dispatch} components={components}></DragonMenu>
        </Col>
        <Col span={18}>
          <Render dispatch={props.dispatch} config={config}></Render>
        </Col>
      </Row>
    </div>
  )
}

PlayGround.propTypes = {}

export default PlayGround

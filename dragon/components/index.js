//
// 统一管理组件
//

import Container from './Common/Container'
import { Alert, Card } from 'antd'
import { find } from 'lodash'
import Line from './Common/Line'

const components = [{
  name: 'Alert',
  Component: Alert,
  props: {
    message: String
  }
}, {
  name: 'Line',
  Component: Line
}, {
  name: 'Container',
  Component: Container,
  children: [{
    accept: '*'
  }]
}, {
  name: 'Card',
  Component: Card,
  children: [{
    accept: '*'
  }]
}]
export function getComponentByName (name) {
  return _.find(components, { name: name })
}

export function getAllComponents () {
  return components
}
//
// 默认配置
//

import { generateId } from '../utils'

export default {
  store: {
    store_test: {
      title: '测试'
    },
    store_1: {
      message: '测试第一页面'
    },
    store_2: {
      message: '测试第二页面'
    }
  },
  component: {
    id: generateId(),
    name: 'Container',
    children: [{
      component: {
        id: generateId(),
        name: 'Card',
        store: 'store_test',
        children: [{
          component: {
            id: generateId(),
            name: 'Alert',
            store: 'store_1'
          }
        }, {
          component: {
            id: generateId(),
            name: 'Alert',
            store: 'store_2'
          }
        }]
      }
    }, {
      component: {
        id: generateId(),
        name: 'Line'
      }
    }, {
      component: {
        id: generateId(),
        name: 'Card',
        store: 'store_test'
      }
    }]
  }
}

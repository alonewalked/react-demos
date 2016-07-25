import './index.html'
import React from 'react'
import dva, { connect } from 'dva'
import { put, call } from 'dva/effects'
import { Router, Route } from 'dva/router'
import fetch from 'dva/fetch'
// import ProductList from './components/ProductList/ProductList'
import styles from './index.less'
// import styles from './style/dragon.less';
import defaultConfig from './configs/defaultConfig'
import PlayGround from './components/Dragon/PlayGround'
import { getAllComponents } from './components/index'
import u from 'updeep'
import utils from './utils'

// 1. Initialize
const app = dva()

// 2. Model
app.model({
  namespace: 'dragon',
  state: {
    // list: [],
    // loading: false,
    config: defaultConfig,
    name: '测试',
    components: getAllComponents(),
    dragged: null // 正在被拖拽的item
  },
  subscriptions: [
    // function(dispatch) {
    //   dispatch({type: 'products/query'});
    // },
  ],
  effects: {
    ['dragon/add']: function*( { name, parent } ) {
      put({
        type: 'dragon/add',
        name: name,
        parent: parent
      })
    },
    ['dragon/dragstart']: function*( { name } ) {
      put({
        type: 'dragon/dragstart',
        name: name
      })
    }
    // ['products/query']: function*() {
    //   const { success, data } = yield fetch(`/api/products`).then(res => res.json());
    //   if (success) {
    //     yield put({
    //       type: 'products/query/success',
    //       payload: data,
    //     });
    //   }
    // },
    // ['products/vote']: function*({ payload }) {
    //   const { success } = yield fetch(`/api/products/vote?id=${payload}`).then(res => res.json());
    //   if (success) {
    //     yield put({
    //       type: 'products/vote/success',
    //       payload,
    //     });
    //   }
    // },
  },
  reducers: {
    ['dragon/add'](state, { parent }) {
      var locationInfo = utils.findComponentLocation(state.config.component, parent)
      var location = {
        config: {
          component: locationInfo.location
        }
      }
      var newObjLocation = {
        children: {

        }
      }
      var len = locationInfo.obj.children ? locationInfo.obj.children.length : 0
      if (len > 0) {
        locationInfo.last.children = {}
      } else {
        locationInfo.last.children = []
      }

      locationInfo.last.children[len] = {
        component: {
          id: utils.generateId(name),
          name: state.dragged
        }
      }
      var newState = u(location, state)
      return newState
    },
    ['dragon/dragstart'](state, { name }) {
      return { ...state, dragged: name }
    }
    // ['products/query'](state) {
    //   return { ...state, loading: true, };
    // },
    // ['products/query/success'](state, { payload }) {
    //   return { ...state, loading: false, list: payload };
    // },
    // ['products/vote'](state) {
    //   return { ...state, loading: true };
    // },
    // ['products/vote/success'](state, { payload }) {
    //   const newList = state.list.map(product => {
    //     if (product.id === payload) {
    //       return { ...product, vote:product.vote + 1 };
    //     } else {
    //       return product;
    //     }
    //   });
    //   return { ...state, list: newList, loading: false };
    // },
  }
});

// 3. View
const App = connect(({dragon}) => ({
  dragon
}))(function(props) {
  return (
    <div>
      <PlayGround {...props.dragon} dispatch={props.dispatch}></PlayGround>
    </div>
    /*<div className={styles.productPage}>
      <h2>Popular Products</h2>
      <ProductList
        data={props.products.list}
        loading={props.products.loading}
        dispatch={props.dispatch}
      />
    </div>*/
  );
});

// 4. Router
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>
);

// 5. Start
app.start(document.getElementById('root'))

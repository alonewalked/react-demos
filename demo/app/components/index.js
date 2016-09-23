import React from 'react';
import Form from './form';
import List from './list';

import {connect} from 'react-redux';
import { mapStateToProps } from '../stores';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Form {...this.props}></Form>
                <List {...this.props}></List>
            </div>
        )
  }
}

App = connect(mapStateToProps)(App);

export default App;
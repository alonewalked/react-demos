import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import Stage from '../../../components/stage'

// components
import Loading from '../../../components/loading';
import { propsList, actionsList } from '../store';

class Home extends Component {
    render() {
        const { loading } = this.props;
        return (
            loading?<Loading />:<Stage />
        )
    }
    componentDidMount() {
        const { actions } = this.props;
        setTimeout(()=>{
            actions.changeLoading(false);
        }, 1000);
    }
}

Home = connect(propsList, actionsList)(Home);
export default Home;

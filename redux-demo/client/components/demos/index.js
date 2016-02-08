var React = require('react');
var action = require('../../actions/demoAction');
var {
    fetchDemos
} = action;

var configureStore = require('../../stores/demoStore');


var store = configureStore();
store.dispatch(fetchDemos()).then(()=>{
    console.log(store.getState());
});

var Demos = React.createClass({
    getInitialState() {
        return {
            items: store.getState()
        };
    },
    componentDidMount() {
        var unsubscribe = store.subscribe(this.onChange);
    },
    onChange() {
        this.setState({
            items: store.getState()
        });
    },
    render() {
        return (
            <ul>
                {this.state.items.map((item)=>{
                    return <li key={item._id}>{item.title}</li>;
                })}
            </ul>
            );
    }
});

module.exports = Demos;
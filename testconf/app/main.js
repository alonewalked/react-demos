
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import renderTable from './render-table';
import renderModal from './render-modal';
import renderForm from './render-form';
import renderInput from './render-input';

var ChildComponent = React.createClass({
    render: function() {
        return (
            <div>
                <p>type: {this.props.type} >> {this.props.number}</p>
                <a onClick={this.props.onClickHandler}>self click</a>
                <hr/>
            </div>
        )
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {
            number: 0
        };
    },
    _renderToString: function() {
        return ReactDOMServer.renderToString(
            <ChildComponent
            type={'renderToString'}
            number={this.state.number}
            onClickHandler={this._clickHandler} />
        );
    },
    _renderToStaticMarkup : function() {
        return ReactDOMServer.renderToStaticMarkup(
            <ChildComponent
            type={'renderToStaticMarkup'}
            number={this.state.number}
            onClickHandler={this._clickHandler} />
        );
    },
    _clickHandler: function() {
        var num = this.state.number;
        this.setState({number: num+1});
    },
    _showModalHandler(showmoal=true) {
        this.setState({showmoal});
    },
    render: function() {
        var { showmoal } = this.state;
        return (
          <div>
             <ChildComponent
                type={'render'}
                number={this.state.number}
                onClickHandler={this._clickHandler} />
             <div dangerouslySetInnerHTML={{__html: this._renderToString()}} />
             <div dangerouslySetInnerHTML={{__html: this._renderToStaticMarkup()}} />
             <div><a onClick={this._showModalHandler}>click</a></div>,
             <div dangerouslySetInnerHTML={{__html: renderTable()}} />
             {renderModal({showmoal, doClose:this._showModalHandler.bind(this, false)})}
             {renderForm()}
             {renderInput({value:1})}
          </div>
        )
    }
});
ReactDOM.render(<App />, document.getElementById('app'));

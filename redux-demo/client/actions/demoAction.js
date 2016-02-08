/* demo action */
var {
    FETCH_DEMOS,
    SAVE_DEMO
} = require('./actions');

var fetch = require('isomorphic-fetch');
var baseUrl = 'http://localhost:3300/apis'


exports['fetchDemos'] = function(){
    return (dispatch)=>{
        return fetch(baseUrl + '/get_demo_lists')
        .then(rep => rep.json())
        .then(json => dispatch({
            type: FETCH_DEMOS,
            payload: json
        }))
        
    }
};


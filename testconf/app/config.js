module.exports = {
    routes: [
        {
            "id": 'home',
            "name": 'Home',
            'to': 'home'

        },
        {
            "id": 'product',
            "name": 'Product',
            'to': 'product'

        }
    ],
    component: [{
        id:1,
        type:'Table',
        children: [{

        }],
        datas: [{
            'name': 'foo',
            'age': 23,
            'gender': 'male'
        },{
            'name':"bar",
            'age': 25,
            'gender': 'female'
        },
        {
            'name': 'alice',
            'age': 34,
            'gender': 'male'
        }]
    }, {
        id:2,
        type: 'Modal',
        children: [{
            id:2.1
        }]
    }, {
        id:2,
        type: 'Form',
        children: []
    }]
}

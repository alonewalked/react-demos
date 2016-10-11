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
        childrens: [{

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
        childrens: [{
            id:2.1
        }]
    }, {
        id:3,
        type: 'Form',
        action:'http://localhost/post.php',
        name: 'testform',
        childrens: [{
            id:3.1,
            type:'aInput',
            inputType: 'text',
            bindfield: 'name',
            label:'名称',
            props: {
                placeholder:'名称',
                size:'small',
                style:{
                    width:200
                }
            }
        },{
            id:3.2,
            type:'aInput',
            inputType: 'text',
            bindfield: 'num',
            label:'数量',
            props: {
                placeholder:'数量',
                size:'small',
                style:{
                    width:200
                }
            }
        }, {
            id:3.2,
            type:'aInput',
            inputType: 'button',
            props: {
                size:'small',
                value:'提交',
                style:{
                    width:60
                }
            },
            onClick() {
                this.doSubmit('http://localhost/post.php', {
                    name:'test',
                    num:2
                })
            }
        }]
    }, {
        id:4,
        type:'Input',
        childrens:[]
    }]
}

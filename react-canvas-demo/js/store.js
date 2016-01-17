/* store */

import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const store = new EventEmitter();
let cachedata = {};

let ref = new Wilddog("https://tctjapp.wilddogio.com");
let sub_shoplist = ref.child('shoplist');

ref.on('value', snapshot=>{
    console.log(snapshot.val());
}, err=>{
    console.log('The read failed: ' + err.code);
});

sub_shoplist.on('value', snapshot=>{
    console.log(snapshot.val());
}, err=>{
    console.log('The read failed: ' + err.code);
});

exports.shops = {
    getshoplist() {
        return new Promise( (resolve, reject)=>{
            sub_shoplist.once('value', data=>{
                resolve(data.val());
            }, reject);
        });
    }
}
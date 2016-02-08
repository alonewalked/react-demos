// index
import React from 'react';
import ReactDOM from 'react-dom';
import Dragable from './dragable';
import ImageItem from './component/ImageItem';

function handleDrag(data){
    document.getElementById('result1').innerText = data.join(' ');
}

ReactDOM.render(
    <Dragable onDrag={handleDrag} className="style-drag">
        <ImageItem src="http://i2.tietuku.com/28e7f3ada4dd0f46s.jpg"
               dragData="1" />
        <ImageItem src="http://img5q.duitang.com/uploads/item/201503/31/20150331135725_fVFVy.jpeg"
               dragData="2" />
        <ImageItem src="http://www.xiaoxiongbizhi.com/wallpapers/1280_1024_85/b/t/bt1j6kcfu.jpg"
               dragData="3" />
    </Dragable>, document.getElementById('react1'));


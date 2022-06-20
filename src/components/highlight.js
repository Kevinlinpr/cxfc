import React from "react";
// import SelfAdaptionGalleryScroller from 'gallery-scroller';
import SelfAdaptionGalleryScroller from "./v2/index.js";
import Img1 from './img/1.jpeg';
import Img2 from './img/2.jpeg';
import Img3 from './img/3.jpeg';
import Img4 from './img/4.jpeg';
import Img5 from './img/5.jpeg';
import Img6 from './img/6.jpeg';
import "./highlight.css";

const resourcesList = [
    {
        img: Img1,
        marker: '气势',
        color: '#ff1744',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
    {
        img: Img2,
        marker: '伤病',
        color: '#2979ff',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
    {
        img: Img3,
        marker: '茫然',
        color: '#00e676',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
    {
        img: Img4,
        marker: '比赛开始',
        color: '#ff3d00',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
    {
        img: Img5,
        marker: '教练组',
        color: '#ffc400',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    },
    {
        img: Img6,
        marker: '亚军',
        color: '#1de9b6',
        onClick:()=> {
            console.log('go to 7.jpg 直播 #00b8d4')
        }
    }
];

function HighlightGallery(){
    return(
        <div className={'highlight-gallery-wrapper'}>
            <SelfAdaptionGalleryScroller list={resourcesList}/>
        </div>
    )
}

export {HighlightGallery};


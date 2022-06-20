import React from "react";
import "./navigator.css";
import logo from "./logo.jpg";

function Navigator(){
    return (
        <div className={'navigator-wrapper'}>
            <img src={logo}/>
            <div className={'navigator-wrapper-club-info'}>
                <div className={'navigator-wrapper-club-name'}>
                    {"尘香足球俱乐部"}
                </div>
                <div className={'navigator-wrapper-club-born'}>
                    {"创建于2010年"}
                </div>
            </div>
        </div>
    )
}

function StillDeveloping(){
    return(
        <div className={'still-developing'}>
            {"敬请期待..."}
        </div>
    )
}

export {Navigator,StillDeveloping};
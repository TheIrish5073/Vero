import React from "react";
import { Nav } from "../components/nav-component";
import { Footer } from "../components/footer-component";
import { useState } from "react";


export function Menu(){

    const [val,setVal]=useState("dinning")
        function clickMenu(menu){
            setVal(menu)
            console.log(val)
        }

    return (<>
        <Nav/>
        <div className="menu-mobile">
            <div className="menu-mobile-card">
                <h1 className="menu-mobile-title">Dining Room</h1>
                <img src="/img/menu/dinning.jpg" alt="" className="menu-mobile-img" />
                <button className="menu-mobile-btn">Download</button>
            </div>
            <div className="menu-mobile-card">
                <h1 className="menu-mobile-title">Bar Express Lunch</h1>
                <img src="/img/menu/bar.jpg" alt="" className="menu-mobile-img" />
                <button className="menu-mobile-btn">Download</button>
            </div>
            <div className="menu-mobile-card">
                <h1 className="menu-mobile-title">Desserts</h1>
                <img src="/img/menu/desert.jpg" alt="" className="menu-mobile-img" />
                <button className="menu-mobile-btn">Download</button>
            </div>
            <div className="menu-mobile-card">
                <h1 className="menu-mobile-title">Wine List</h1>
                <img src="/img/menu/wine.jpg" alt="" className="menu-mobile-img" />
                <button className="menu-mobile-btn">Download</button>
            </div>
        </div>
        <div className="menu-desktop">
            <div className="menu-desktop-box">
                <h1 className="menu-desktop-title" onClick={()=>{clickMenu("dinning")}}>Dining Room</h1>
                <h1 className="menu-desktop-title"  onClick={()=>{clickMenu("bar")}} >Bar Express Lunch</h1>
                <h1 className="menu-desktop-title"  onClick={()=>{clickMenu("desert")}}>Desserts</h1>
                <h1 className="menu-desktop-title"  onClick={()=>{clickMenu("wine")}}>Wine List</h1>
            </div>
            <div className="menu-mobile-card">
                <img src={`/img/menu/${val}.jpg`} alt="" className="menu-mobile-img" />
                <button className="menu-mobile-btn">Download</button>
            </div>
        </div>
        <Footer footerClass={"footerMenu"}/>
    
    
    </>)
}
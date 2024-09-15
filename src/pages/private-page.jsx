import React from "react";
import { useEffect, useState } from "react";
import { Nav } from "../components/nav-component";
import { Footer } from "../components/footer-component";

export function Private(){

   let [val,setVal]=useState(1);

   const clickOne=()=>{
        setVal(1)
   }
   const clickTwo=()=>{
        setVal(2)
   }
   const clickThree=()=>{
        setVal(3)
   }
   const clickFour=()=>{
        setVal(4)
   }
   const clickFive=()=>{
        setVal(5)
   }


   const clickLeft=()=>{
    setVal((prevVal) => (prevVal >= 0 ? 5 : prevVal - 1));
    console.log(val)
   }
   const clickRight=()=>{
    setVal((prevVal) => (prevVal >= 5 ? 1 : prevVal + 1));
   }

   useEffect(()=>{
    const interval = setInterval(() => {
        setVal((prevVal) => (prevVal >= 5 ? 1 : prevVal + 1));
    }, 4000);

    return ()=>{
        clearInterval(interval)
    }
   },[])

    return (
        <>
            <Nav/>
            <div className="private">
                <div className="private__one">
                    <p className="private__text">We make room for the curious.
We invite you to make yourself at home.
We cultivate enchanted spaces for you to enjoy, whatever the occasion.</p>
                </div>
                <div className="bar-one"></div>
                <div className="private__two">
                    <video className="private__two-video" autoPlay loop muted>
                        <source src="/video/private/private-two.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="bar-two"></div>
                <div className="private__three">
                    <p className="private__text">Our Private Dining spaces can host groups of six to twenty people for lunch and dinner. For larger parties and events we also offer full venue hire. Please enquire below or call us.

</p>
                </div>
                <div className="bar-three"></div>
                <div className="private__four">
                    <div className="private__four-box">
                        <h1 className="private__four-box-left" onClick={clickRight}>&gt;</h1>
                        <h1 className="private__four-box-right" onClick={clickLeft}>&lt;</h1>
                        <img src={`/img/private/one${val}.jpg`} alt="" className="private__four-box-img" />
                        <img src={`/img/private/two${val}.jpg`} alt="" className="private__four-box-img" />

                    </div>
                    <div className="private__four-btns">
                        <button className={`private-btn ${val===1?"active" : "one"}`} onClick={clickOne}></button>
                        <button className={`private-btn ${val===2?"active" : "two"}`} onClick={clickTwo}></button>
                        <button className={`private-btn ${val===3?"active":"three"}`} onClick={clickThree}></button>
                        <button className={`private-btn ${val===4?"active":"four"}`} onClick={clickFour}></button>
                        <button className={`private-btn ${val===5?"active":"five"}`} onClick={clickFive}></button>
                    </div>
                </div>
                <div className="bar-three"></div>
                <div className="private__five">
                    <button className="private__five-btn">ENQUIRY</button>
                </div>
            </div>
            <Footer footerClass={"footerPrivate"}/>
        </>
    )
}
import React from "react";
import { Nav } from "../components/nav-component.jsx";
import { Footer } from "../components/footer-component.jsx";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function People(){
    const one=useRef();
    const two=useRef();
    const three=useRef();
    const four=useRef();


    useEffect(()=>{
        gsap.fromTo(one.current,{filter:"blur(5px)"},{filter:"blur(0)",duration:2,ease:"linear"})

        gsap.fromTo(two.current,{filter:"blur(5px)"},{filter:"blur(0)",duration:2,ease:"linear",scrollTrigger:{
            trigger:two.current,
            start:"top bottom",
            end:"bottom top",
            
        }})

        gsap.fromTo(three.current,{filter:"blur(5px)"},{filter:"blur(0)",duration:2,ease:"linear",scrollTrigger:{
            trigger:three.current,
            start:"top bottom",
            end:"bottom top",
            
        }})

        gsap.fromTo(four.current,{filter:"blur(5px)"},{filter:"blur(0)",duration:2,ease:"linear",scrollTrigger:{
            trigger:four.current,
            start:"top bottom",
            end:"bottom top",
            
        }})
    },[])

    return (<>
         <Nav/>
         <div className="people">
            <div className="people__one">
                <img src="/img/people/one-people.jpg" alt="" className="people__one-img" ref={one}/>
                <div className="people__one-txt">
                    <h1 className="people__title">Life at VERO</h1>
                    <p className="people__text">Building relationships is the heart of what we do. We work collaboratively to improve the way we do things, coming together to reach our common purpose - bringing joy to people.</p>
                </div>
            </div>

            <div className="people__two">
            <img src="/img/people/two-people.jpg" alt="" className="people__two-img" ref={two}/>
                <div className="people__two-txt">
                    <p className="people__text">We are an aspirational brand that values craft and creativity. By adopting a considered approach to every aspect of hospitality, we create something that is greater than the sum of its parts.</p>
                </div>
            </div>

            <div className="people__three">
                <div className="people__three-txt">
                    <p className="people__text">,,The most rewarding part of my job is watching people develop and grow. Knowing we make a positive impact on people's lives and giving them the skills and experience they need, brings me great joy"</p>
                    <h1 className="people__title">Daniel Willis, Owner</h1>
                </div>
            </div>

            <div className="people__four">
            <img src="/img/people/four-people.jpg" alt="" className="people__four-img" ref={three}/>
                <div className="people__four-txt">
                    <p className="people__text">Through trust and understanding we cultivate an exciting and rewarding work environment. giving people the opportunities they deserve and helping them succeed.</p>
                </div>
            </div>

            <div className="people__five">
                 <h1 className="people__title">Our commitment to you</h1>
                <p className="people__five-txt">
Industry leading salaries

Additional financial support and brand discounts

A warm and welcoming work environment

Direct support, training and career development

Flexible shift patterns

Focus on well-being and life work balance</p>

            </div>

            <div className="people__six">
                <img src="/img/people/six-people.jpg" alt="" className="people__six-img" ref={four} />
            </div>

            <div className="people__seven">
                <h1 className="people__title">Current Opportunities</h1>
                <p className="people__seven-txt">Chef De Partie
Bartender
Junior Sommelier</p>
                <button className="people__seven-btn">APPLY</button>
            </div>
         </div>
         <Footer footerClass={"footerPeople"}/>


    
    </>)
}
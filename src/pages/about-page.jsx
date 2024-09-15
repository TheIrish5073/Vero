import React from "react";
import { Nav } from "../components/nav-component.jsx";
import {Footer} from "../components/footer-component.jsx";
import { useRef,useEffect } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function About(){
    const imgOne =useRef();
    const imgTwo=useRef();
    const imgThree=useRef();
    const barOne=useRef();
    const barTwo=useRef();
    const barThree=useRef();
    const barFour=useRef();

    
    useEffect(() => {
       
        if (imgOne.current && barOne.current) {
            gsap.to(barOne.current, {
                height: "110px",
                backgroundColor: "white",
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: barOne.current,
                    start: "top bottom",  
                    end: "top 30%",      
                    scrub: true,          
                         
                }
            });
    
            gsap.fromTo(
                imgOne.current,
                { filter: "blur(5px)" },
                {
                    filter: "blur(0)",
                    duration: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: barOne.current,
                        start: "top center",  
                        end: "top 40%",        
                        scrub: true,          
                               
                    }
                }
            );
        }
    
      
        if (imgTwo.current && barTwo.current) {
            gsap.to(barTwo.current, {
                height: "110px",
                backgroundColor: "white",
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: barTwo.current,
                    start: "top bottom",  
                    end: "top 30%",       
                    scrub: true,          
                           
                }
            });
    
            gsap.fromTo(
                imgTwo.current,
                { filter: "blur(5px)" },
                {
                    filter: "blur(0)",
                    duration: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: barTwo.current,
                        start: "top center",   
                        end: "top 40%",        
                        scrub: true,           
                               
                    }
                }
            );
        }
    
        if (imgThree.current && barThree.current) {
            gsap.to(barThree.current, {
                height: "110px",
                backgroundColor: "white",
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: barThree.current,
                    start: "top bottom",  
                    end: "top 30%",       
                    scrub: true,          
                        
                }
            });
    
            gsap.fromTo(
                imgThree.current,
                { filter: "blur(5px)" },
                {
                    filter: "blur(0)",
                    duration: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: barThree.current,
                        start: "top center",   
                        end: "top 40%",        
                        scrub: true,           
                             
                    }
                }
            );
        }
    

        if (barFour.current) {
            gsap.to(barFour.current, {
                height: "110px",
                backgroundColor: "white",
                duration: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: barFour.current,
                    start: "top bottom",  
                    end: "top 30%",       
                    scrub: true,          
                           
                }
            })};
       
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    
    }, []);
    return (<>
        <div className="about">
            <Nav/>
            <div className="about__one">
                <img src="/img/about/one-about.jpg" alt="" className="about__img" />
                <div className="about__one-content">
                    <h1 className="about__title">THOUGHTS ON A MODERN ITALIAN</h1>
                    <p className="about__text">by Executive Chef, Rob Chambers</p>
                    <p className="about__text">I’ve always wanted to cook in a restaurant that felt like home. One of my fondest memories is of making tortelli with my aunt in Campania - we’d spend hours together focused on the art of pasta making.</p>
                </div>
            <div className="bar-one" ref={barOne}></div>
            </div>
            <div className="about__two">
                <img src="/img/about/two-about.jpg" alt="" className="about__img" ref={imgOne}/>
                <div className="about__two-content">
                    <p className="about__text">I feel truly blessed to have had that experience, as it’s inspired me to get to where I am today, taking the essence of Italian cuisine and interpreting it in my own way. It’s both a joy and a privilege.</p>
                </div>
            <div className="bar-two" ref={barTwo}></div>
            </div>
            <div className="about__three">
            <img src="/img/about/three-about.jpg" alt="" className="about__img" ref={imgTwo}/>
            <div className="bar-three" ref={barThree}></div>
            </div>
            <div className="about__four">
                 <img src="/img/about/four-about.jpg" alt="" className="about__img" ref={imgThree}/>
                <p className="about__text">I always cook from the heart, whilst respecting heritage and focusing on craft. This approach translates directly onto the plate and touches everything we do at Luca. It’s what make us A Modern Italian.</p>
            <div className="bar-four" ref={barFour}></div>
            </div>
            <div className="about__five">
                <button className="about__five-btn">STORIES</button>
            </div>
        </div>
        <Footer footerClass={"footerAbout"}/>
    </>)
}
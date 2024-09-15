import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";




export function Nav({notShow}){
    const menu = useRef();
    const list = useRef();
    const bar = useRef();
    const logo = useRef();
    const menuMobile = useRef();
    const menuMobileOne = useRef();
    const menuMobileTwo = useRef();
    const nav=useRef();

    const timeLine = gsap.timeline({ paused: true, reversed: true });
    const timeLineSmall = gsap.timeline({ paused: true, reversed: true });
    const timeLineMobile = gsap.timeline({ paused: true, reversed: true });

    timeLine.fromTo(bar.current, { width: "0px", opacity: 0 }, { width: "88px", opacity: 1, ease: "power1.in", duration: 0.2 })
        .fromTo(list.current, { opacity: 0 }, { display: "flex", opacity: 1, duration: 0.5, ease: "power1.in" }, "<")
        .to(logo.current, { margin: 0 });

    timeLineSmall.fromTo(bar.current, { width: "0px", opacity: 0 }, { width: "88px", opacity: 1, ease: "power1.in", duration: 0.4 })
        .fromTo(logo.current, { display: "flex" }, { display: "none", duration: 0.2 })
        .fromTo(list.current, { opacity: 0, display: "none" }, { display: "flex", opacity: 1, duration: 0.5, ease: "power1.in" }, "<");

    timeLineMobile.to(menuMobileOne.current, { position: "absolute", rotate: "45deg", duration: 0.3 })
        .to(menuMobileTwo.current, { position: "absolute", rotate: "-45deg", duration: 0.3 }, "<")
        .to(list.current, { display: "flex", opacity: 1 }, "<"); 

 


    
    useEffect(() => {
        
        timeLine.current = gsap.timeline({ paused: true, reversed: true });
        timeLineSmall.current = gsap.timeline({ paused: true, reversed: true });
        timeLineMobile.current = gsap.timeline({ paused: true, reversed: true });

        timeLine.current
            .fromTo(bar.current, { width: "0px", opacity: 0 }, { width: "88px", opacity: 1, ease: "power1.in", duration: 0.2 })
            .fromTo(list.current, { opacity: 0 }, { display: "flex", opacity: 1, duration: 0.5, ease: "power1.in" }, "<")
            .to(logo.current, { margin: 0 });

        timeLineSmall.current
            .fromTo(bar.current, { width: "0px", opacity: 0 }, { width: "88px", opacity: 1, ease: "power1.in", duration: 0.4 })
            .fromTo(logo.current, { display: "flex" }, { display: "none", duration: 0.2 })
            .fromTo(list.current, { opacity: 0, display: "none" }, { display: "flex", opacity: 1, duration: 0.5, ease: "power1.in" }, "<");

        timeLineMobile.current
            .to(menuMobileOne.current, { position: "absolute", rotate: "45deg", duration: 0.3 })
            .to(menuMobileTwo.current, { position: "absolute", rotate: "-45deg", duration: 0.3 }, "<")
            .to(list.current, { display: "flex", opacity: 1 }, "<");

        
        const handleClick = () => {
            timeLine.current.reversed() ? timeLine.current.play() : timeLine.current.reverse();
        };

        const handleClickTwo = () => {
            timeLineSmall.current.reversed() ? timeLineSmall.current.play() : timeLineSmall.current.reverse();
        };

        const handleMobile = () => {
            timeLineMobile.current.reversed() ? timeLineMobile.current.play() : timeLineMobile.current.reverse();
        };

        let lastScrollY = window.scrollY;
        const scrollEv=() =>{
            const currentScrollY = window.scrollY;

   
    if (currentScrollY > lastScrollY && logo.current) {
        logo.current.style.display="none";
        console.log("Scrolling down");
       
    } 
    
    else if (currentScrollY < lastScrollY && logo.current) {
        logo.current.style.display="flex"
        console.log("Scrolling up");
        
    }

   
    lastScrollY = currentScrollY;
        }
       
        const updateListeners = () => {
            if (menu.current) {
                menu.current.removeEventListener("click", handleClick);
                menu.current.removeEventListener("click", handleClickTwo);

                if (window.innerWidth > 1024) {
                    menu.current.addEventListener("click", handleClick);
                } else {
                    menu.current.addEventListener("click", handleClickTwo);
                }
            }
        };

        if (menuMobile.current) {
            menuMobile.current.addEventListener("click", handleMobile);
        }

        updateListeners();
        window.addEventListener("resize", updateListeners);

        window.addEventListener("scroll",scrollEv);
      
        return () => {
            if (menuMobile.current) {
                menuMobile.current.removeEventListener("click", handleMobile);
            }
            if (menu.current) {
                menu.current.removeEventListener("click", handleClick);
                menu.current.removeEventListener("click", handleClickTwo);
            }
            window.removeEventListener("resize", updateListeners);
        };
    }, []);
    
    return(
        <>
            <nav className="nav" ref={nav}>
                <div className="nav__box-one">
                    <div className="nav__menu-mobile" ref={menuMobile}>
                        <div className="nav__menu-mobile-one" ref={menuMobileOne}></div>
                        <div className="nav__menu-mobile-two" ref={menuMobileTwo}></div>
                    </div>
                <button className="nav__menu" ref={menu}>Menu</button>
                <div className="bar" ref={bar}></div>
                <ul className="nav__list" ref={list}>
                <li className="nav__list-item">
            <Link className="nav__list-item" to="/about" style={{ textDecoration: 'none'}}>About Us</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-item" to="/private" style={{ textDecoration: 'none'}}>Private Dining</Link>
                </li>
                <li className="nav__list-item">
                     <Link className="nav__list-item" to="/stories" style={{ textDecoration: 'none'}}>Stories</Link>
                </li>
                <li className="nav__list-item">
                    <Link className="nav__list-item" to="/menu" style={{ textDecoration: 'none'}}>Menus</Link>
                </li>
                    <li className="nav__list-item">
                        <Link className="nav__list-item" to="/people" style={{ textDecoration: 'none'}}>People</Link>
                        </li>
                </ul>
                </div>
                <h1 id="logo" ref={logo} className={`${notShow?notShow:""}`}><Link id="logo" ref={logo} className={`${notShow?notShow:""}`} style={{ textDecoration: 'none'}} to={"/"}>VERO</Link></h1>
                <div className="nav__box-two">
                <svg width="32px" height="32px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg" fill="#000000">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="none" stroke-linejoin="none"/>

<g id="SVGRepo_iconCarrier"> <g id="color"> <rect x="26.5892" y="46.4526" width="19.0828" height="3.5434" fill="#ffffff" stroke="none" stroke-miterlimit="10" stroke-width="0.9541"/> <path fill="#ffffff" d="M38.3593,53.3015c.7194,2.8877,1.9365,3.03,1.9365,6.2157,0,4.5215-4.2132,6.9738-4.2132,6.9738l-.0154.009-.0153-.009s-4.2132-2.4523-4.2132-6.9738c0-3.1847,1.2166-3.3279,1.936-6.2137"/> <path fill="#ffffff" d="M33.78,42.8976c-1.7823-7.1024-7.612-13.29-7.612-19.5871,0-7.4337,9.8842-17.7944,9.8842-17.7944L36.0673,5.5l.0153.0161s9.8843,10.3607,9.8843,17.7944c0,6.2974-5.83,12.4848-7.612,19.5872"/> <path fill="#ffffff" d="M42.3976,42.8984c2.1073-3.01,5.6779-5.8795,8.4984-5.8795,4.28,0,5.43,1.93,5.43,3.77a19.4669,19.4669,0,0,1-1.3034,5.1371s8.6413-.46,8.6413-6.9005S58.55,29.7445,52.876,29.7445c-4.8767,0-12.547,4.2982-14.5211,13.1532"/> <path fill="#ffffff" d="M38.3593,53.3015c2.18,6.6031,9.303,5.1565,9.303,5.1565a5.732,5.732,0,0,0,4.6-6.21,10.2325,10.2325,0,0,1-5.98,1.9168,6.1052,6.1052,0,0,1-3.3222-.861"/> <path fill="#ffffff" d="M33.7747,53.3035c-2.18,6.6006-9.2022,5.1545-9.2022,5.1545a5.732,5.732,0,0,1-4.6-6.21,10.2325,10.2325,0,0,0,5.98,1.9168,6.106,6.106,0,0,0,3.3218-.8607"/> <path fill="#ffffff" d="M29.8373,42.8984c-2.1073-3.01-5.678-5.8795-8.4985-5.8795-4.28,0-5.43,1.93-5.43,3.77a19.4669,19.4669,0,0,0,1.3034,5.1371s-8.6413-.46-8.6413-6.9005,5.1144-9.2814,10.7881-9.2814c4.8768,0,12.4469,4.2977,14.4209,13.1531"/> <path fill="#ffffff" d="M36.0826,66.491s4.2132-2.4523,4.2132-6.9738c0-3.1855-1.2171-3.328-1.9365-6.2157h-2.292Z"/> <path fill="#ffffff" d="M36.0673,42.8977h2.2876c1.7822-7.1024,7.612-13.29,7.612-19.5872,0-7.4337-9.8843-17.7944-9.8843-17.7944Z"/> <path fill="#ffffff" d="M54.4016,45.9264a19.4657,19.4657,0,0,0,1.3035-5.1371c0-1.84-1.15-3.77-5.43-3.77-2.8206,0-6.3912,2.8693-8.4985,5.88H40.234s3.2832-8.4891,9.9579-8.4891c0,0,8.55-.75,8.55,6.3372C58.7415,40.7465,58.9617,45.9264,54.4016,45.9264Z"/> <path fill="#ffffff" d="M17.86,45.9264a19.4669,19.4669,0,0,1-1.3034-5.1371c0-1.84,1.15-3.77,5.43-3.77,2.82,0,6.3912,2.8693,8.4984,5.88h1.5425s-3.2833-8.4891-9.9579-8.4891c0,0-8.55-.75-8.55,6.3372C13.52,40.7465,13.3,45.9264,17.86,45.9264Z"/> <path fill="#ffffff" d="M51.5135,52.694a10.2325,10.2325,0,0,1-5.98,1.9168,4.2434,4.2434,0,0,1-3.3753-1.3093H40.5939s1.852,3.1942,4.9038,3.1942C45.4977,56.4957,51.5135,56.7305,51.5135,52.694Z"/> <path fill="#ffffff" d="M20.5569,52.694a10.2329,10.2329,0,0,0,5.98,1.9168,4.2436,4.2436,0,0,0,3.3754-1.3093h1.5638s-1.852,3.1942-4.9038,3.1942C26.5727,56.4957,20.5569,56.7305,20.5569,52.694Z"/> </g> <g id="line"> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M38.3593,53.3015c.7194,2.8877,1.9365,3.03,1.9365,6.2157,0,4.5215-4.2132,6.9738-4.2132,6.9738l-.0154.009-.0153-.009s-4.2132-2.4523-4.2132-6.9738c0-3.1847,1.2166-3.3279,1.936-6.2137"/> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M33.78,42.8976c-1.7823-7.1024-7.612-13.29-7.612-19.5871,0-7.4337,9.8842-17.7944,9.8842-17.7944L36.0673,5.5l.0153.0161s9.8843,10.3607,9.8843,17.7944c0,6.2974-5.83,12.4848-7.612,19.5872"/> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M42.3976,42.8984c2.1073-3.01,5.6779-5.8795,8.4984-5.8795,4.28,0,5.43,1.93,5.43,3.77a19.4669,19.4669,0,0,1-1.3034,5.1371s8.6413-.46,8.6413-6.9005S58.55,29.7445,52.876,29.7445c-4.8767,0-12.547,4.2982-14.5211,13.1532"/> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M38.3593,53.3015c2.18,6.6031,9.303,5.1565,9.303,5.1565a5.732,5.732,0,0,0,4.6-6.21,10.2325,10.2325,0,0,1-5.98,1.9168,6.1052,6.1052,0,0,1-3.3222-.861"/> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M33.7747,53.3035c-2.18,6.6006-9.2022,5.1545-9.2022,5.1545a5.732,5.732,0,0,1-4.6-6.21,10.2325,10.2325,0,0,0,5.98,1.9168,6.106,6.106,0,0,0,3.3218-.8607"/> <path fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083" d="M29.8373,42.8984c-2.1073-3.01-5.678-5.8795-8.4985-5.8795-4.28,0-5.43,1.93-5.43,3.77a19.4669,19.4669,0,0,0,1.3034,5.1371s-8.6413-.46-8.6413-6.9005,5.1144-9.2814,10.7881-9.2814c4.8768,0,12.4469,4.2977,14.4209,13.1531"/> <line x1="45.672" x2="26.5892" y1="49.996" y2="49.996" fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083"/> <line x1="26.5892" x2="45.672" y1="46.4526" y2="46.4526" fill="none" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9083"/> </g> </g>

</svg>
                <button className="nav__button d">RESERVATIONS</button>
                <button className="nav__button m">BOOK</button>
                </div>
            </nav>
        
        
        </>
    )
}
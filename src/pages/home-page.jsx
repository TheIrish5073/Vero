import React from "react";
import { Nav } from "../components/nav-component.jsx";
import { Footer } from "../components/footer-component.jsx";

export function Home(){
    

    return (
        <>
            <Nav/>
            <div className="home">
                <div className="home__one">
                    <img src="/img/home/one-home.jpg" alt="" className="home__one-img" />
                </div>
                <div className="home__two">
                    <img src="/img/home/two-home.jpg" alt="" className="home__two-img" />
                    <div className="home__two-content h">
                        <h1 className="homeTitle">FROM THE PAST</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">The bounty of summer</h2>
                    </div>
                </div>
                <div className="home__three" >
                <video autoPlay loop muted className="home__three-video">
                    <source src="/video/home/one-home.mp4" type="video/mp4"/>
                        </video>
                    <div className="home__three-content h">
                        <h1 className="homeTitle">PRIVATE DINING</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">We make room for the curious</h2>
                    </div>

                </div>
                <div className="home__four" >
                    <img src="/img/home/four-home.jpg" alt="" className="home__four-img" />
                    <div className="home__four-content h">
                        <h1 className="homeTitle">ABOUT US</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">Thoughts on a Modern Italian</h2>
                    </div>
                </div>
                <div className="home__five" >
                <video autoPlay loop muted className="home__five-video">
                    <source src="/video/home/five-home.mp4" type="video/mp4"/>
                        </video>
                    <div className="home__five-content h">
                        <h1 className="homeTitle">VERO + FOLK</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">Be better not bitter</h2>
                    </div>
                </div>
                <div className="home__six" >
                <img src="/img/home/six-home.jpg" alt="" className="home__six-img" />
                    <div className="home__six-content h">
                        <h1 className="homeTitle">PEOPLE</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">Discover life at VERO</h2>
                    </div>
                </div>
                <div className="home__seven" >
                <img src="/img/home/seven-home.jpg" alt="" className="home__seven-img" />
                    <div className="home__seven-content h">
                        <h1 className="homeTitle">STORIES</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">Tales of all things VERO</h2>
                    </div>
                </div>
                <div className="home__eight" >
                <video autoPlay loop muted className="home__eight-video">
                    <source src="/video/home/eight-home.mp4" type="video/mp4"/>
                        </video>
                    <div className="home__eight-content h">
                        <h1 className="homeTitle">LOLA + FILIPO</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">I hold you, dearly </h2>
                    </div>
                </div>
                <div className="home__nine" >
                <img src="/img/home/nine-home.jpg" alt="" className="home__nine-img" />
                    <div className="home__nine-content h">
                        <h1 className="homeTitle">VERO BY NIGHT</h1>
                        <div className="homeBar"></div>
                        <h2 className="homeTitle2">Lights low and spirits high</h2>
                    </div>
                </div>
            </div>
            <Footer footerClass={"footerHome"}/>
        </>
    )
}
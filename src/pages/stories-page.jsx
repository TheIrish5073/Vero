import React from "react";
import { Nav } from "../components/nav-component";
import { Footer } from "../components/footer-component";

export function Stories(){
   

    return (<>
            <Nav/>
        <div className="stories">
            <div className="stories__one" >
                <div className="stories__one-grid">
                    <img src="/img/stories/one-stories.jpg" alt="" className="stories__img" />
                    <h1 className="stories__title">From the pass</h1>
                </div>
            </div>
            <div className="stories__two" >
                <div className="stories__two-grid">
                     <video alt="" className="stories__video" autoPlay loop muted>
                        <source src="/video/stories/one-stories.mp4" type="video/mp4" />
                     </video>
                    <h1 className="stories__title">Be better not bitter</h1>
                </div>
            </div>

            <div className="stories__three" >
                <div className="stories__three-grid">
                    <img src="/img/stories/three-stories.jpg" alt="" className="stories__img" />
                    <h1 className="stories__title">Clenkerwell Design Week 2024 </h1>
                </div>
            </div>

            <div className="stories__four">
                <div className="stories__four-grid">
                    <img src="/img/stories/four-stories.jpg" alt="" className="stories__img" />
                    <h1 className="stories__title">Are you sitting comfortably? </h1>
                </div>
            </div>

            <div className="stories__five">
                <div className="stories__five-grid">
                     <video alt="" className="stories__video" autoPlay loop muted>
                        <source src="/video/stories/two-stories.mp4" type="video/mp4" />
                     </video>
                    <h1 className="stories__title">I hold you, dearly...</h1>
                </div>
            </div>

            <div className="stories__six">
                <div className="stories__six-grid">
                    <img src="/img/stories/six-stories.jpg" alt="" className="stories__img" />
                    <h1 className="stories__title">Vero by night </h1>
                </div>
            </div>
    <Footer footerClass={"footerStories"}/>
        </div>
    </>)
}
import React from "react";
import project11 from "../images/GS1.png";
import project12 from "../images/GS2.png";
import prework from "../images/preworkPicture.png";

function Projects () {
    return (
        <div>
            <h2>Work</h2>
        <div>
            <a href="https://ivatheking.github.io/divrework-study-guide/">Prework Study Guide</a>
            <div>This was my very first time touching any type of web development. It was assigned to us prior to the coding bootcamp starting and helped get fingers on keys to catch the vibe of the coding world.</div>
        </div>
        <div><img src={prework}/></div>
        <div>
            <a href="https://alexbrenes999.github.io/divroject1/">Gaming Spotlight</a>"
            <div>I was part of a two man front end team for this project, it helped me develop my css and html skills and allowed me to gain experience with bouncing files back and forth with another front end dev on github to successfully create, style, and fix a website in a semi-proffessional setting.</div>
            <div><img src={project11}/></div>
            <div><img src={project12}/></div>
        </div>
        <div>
            <a href="">OnlyDevs</a>
            <div>OnlyDevs was my final project in the coding bootcamp. I was assigned the task of backend support which really helped me pick up on backend skill that I was extremely lacking. The lead back end dev was the developer with whom I work on the front end in the first project and the synergy was there and since he had more experience with backend, he was able to explain more to me as we went along making the code.</div>
        </div>
        </div>
    )
}

export default Projects;
import React from "react";
import Me from "../images/ThisIsMe.jpeg"

function Home () {
    return (
        <div id="about-me" class="meat">
                <h2>About Me</h2>
                <div><img src={ Me }/></div>
                <div>
                I am a 25 year old currently studying programming under the UCF Bootcamp. I work at a mom and pop shop and tutor math up to Calculus 1 on the side. I love animals, the gym, music, and hanging out with my friends.
                </div>
            </div>
    )
};


export default Home;
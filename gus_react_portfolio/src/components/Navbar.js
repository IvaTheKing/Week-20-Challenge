import { Link } from "react-router-dom";


function Navbar () {
    return (
        <header>
            <h1>Gustavo A. Rivera</h1>
            <nav class="text-right">
                <div>
                     <Link to="/">About Me </Link>
                    
                     <Link to="/Projects">Work</Link>
                    
                     <Link to="/ContactInfo">Contact Me</Link>
                    
                     <Link to="/Resume">Resume</Link>
                    
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
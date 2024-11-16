import logo from "../assets/Narendra-logo.jpg"
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
const Navbar = () => {
    return(
       <nav className="flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2 rounded-lg" width={105} height={105} alt="Logo" />
        </a>
        </div>
        <div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                <a href="https://www.linkedin.com/in/narendra-kumar-sharma-32345a191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="LinkedIn"
                >
                    <FaLinkedin/>                
                </a>
                <a href="https://github.com/NarendraSharma-97"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="Github"
                >
                    <FaGithub/>                
                </a>
                <a href="https://www.instagram.com/_imnarendra._/"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="Instagram"
                >
                    <FaInstagram/>                
                </a>
                <a href="https://x.com/D_Code97"
                target="_blank"
                rel="noopener nopreferrer"
                aria-label="X"
                >
                    <FaTwitter/>                
                </a>
            </div>
        </div>
       </nav>
    )
}
export default Navbar;
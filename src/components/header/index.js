import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import "./header.scss";

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const handleToogleMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <div className={"Header"}>
        <div className={"logo"}>
            <img src={logo} alt={"logo"}></img>
        </div>
        <div className={`row  ${ isOpen ? 'open' : '' }`}>
            <ul className={`navbar`}>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Features</Link></li>
                <li><Link to={"/"}>Pricing</Link></li>
                <li><Link to={"/"}>Testimontals</Link></li>
                <li><Link to={"/"}>Help</Link></li>
            </ul>
            <div className={"auth"}>
                <Link to ={"/"} className={""}>Sign In</Link>
                <Link className={"btn btn-outlined btn-md"} to={"/"}>Sign Up</Link>
            </div>
        </div>   
        <div id={'toogleMenu'} onClick={handleToogleMenu}>
            <i className={'material-icons'}>menu</i>    
        </div>   
    </div>)
}

export default Header;
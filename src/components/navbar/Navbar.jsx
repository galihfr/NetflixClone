import './navbar.scss'
import React, {useState} from 'react'
import netflixlogo from '../../assets/images/netflix-logo.png'
import avatarprofile from '../../assets/images/avatar-profile.png';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null)
    }
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={netflixlogo} alt="netflix-logo" />                    
                    <span className="active">Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>Latest</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <Notifications className="icon"/>
                    <div className="profile icon">
                        <img src={avatarprofile} alt="avatar" />
                        <ArrowDropDown/>
                        <div className="options">
                            <span>Account</span>
                            <span>Setting</span>
                            <span>Sign out of Netflix</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar



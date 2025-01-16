import { useState, useEffect } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink, useLocation } from "react-router-dom"

function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the route changes
    setShowMenu(false);
  }, [location]);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className="container">
        <div className="child">
          <div className="logo">Country Flag</div>
          
          <nav className={showMenu ? "menu-mobile" : "menu-web"}>
              <ul>
              <li> <NavLink to="/" className="link">Home</NavLink> </li>  
              <li> <NavLink to="/about" className="link">About</NavLink> </li>  
              <li> <NavLink to="/country" className="link">Country</NavLink> </li>  
              <li> <NavLink to="/contact" className="link">Contact</NavLink> </li>  
              </ul>
          </nav>   
              
          <div className="ham-menu">
            <button onClick={handleButtonToggle} className="ham-button"><GiHamburgerMenu/></button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Header

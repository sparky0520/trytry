import './navbar.css';




const Navbar = () => {
    const handleNavigation = (path) => {
        window.location.href = path;
    };
    

    return (
        <div className='nav'>
            <div className='nav-logo' onClick={() => handleNavigation('/home')}>Hello</div>
            <ul className='nav-menu'>
                <li onClick={() => handleNavigation('/home')}>Home</li>
                <li onClick={() => handleNavigation('/explore')}>Explore</li>
                <li onClick={() => handleNavigation('/about')}>About</li>
                <li className='nav-contact' onClick={() => handleNavigation('/contact')}>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;

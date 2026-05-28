import React, { useState } from 'react';
import './navbarBelt.css';
import amazonLogo from '../../../Assets/amazon-logo-icon.png';
import india from '../../../Assets/indian-flag.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const NavbarBelt = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const handleSearch = (event) => {
        event.preventDefault();
        const trimmed = query.trim();
        if (!trimmed) return;
        navigate(`/search?q=${encodeURIComponent(trimmed)}`);
        setQuery('');
    };

    return (
        <div className='navbarBelt'>
            <div className="leftNavBelt">
                <Link to={'/'} className="leftNavBeltLogo" >
                    <img className='amazonLogoNavbar' src={amazonLogo} alt='amazonLogo' />
                    <span className='navbar_inLogo'>.in</span>
                </Link>
<div className='navbarBeltLocation'>
    <div className='navbarBeltLocationImg'></div>
    <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize: "22px" }} />
</div>
<div className='navbarBeltLocationPlace'>
    <div className='navbarBeltLocationTop'>Delivering to Hyderabad 411033</div>
    <div className='navbarBeltLocationBottom'>Update Location</div>
</div>
            </div>
            <div className="navbarBeltSearchBox">
                <form className="navbarBeltSearchDiv" onSubmit={handleSearch}>
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: '20px' }} />
                    </div>
                    <input
                        className='navbarBeltInputSearchBox'
                        type='text'
                        value={query}
                        placeholder='Search products, brands and more'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type='submit' className='searchIconNavbarBelt'>
                        <SearchIcon className='searchIconNavbarBeltIcon' />
                    </button>
                </form>
            </div>
            <div className="rightSideNavbarBelt">
                <div className="indianFlagCode">
                    <img src={india} alt='india' className='indiaFlag' />
                    <div className='indiaCodeNavbarBelt'>
                        EN
                        <ArrowDropDownOutlinedIcon
                            sx={{ fontSize: "16px", marginTop: "1px", marginLeft: 0.4 }}
                            className='indiaCodeNavbarBeltDrp'
                        />
                    </div>
                </div>
                <div className='helloSignInNavbarBelt'>
                    <div className='helloTopNavbarBelt'>Hello, Divya!</div>
                </div>
                <div className='helloSignInNavbarBelt'>
                    <div className='helloTopNavbarBelt'>Returns</div>
                    <div className='indiaCodeNavbarBelt'>& Orders</div>
                </div>
                <Link to={'/cart'} className="helloSignInNavbarBelt">
                    <span className='cartItemNumberNavbarBelt'>{cartItems?.length || 0}</span>
                    <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span></div>
                </Link>
            </div>
        </div>
    );
}

export default NavbarBelt
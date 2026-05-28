import React from 'react'
import './navbarBanner.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const options = [
  { name: 'Fresh', active: false },
  { name: 'Amazon miniT', active: false },
  { name: 'Sell', active: false },
  { name: 'Best Sellars', active: false },
  { name: "Today's Deals", path: '/products', active: true },
  { name: 'Mobiles', active: false },
  { name: 'Electronics', active: false },
  { name: 'Prime', active: false },
  { name: 'Customer Service', active: false },
  { name: 'Fashion', active: false },
  { name: 'Home&Kitchen', active: false }
];

const NavbarBanner = () => {
  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">
        <div className='optionsNavbarBanner'>
          <MenuIcon sx={{ fontSize: "24px" }} />All
        </div>
        {options.map((option, index) => (
          option.active ? (
            <Link to={option.path} className='optionsNavbarBanner' key={index}>
              <div className='allOptionsNavbarBanner'>{option.name}</div>
            </Link>
          ) : (
            <div className='optionsNavbarBanner' key={index}>
              <div className='allOptionsNavbarBanner'>{option.name}</div>
            </div>
          )
        ))}


      </div>
      <div className="navbarBannerRightSide">
        <img src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" alt='amazonPrime Logo' />
      </div>
    </div>
  )
}

export default NavbarBanner
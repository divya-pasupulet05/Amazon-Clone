import React from 'react'
import './footer.css';
import amazonLogo from '../../Assets/amazon-logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="footerCont1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">About Us</div>
                        <div className="contentFooterSubTitleCont">Careers</div>
                        <div className="contentFooterSubTitleCont">Press Releases</div>
                        <div className="contentFooterSubTitleCont">Amazon Cares</div>
                        <div className="contentFooterSubTitleCont">Amazon Science</div>
                    </div>

                </div>
                <div className="footerCont1">
                    <div className="contentFooterTitle">Connect With Us</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Instagram</div>
                        <div className="contentFooterSubTitleCont">Twitter</div>
                        <div className="contentFooterSubTitleCont">Facebook</div>
                    </div>
                </div>

                <div className="footerCont1">
                    <div className="contentFooterTitle">Make Money With US</div>
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Sell On Amazon</div>
                        <div className="contentFooterSubTitleCont">Sell Under Amazon Accelerator</div>
                        <div className="contentFooterSubTitleCont">Amazon Global Selling</div>
                        <div className="contentFooterSubTitleCont">Become An Affiliate</div>
                        <div className="contentFooterSubTitleCont">Fulfilment By Amazon</div>
                        <div className="contentFooterSubTitleCont">Advertise Your Products</div>
                        <div className="contentFooterSubTitleCont">Amazon Pay On Merchants</div>
                    </div>
                </div>
                
                <div className="footerCont1">
                    <div className="contentFooterTitle">Lets Us Help You</div>
                    {/* please watch the video for code */}
                    <div className="contentFooterSubTitlediv">
                        <div className="contentFooterSubTitleCont">Your Account</div>
                        <div className="contentFooterSubTitleCont">Returns Centre</div>
                        <div className="contentFooterSubTitleCont">100% Purchase Protection</div>
                        <div className="contentFooterSubTitleCont">Amazon App Download</div>
                        <div className="contentFooterSubTitleCont">Amazon Assistant Download</div>
                        <div className="contentFooterSubTitleCont">Help</div>
                    </div>
                </div>
            </div>
            <div className="amazonImg">
                <img className='amazonImgFooter' src={amazonLogo} alt="Amazon Logo" />
            </div>
        </div>
    )
}

export default Footer
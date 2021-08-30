import React from 'react'
import './Footer.scss'
import {AiFillFacebook,AiFillInstagram,AiOutlineTwitter} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='FooterContainer'>
                <div className='FooterInfor'>
                    <h1 className='Logo'>BookStore</h1>
                    <div className='inforDetailGr'>Address: <span className='inforDetail'>Dai Loc - Quang Nam</span></div>
                    <div className='inforDetailGr'>Email: <span className='inforDetail'>Duchai4320@gmail.com</span></div>
                    <div className='inforDetailGr'>Phone: <span className='inforDetail'>+84 123 445 4567</span></div>
                    <div className='SocialIconGroup'>
                        <AiFillFacebook className='SocialMedia'></AiFillFacebook>
                        <AiFillInstagram className='SocialMedia'></AiFillInstagram>
                        <AiOutlineTwitter className='SocialMedia'></AiOutlineTwitter>
                        <FaPinterest className='SocialMedia'></FaPinterest>
                    </div>
                </div>
                <div className='FooterGroup'>
                    <h2 className='FooterGroupTitle'>Pages</h2>
                    <div className='FooterLinks'>
                        <div className='FooterLink'>Home</div >
                        <div className='FooterLink'>Shop</div >
                        <div className='FooterLink'>Blog</div >
                        <div className='FooterLink'>Forum</div >
                        <div className='FooterLink'>About us</div >
                        <div className='FooterLink'>Sign in / Register</div >
                    </div>
                </div>
                <div className='FooterGroup'>
                    <h2 className='FooterGroupTitle'>Policy</h2>
                    <div className='FooterLinks'>
                        <div className='FooterLink'>Terms of Service</div >
                        <div className='FooterLink'>Contact Us</div >
                        <div className='FooterLink'>Return Policy</div >
                        <div className='FooterLink'>Privacy</div >
                    </div>
                </div>
               
                <div className='FooterGroup'>
                    <h2 className='FooterGroupTitle'>Categories</h2>
                    <div className='FooterLinks'>
                        <div className='FooterLink'>Sefl Helps</div >
                        <div className='FooterLink'>Children's Books</div >
                        <div className='FooterLink'>Life style</div >
                        <div className='FooterLink'>Science</div >
                        <div className='FooterLink'>Other</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

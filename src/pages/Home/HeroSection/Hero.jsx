import React,{useState} from 'react'
import video2 from '../../../videos/v2.mp4'
import video1 from '../../../videos/v1.mp4'
import './Hero.scss'
import SearchBox from '../../../components/SearchBox/SearchBox'
import{MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

const Hero = () => {
    const [hover, setHover] = useState(false);
    const onHover = () =>{
        setHover(!hover);
    }

    return (
        <div className='HeroContainer'>
            <div className='HeroBg'>
                <video className='VideoBg' type='video/mp4' loop autoPlay muted>
                    <source src={video2} type="video/mp4" />
                    <source src={video1} type="video/mp4" />
                </video>
            </div>
            <div className='HeroContent'>
                <h1 className='HeroTitle'>BookStore</h1>
                <SearchBox className='  '></SearchBox>
                <div className='HeroSloganContainer'>
                    <p className='HeroSlogan'>
                        <i className='Slogan'>" The reading of all good books is like a conversation with the finest minds of past centuries. "</i>
                        <p className='SloganAuthor'>Rene Descartes</p>
                    </p>
                    <p className='HeroSlogan'>
                        <i className='Slogan'>" The more I read, the more I meditate; and the more I acquire, the more I am enabled to affirm that I know nothing. "</i>
                        <p className='SloganAuthor'>Voltaire</p>
                    </p>  
                </div>
                <div className='HeroBtnContainer'>
                    <div className='HeroBtn'onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get Started { hover ? <MdArrowForward className='HeroBtnIcon'/>:<MdKeyboardArrowRight className='HeroBtnIcon'/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

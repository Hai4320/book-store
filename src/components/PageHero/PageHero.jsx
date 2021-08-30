import React from 'react'
import {useHistory} from 'react-router-dom'
import './PageHero.scss'


const PageHero = ({page,linkBefore}) => {
    const history = useHistory();
    return (
        <div className="PageHero">
            <img src={linkBefore.length === 1 ? "./images/hero5.jpg": "../images/hero5.jpg"} alt="Hero BackGround" className="BgImage"></img>
            <div className="PageHeroBG">
                <div className="HeroContent">
                    <div className='HeroTitle'>{page}</div>
                    <div className='HeroLinkConTainer'>
                        <div className="LinkBeforeContainer">
                            {
                                linkBefore.map(i => <div className="linkBefore"><div onClick={() => history.push(i.link)} className='Link'>{i.name} </div><div className="hash">/</div></div>)
                            }
                        </div>
                        <div className='LastLink'>{page}</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default PageHero

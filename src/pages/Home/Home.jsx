import React from 'react'
import Hero from './HeroSection/Hero'
import HotProducts from './HotProductsSection/HotProducts'
import NewPosts from './NewPosts/NewPosts'

import './Home.scss'
const Home = () => {
    React.useEffect(() =>window.scrollTo(0,0),[]);
    return (
        <div className='Home'>
            <Hero></Hero>
            <HotProducts></HotProducts>
            <NewPosts></NewPosts>
        </div>
    )
}

export default Home

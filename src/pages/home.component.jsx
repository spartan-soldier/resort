import React from 'react'
import Hero from '../components/hero.component'
import Banner from '../components/banner.component'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Hero hero = 'defaultHero'>
                <Banner title ='luxurious rooms' subtitle='deluxe rooms starting at $299'>
                    <Link to='/rooms' className= 'btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            
        </div>
    )
}


export default Home;
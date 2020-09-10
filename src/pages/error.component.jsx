import React from 'react'
import Hero from '../components/hero.component';
import Banner from '../components/banner.component';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Hero>
            <Banner title ='404' subtitle ='page not found'>
                <Link to= '/' className ='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error ;
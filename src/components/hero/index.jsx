import { Link } from 'react-router-dom';
import './hero.css';
import React from 'react-dom'
import { FaChevronRight } from 'react-icons/fa';
import headerImage from '../../../public/images/general/header-image.png'

export const Hero = () => {
    return(
        <div className='hero-container'>
            <div className='inner-container'>
                <div className="left-side">
                    <h2>De um novo estilo ao seu Trabalho</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quod placeat adipisci neque dolor! Perferendis, dolorum! Natus deserunt animi facere, in corrupti doloribus, voluptates consequuntur, qui commodi fugit amet iste?</p>
                    <Link to='/products' className='see-more-btn'>
                        Ver agora
                        <FaChevronRight/>
                    </Link>
                </div>
                <div className="right-side">
                    <img src={headerImage} alt="" />
                </div>
            </div>
        </div>
    )
}   
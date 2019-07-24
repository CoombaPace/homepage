import React from 'react'; 
import './animated-text.css' 

export default function SimpleContainer() {
    return (
        <div>
            <div className='animation-box'>
                <span className='hello'>Hello I'm</span>
                    <br/>
                <span className='name'>Mattia Pace</span>
                
                <span className='animated-text'>
                <p className='first-text'>Burning JavaScript at both ends.</p>
                <p className='first2-text'>And in between.</p>
                </span>
                
            </div>
            <div className='about'>
                <secion>
                    <p>
                        A Front/Back/Middle Stack Developer hailing from Italy and the Southern US. Grew up with computers, 
                        but only recently sat down to read the documentation.
                    </p>
                    <p>
                        Interested in UX/UI, Economics, and Design. 
                    </p>
                    <p>
                        Enjoys writing/reading clean, well-commented code, animation, and game design.
                    </p>
                </secion>
            </div>
        </div>
    )
}
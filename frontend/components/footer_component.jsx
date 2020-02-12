import React from 'react';

const Footer = ()=>{
    
    return(
        <div className='Footer'>
            <div className='links'>
                <a href="https://github.com/LamVu1/EcommerceProject" target="_blank" >
                    <img className='icon' src={window.github}/>
                </a>
                <a href="https://www.linkedin.com/in/lam-vu-4b49a5117/" target="_blank" >
                    <img className='icon' src={window.linkedin}/>
                </a> 
                <a href="https://angel.co/lam-vu-2" target="_blank" >
                    <img className='icon' src={window.angelist}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
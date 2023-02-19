import React from 'react'
import { BsLinkedin,BsTwitter, BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';


const SocialMedia = () => {
    return (
    <div className='app__social'>
        <div>
            <a href="https://github.com/Kamlish" target= "_blank" rel="noopener"><BsGithub/></a>
        </div>
        <div>
            <a href="https://pk.linkedin.com/in/kamlish-g-22bba6116" target= '_blank' rel='noopener'><BsLinkedin/></a>
        </div>
        <div>
            <a href="https://twitter.com/kamlishGoswami" target= '_blank' rel='noopener'><BsTwitter/></a>
        </div>
        <div>
            <a href="https://www.facebook.com/KamlishGoswami/" target= '_blank' rel='noopener'><BsFacebook/></a>
        </div>
        <div>
            <a href="https://www.instagram.com/kamlish.goswami/" target= '_blank' rel='noopener'><BsInstagram/></a>
        </div>
    </div>
    )
}

export default SocialMedia
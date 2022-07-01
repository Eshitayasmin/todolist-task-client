import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer class="footer footer-center p-3 lg:p-6 text-base-content bg-black rounded">
            <div className='flex mt-2'>
                <div className='mr-5'>
                    <p><a href="https://www.facebook.com/eshita.yasmin.39"> <FontAwesomeIcon className='bg-blue-600 h-5 w-5 p-1 rounded-full text-white' icon={faFacebookF} /></a></p>
                </div>
                <div className='mr-5'>
                    <a href="https://www.linkedin.com/in/eshita-yasmin-92a598241/"><FontAwesomeIcon className='bg-blue-600 w-5 h-5 p-1 rounded-full text-white' icon={faLinkedin} /></a>
                </div>
                <div>
                    <a href="https://github.com/Eshitayasmin"><FontAwesomeIcon className='bg-blue-600 h-5 w-5 p-1 rounded-full text-white' icon={faGithub} /></a>
                </div>
            </div>
            <div>
                <p className='text-white pb-2'>Copyright © 2022 - All right reserved by Eshita Yasmin</p>
            </div>
        </footer>
    );
};

export default Footer;
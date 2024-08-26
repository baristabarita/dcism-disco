import React from 'react';
import logo from '@/assets/images/full_logo.png';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='flex flex-row justify-between items-center text-sm drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-5 bg-black'>
            <img src={logo} alt="Cisco Logo" className="h-8" />
            <p className="m-auto text-center text-gray-500">© {currentYear} DCISMDISCO</p>
            <p className="text-center text-gray-500">
            Made with | Made with 
            </p>
        </footer>
    );
}

export default Footer;
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import colors from './colors';
import "../../src/App.css"

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [`I am <span style="color: ${colors.orange};">Akshat Sohal.</span>`],
            typeSpeed: 10,
            showCursor: false, // Hides the cursor after typing is complete
        });
    
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='w-full py-48 m-auto primary-color md:max-w-[1780px] max-w-[600px]'>
            <div className='w-full md:max-w-[1780px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-14'>
                <div className='flex flex-col justify-center gap-4'>
                    <p className='text-s py-0 md:block font-medium' style={{ color: colors.white }}>
                        Welcome to my Portfolio Website!
                    </p>
                    <div className="flex justify-between items-center w-full">
                        <h1 className='text-4xl leading-[72px] md:text-6xl font-semibold'>
                            <span ref={el} style={{ color: colors.white }}></span>
                        </h1>
                        <a href="/tutor_resume.pdf" target="_blank" className="bg-black hover:bg-gray-800 transition-colors px-6 py-2 rounded-md text-lg font-bold text-white" style={{ alignSelf: 'center', marginLeft: 'auto' }}>
                            Resume
                        </a>
                    </div>
                    <p className='text-base text-gray-600' style={{ color: colors.orange }}>Software Developer</p>
                    <p className='text-base text-gray-600' style={{ color: colors.orange }}>San Francisco, CA</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;

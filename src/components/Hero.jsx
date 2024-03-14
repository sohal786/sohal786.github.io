import{ useEffect, useRef } from 'react';


import Typed from 'typed.js';


import colors from './colors';
import "../../src/App.css"

const Hero = () => {

    const el = useRef(null);
    // const placeholderRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [`I am  <span style={{ color: "#ee7600" }}>Savy Dhillon.</span>`],
          typeSpeed: 10,
          showCursor: false, // Hides the cursor after typing is complete
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <div className='relative w-full py-0 m-auto primary-color md:max-w-[1780px] max-w-[600px] m-auto py-48'>
            <div className='md:max-w-[1780px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-14'>

                <div className=' absolute top-0 md:flex   flex-col justify-center py-0 gap-4'>
                    <p className='  py-0 md:py-2 text-2xl font-medium' style={{ color: colors.white }}>Welcome to my Personal Website!</p>
                    <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>
                        <span ref={el} style={{ color: colors.white }}></span>
                     </h1>
                    <p className='py-2 text-lg text-gray-600' style={{ color: colors.orange }}>Software Developer</p>
                    <p className='py-2 text-lg text-gray-600' style={{ color: colors.orange }}>San Francisco,CA</p>

                    </div>
            </div>


        </div>
    )
}

export default Hero
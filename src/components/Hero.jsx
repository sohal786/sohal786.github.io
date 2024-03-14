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
        <div className=' w-full py-48  m-auto primary-color md:max-w-[1780px] max-w-[600px] m-auto py-48'>
            <div className=' w-full md:max-w-[1780px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-14'>

                <div className='flex flex-col justify-center gap-4'>
                    <p className='sm:text-s md:text-xl py-0 md block font-medium' style={{ color: colors.white }}>Welcome to my Personal Website!</p>
                    <h1 className='sm:text-3xl leading-[72px] md:text-6xl  font-semibold'>
                        <span ref={el} style={{ color: colors.white }}></span>
                     </h1>
                    <p className=' text-lg text-gray-600' style={{ color: colors.orange }}>Software Developer</p>
                    <p className=' text-lg text-gray-600' style={{ color: colors.orange }}>San Francisco, CA</p>

                    {/* <img src='ME.png'className='icon p-bottom-0 hidden md:flex' ></img> */}
                    {/* <p className='py-2 text-lg text-gray-600' style={{ color: colors.accent }}>Navigating the Future of Tech: A SF State Grad’s Quest for Innovation in Software Development.</p> */}
                    {/* <button className="px-8 py-3 rounded-md font-bold text-white" style={{ backgroundColor: colors.orange }}>GET STARTED TODAY</button> */}
                </div>
            </div>


        </div>
    )
}

export default Hero
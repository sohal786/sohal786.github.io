import React from 'react';
import colors from './colors'; // Assuming you might use the colors from your theme

const Contact = () => {
    return (
        <div id="contact" className='w-full py-48 m-auto bg-transparent text-white md:max-w-[1780px] max-w-[600px]'>
            <div className='m-auto px-4 md:px-14'>
                <h2 className='text-7xl font-medium' style={{ color: colors.white }}>Contact Me</h2>
                <div className='py-10'>
                    <p className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Savy Dhillon</p>
                    <ul className='list-none'>
                        <li className='py-2 text-xl font-medium'>
                            <strong>Email:</strong> <a href="mailto:savidsav99@gmail.com" className='text-blue-600' style={{ color: "#ffd700" }}>savidsav99@gmail.com</a>
                        </li>
                        <li className='py-2 text-xl font-medium'>
                            <strong>Phone:</strong> <a href="tel:+4154654095" className='text-blue-600' style={{ color: "#ffd700" }}>+415 465 4095</a>
                        </li>
                        <li className='py-2 text-xl font-medium'>
                            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/savjot-dhillon/" target="_blank" rel="noopener noreferrer" className='text-blue-600' style={{ color: "#ffd700" }}>linkedin/savjot-dhillon/</a>
                        </li>
                        <li className='py-2 text-xl font-medium'>
                            <strong>GitHub:</strong> <a href="https://github.com/dsav99" target="_blank" rel="noopener noreferrer" className='text-blue-600' style={{ color: "#ffd700" }}>github.com/dsav99</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;

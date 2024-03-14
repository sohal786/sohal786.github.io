import React from 'react';
import colors from './colors'; // Assuming you might use the colors from your theme

const Projects = () => {
    return (

        <div id="projects" className='w-full bg-[#ffffff] p-0  md:py-20'>

       
        <div className='w-full  py-48  m-auto bg-white text-black md:max-w-[1780px] max-w-[600px]'>
            <div className='m-auto px-4 md:px-14'>
                <h2 className='text-7xl font-medium' style={{ color: colors.dark }}>My Projects</h2>
                {/* Project 1 */}
                <div className='py-10'>
                    <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>RAG System Chatbot</h3>
                    {/* <p className='text-xl font-semibold' style={{ color: "#ffd700" }}>Short project description or tagline.</p> */}
                    <ul className='list-disc pl-5'>
                            * Coming Soon *
                    
                    </ul>
                </div>
                {/* Project 2 */}
                <div className='py-10'>
                    <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Billing Full Stack Application</h3>
                    <ul className='list-disc pl-5'>
                        <li>
                            <p>Streamlined billing process for local businesses dealing with low to medium number of customers.</p>
                        </li>

                        <li>
                            <p>Reduced manual workload by 90% through automated data storage and management.</p>
                        </li>

                        <li>
                            <p>Adapted the application based on user feedback, enhancing overall functionality and user satisfaction.</p>
                        </li>

                        <li>
                            <p>Integrated payment functionality for efficient and immediate transactions.</p>
                        </li>

                        <li>
                            <p>Implemented robust user authentication and order management features enabling users to securely sign in and
manage orders using their email and password.</p>
                        </li>
                       
                    </ul>
                </div>
                
            </div>
        </div>
        </div>
    );
}

export default Projects;

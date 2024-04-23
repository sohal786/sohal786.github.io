import React from 'react';
import colors from './colors'; // Assuming you use colors from your theme

const WorkExperience = () => {
    return (
        <div id="work" className='w-full py-48 m-auto bg-transparent text-white md:max-w-[1780px] max-w-[600px]'>
            <div className='m-auto grid px-4 md:px-14'>
                <h2 className='text-7xl font-medium' style={{ color: colors.white }}>Work Experience</h2>

                {/* First Job Experience - Image on the right, updated details */}
                <div className='flex order flex-col md:flex-row-reverse justify-between items-center gap-10 py-10'>
                    <img src="./laavaan_logo.png" alt="Laavaan Company Logo" className="w-[100%] md:w-[30%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Software Engineering Intern</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>Laavaan</h3>
                        <p className="text-white mb-2"> San Francisco Based dating startup which connects people via chaperones.</p>
                        <p className="text-white font-bold mb-2">My role:</p>
                        <ul className='list-disc pl-4'>
                            <li className='text-white-600'>
                                <p>Collaborated with the Engineering Team on server-side development using Express.js and Firebase.</p>
                            </li>
                            <li className='text-white-600'>
                                <p>Leveraged CDN JS and Cloudflare, resulting in a 20% reduction in load times for the web application.</p>
                            </li>
                            <li className='text-white-600'>
                                <p>Improved web app's UX/UI using Flutter, reducing the onboarding failures by 25%.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Second Job Experience - New Role */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-10'>
                    <img src="./miiclab_image.png" alt="Mobile and Intelligent Computing Laboratory Logo" className="w-[80%] md:w-[20%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Undergraduate Researcher</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>Mobile and Intelligent Computing Laboratory</h3>
                        <p className="text-white mb-2"> Research lab that focuses on ML and AI to optimize devices like exo gloves by accelerating deep learning on resource-constrained mobile/edge devices.</p>
                        <p className="text-white font-bold mb-2">My role:</p>
                        <ul className='list-disc pl-4'>
                            <li className='text-white-600'>
                                <p>Coordinated with research PI and graduate students to optimize exo-glove’s real-time object detection.</p>
                            </li>
                            <li className='text-white-600'>
                                <p>Deployed APIs for image segmentation and classification which enhanced device precision by 25%.</p>
                            </li>
                            <li className='text-white-800'>
                                <p>Presented research at the Genentech Scholars Symposium highlighting enhancements achieved by using AI.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Third Job Experience - Tutoring Role */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-10'>
                    <img src="./sfsu.png" alt="METRO Program Logo" className="w-[50%] md:w-[30%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Computer Science Tutor</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>METRO Program</h3>
                        <p className="text-white mb-2"> Mentorship and tutoring program for low-income first-generation college students interested in STEM-related fields.</p>
                        <p className="text-white font-bold mb-2">My role:</p>
                        <ul className='list-disc pl-4'>
                            <li className='text-white-600'>
                                <p>Taught introductory Java and Python to 30+ college freshman, boosting test scores by 30%.</p>
                            </li>
                            <li className='text-white-600'>
                                <p>Provided visual learning resources and customized handwritten notes that enhanced learning outcomes by 25%.</p>
                            </li>
                            <li className='text-white-800'>
                                <p>Mentored 20 students in SF State's most challenging Data Structures and Algorithms class achieving a 100% passing rate.</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Continue the pattern for additional job experiences as needed */}
            </div>
        </div>
    );
}

export default WorkExperience;

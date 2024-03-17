import React from 'react';
import colors from './colors'; // Assuming you might use the colors from your theme

const WorkExperience = () => {
    return (
        <div id="work" className='w-full py-48 m-auto bg-transparent text-white md:max-w-[1780px] max-w-[600px]'>
            <div className='m-auto grid px-4 md:px-14'>
                <h2 className='text-7xl font-medium' style={{ color: colors.white }}>Work Experience</h2>
                {/* First Job Experience - Image on the right */}
                <div className='flex order flex-col md:flex-row-reverse justify-between items-center gap-10 py-10'>
                    <img src="./AMAT.png" alt="First Company Logo" className="flex w-[100%] md:w-[30%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Image and Data Analysis Engineer Intern</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>Applied Materials</h3>
                        <ul className='list-disc'>
                        <li className='text-white-600'>
                                <p>Developed a real-time video monitoring system, reducing manual inspections by 75%, significantly enhancing operational efficiency in manufacturing.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Boosted manufacturing efficiency and accuracy by 90%, improving quality control and minimizing defects.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Engineered a Python-based alert system, achieving 100% machine failure prevention by integrating with CNC machinery for predictive maintenance, eliminating unscheduled downtime.</p>
                            </li>


                            <li className='text-white-600'>
                                <p>Provided process analytics, improving operational insight and yield using Python for advanced data analysis, supporting data-driven decision-making.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Conducted ongoing research into the latest developments in the field, integrating cutting-edge methodologies and technologies into our processes to continually enhance our model's performance and efficiency.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Second Job Experience - Image on the left */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-10 py-10'>
                    <img src="./SFH.svg" alt="Second Company Logo" className="flex w-[80%] md:w-[20%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Software Developer</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>SF Hacks</h3>
                        <ul className='list-disc'>
                        <li className='text-white-600'>
                                <p>Elevated user experience on the SF Hacks website, by implementing responsive design principles and optimizing performance, resulting in a 30% increase in user engagement, using HTML5, CSS3, and JavaScript.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Collaborated with designers to maintain up-to-the-minute website accuracy, ensuring the integration of real-time updates and event information.</p>
                            </li>


                            <li className='text-white-800'>
                                <p>Organized a successful 3-day hackathon at SFSU, accommodating 200+ Bay Area hackers, streamlining logistics to enhance participant experience.</p>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Third Job */}
                <div className='flex order flex-col md:flex-row-reverse justify-between items-center gap-10 py-10'>
                    <img src="./sfsu.png" alt="First Company Logo" className=" flex w-[50%]" />
                    <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Computer Science Tutor</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>San Francisco State University</h3>
                        <ul className='list-disc'>
                        <li className='text-white-600'>
                                <p>Provided one-on-one and group tutoring sessions to over 50 students across Computer Science, Mathematics, and Physics, catering to a wide range of academic levels and learning styles.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Assisted more than 100 students with coursework, projects, and exam preparation, resulting in an average grade improvement of 40%.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Utilized diverse teaching tools and methods in over 200 tutoring sessions, enhancing student understanding and engagement by up to 30%.</p>
                            </li>


                            <li className='text-white-800'>
                                <p>Created a positive and motivating learning environment, evidenced by a 95% student satisfaction rate in post-tutoring feedback surveys.</p>
                            </li>

                          
                        </ul>

                        <div>
                        <h3 className='text-3xl py-5 font-semibold' style={{ color: colors.orange }}>Teacher's Assistant</h3>
                        <h3 className='text-xl font-semibold' style={{ color: "#ffd700" }}>San Francisco State University</h3>
                        <ul className='list-disc'>
                        <li className='text-white-600'>
                                <p>Hosted weekly lab sessions for classes of up to 7 students, providing hands-on assistance with coding exercises, experiments, and projects in a dynamic learning environment.</p>
                            </li>

                            <li className='text-white-600'>
                                <p>Graded and provided constructive feedback on approximately 500 assignments and projects, ensuring timely and fair assessment of student work.</p>
                            </li>


                            <li className='text-white-800'>
                                <p>Collaborated with a team of teaching assistants to coordinate and streamline the grading process, reducing turnaround time for assignment feedback by 25%.
</p>
                            </li>

                            <li className='text-white-800'>
                                <p>Actively participated in weekly meetings with the course professor and fellow TAs, contributing to the continuous improvement of teaching strategies and student learning outcomes.</p>
                            </li>

                        </ul>
                    </div>
                    </div>

                    
                </div>

                
                {/* Continue the pattern for additional job experiences as needed */}
            </div>
        </div>
    );
}

export default WorkExperience;

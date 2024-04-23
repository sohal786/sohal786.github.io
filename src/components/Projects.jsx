import React from 'react';
import colors from './colors'; // Importing color settings from your theme

const Projects = () => {
    return (
        <div id="projects" className='bg-white py-20'>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-5xl font-medium text-black mb-10'>My Projects</h2>

                {/* Full-Stack Tutoring Web Application */}
                <div className='mb-10'>
                    <h4 className='text-3xl text-orange-500 font-semibold mb-3'>
                        Team Lead for Full-Stack Tutoring Web Application | 
                        <a href="https://github.com/sohal786/tutoring-app-WeLearn" 
                           target="_blank" rel="noopener noreferrer" 
                           className='text-blue-500'>Open in GitHub</a>
                    </h4>
                  
                    <ul className='list-disc pl-5 mb-5'>
                        <li>Led a team of six in developing a comprehensive tutoring platform for San Francisco State University, overseeing the project from inception to deployment.</li>
                        <li>Directed the project lifecycle, formulated development strategies, and gained proficiency in a tech stack that includes React, Express, and JavaScript.</li>
                        <li>Enhanced backend functionality by integrating essential features such as database management, user authentication, and session handling.</li>
                        <li>Compiled detailed documentation covering technical specifications, system architecture, and user engagement analytics to guide future scaling efforts.</li>
                    </ul>
                    <p className='text-xl font-bold'>Tech Skills Used:</p>
                    <p>JavaScript, React, NGINX, AWS, HTML, CSS, Bootstrap, MySQL</p>
                    <p className='text-xl font-bold'>Non-Tech Skills Learned:</p>
                    <p>Project management, Agile methodologies, market analysis, UI/UX testing, code review, and professional documentation.</p>
                </div>

                {/* FAT File System Development */}
                <div className='mb-10'>
                    <h4 className='text-3xl text-orange-500 font-semibold mb-3'>
                        FAT File System Development in C (Group Project) | 
                        <a href="https://github.com/CSC415-2023-Fall/FAT-File-System" 
                           target="_blank" rel="noopener noreferrer" 
                           className='text-blue-500'>Open in GitHub</a>
                    </h4>
                    {/* <p className='text-lg text-gray-700 mb-3'>08/2023 – 12/2023</p> */}
                    <ul className='list-disc pl-5 mb-5'>
                        <li>Led a team of four to develop a file system in C, implementing critical functionalities such as volume formatting, directory structuring, and memory management.</li>
                        <li>Created essential shell utilities like ls, cat, and touch to enhance the file system's usability and interface.</li>
                        <li>Documented the project extensively, detailing its design, the challenges faced, and functionalities provided.</li>
                    </ul>
                    <p className='text-xl font-bold'>Tech Skills Used:</p>
                    <p>C++, Linux Operating System, Shell Scripts, Low-Level C Functions like LBA Read and Write, Pipe in Shell</p>
                    <p className='text-xl font-bold'>Non-Tech Skills Learned:</p>
                    <p>Project decomposition, collaborative teamwork, Git version control, and systematic problem-solving.</p>
                </div>

                {/* Eco-Friendly Transportation Database and Discord Bot */}
                <div className='mb-10'>
                    <h4 className='text-3xl text-orange-500 font-semibold mb-3'>
                        Eco-Friendly Transportation Database and Discord Bot Project | 
                        <a href="https://github.com/sohal786/Eco-Friendly-TransportationDB" 
                           target="_blank" rel="noopener noreferrer" 
                           className='text-blue-500'>Open in GitHub</a>
                    </h4>
                    {/* <p className='text-lg text-gray-700 mb-3'>01/2023 – 05/2023</p> */}
                    <ul className='list-disc pl-5 mb-5'>
                        <li>Designed and implemented an eco-friendly transportation database integrated with a user-friendly Discord bot.</li>
                        <li>Managed the full project lifecycle from the initial ERD conceptualization to cloud-based implementation using AWS services.</li>
                        <li>Enabled efficient and interactive data handling and queries through a well-designed Discord bot interface.</li>
                    </ul>
                    <p className='text-xl font-bold'>Tech Skills Used:</p>
                    <p>MySQL, AWS, Replit, JavaScript for Discord bot commands</p>
                    <p className='text-xl font-bold'>Non-Tech Skills Learned:</p>
                    <p>Database design principles, entity-relationship distinction, practical database management, and user interface design.</p>
                </div>

                {/* Music Instrument and Visualizer App */}
                <div className='mb-10'>
                    <h4 className='text-3xl text-orange-500 font-semibold mb-3'>
                        Music Instrument and Visualizer App | 
                        <a href="https://github.com/sohal786/Music-Instrument-and-Visualizer-App" 
                           target="_blank" rel="noopener noreferrer" 
                           className='text-blue-500'>Open in GitHub</a>
                    </h4>
                    <ul className='list-disc pl-5 mb-5'>
                        <li>Implemented a guitar interface using React libraries with 80% of the features of a real guitar.</li>
                        <li>Developed a responsive UI/UX for the guitar connected to the backend via API calls with an overall response accuracy of 90%.</li>
                        <li>Enhanced functionality by adding features like playlists, song search, and albums using MySQL database connectivity.</li>
                    </ul>
                    <p className='text-xl font-bold'>Tech Skills Used:</p>
                    <p>TypeScript, React, MySQL, API calls, CSS, Bootstrap</p>
                    <p className='text-xl font-bold'>Non-Tech Skills Learned:</p>
                    <p>Creative UI/UX design, musical instrument knowledge, understanding of guitar notes and keys and the different sounds they produce.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;


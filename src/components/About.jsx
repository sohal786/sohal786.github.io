import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-white py-20 font-['Lato']"
    >
        <div className="mx-auto px-4 max-w-7xl">
            <h1 className="text-center text-7xl font-bold text-black mb-12">About Me</h1>
            
            <div className="text-center text-lg mb-12">
                <p>Hi, I'm <strong>Akshat Sohal</strong>, a seasoned software developer and entrepreneur, deeply passionate about leveraging technology to enhance everyday life, healthcare, and workplace efficiency. Born in LA and raised in North India, my global perspective enriches my approach to technology solutions.</p>
            </div>
            
            <h2 className="text-center text-5xl font-bold text-orange-500 mb-4">Recent Side Project</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
                <div className="text-lg max-w-2xl text-center mb-6">
                    <p>I recently co-founded <a href="https://saleeka.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Saleeka.io</a>, a health and wellness platform tailored for South Asian immigrants in the US/Canada. My contributions span from authoring a well-received book on nutrition, which sold over 500 copies, to discussing these topics on national TV in India.</p>
                    <p>I spearheaded the development of the platform's website using WordPress and PHP, facilitating future maintenance and updates by non-technical team members.</p>
                </div>
                <img src="/health.jpg" alt="Health and Wellness" className="rounded-lg shadow-lg w-96 h-96"/>
            </div>
            
            <h2 className="text-center text-5xl font-bold text-orange-500 mb-6">Hobbies and Interests</h2>
            <p className="text-center text-lg mb-4 max-w-2xl mx-auto">
                Outside of technology, I enjoy a diverse range of activities, from immersive video gaming sessions to exploring nature through hiking and horse riding. My enthusiasm for wellness extends into nutrition and fitness, influencing both my personal and professional life.
            </p>
            <div className="flex justify-center gap-10 mb-10">
                <img src="./hike.png" alt="Hiking" className="rounded-lg shadow-lg w-64 h-64"/>
                <img src="./horse.png" alt="Horse Riding" className="rounded-lg shadow-lg w-64 h-64"/>
            </div>
        </div>
    </div>
  );
}

export default About;

function Skills() {

    const skillsData = {
        developmentSkills: [
            'HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'C++'
        ],
        otherToolsPlatforms: [
            'Socket.io', 'Cloudinary', 'MongoDB Atlas', 'Git', 'GitHub', 'Zustand','Postman', 'REST API', 'JWT/ Authentication', 'React-Router-DOM', 'UX/UI Design',
        ]
    };

    const SkillBox = ({ skill }) => (
        <div className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap hover:bg-gray-600 transition-colors duration-200">
            {skill}
        </div>
    );

    return (
        <div className="h-full text-gray-100 flex items-start justify-center mx-10 p-4 sm:p-8">
            <div className="flex flex-col items-center relative py-12">

                {/* My Skills Root */}
                <div className="relative z-10">
                    <div className="bg-purple-700 text-white px-8 py-3 rounded-md text-lg font-semibold shadow-lg">
                        MY SKILLS
                    </div>
                </div>

                <div className="relative w-0.5 h-12 bg-gray-600 mt-4 mb-4"></div> {/* Longer vertical line */}

                <div className="relative w-3/4 max-w-xl h-0.5 bg-gray-600 mb-8 sm:mb-12">
                    <div className="absolute left-1/4 -bottom-1 h-8 w-0.5 bg-gray-600 transform -translate-x-1/2"></div>
                    <div className="absolute right-1/4 -bottom-1 h-8 w-0.5 bg-gray-600 transform translate-x-1/2"></div>
                </div>


                <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-24 w-full">
                    {/* Column 1: Development Skills */}
                    <div className="flex flex-col items-center relative">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Development Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillsData.developmentSkills.map((skill, index) => (
                                <SkillBox key={`dev-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Other Tools & Platforms */}
                    <div className="flex flex-col items-center relative mt-8 sm:mt-0">
                        <h3 className="text-xl font-semibold mb-4 text-purple-400">Other Tools & Platforms</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {skillsData.otherToolsPlatforms.map((skill, index) => (
                                <SkillBox key={`other-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills
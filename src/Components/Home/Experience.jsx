import React from 'react'

function Experience() {
    return (
        <section id="experience" className="min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-10">Experience</h2>

                <div className="rounded-xl p-8 transition-all duration-300 shadow-xl shadow-black/60">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <h3 className="text-2xl font-bold">Full Stack Web Developer Intern</h3>
                        <p className="text-md mt-1 sm:mt-0">June 2025 – August 2025</p>
                    </div>
                    <p className="text-xl font-semibold mb-4">Event Casters</p>
                    <p className="leading-relaxed mb-6">
                        Gained hands-on experience as a Full Stack Web Developer intern, contributing to the development of two key websites. Focused on building responsive, user-friendly interfaces and backend functionalities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Event Casters Website</h4>
                            <p className="mb-3">
                                Developed the official website for Event Casters, an Event Management Company. This involved:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Designing and implementing front-end components using React.js.</li>
                                <li>Styling with Tailwind CSS for a modern and responsive user interface.</li>
                                <li>Integrating with backend APIs for dynamic content management.</li>
                                <li>Ensuring cross-browser compatibility and performance optimization.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-2">House of Lagan Website</h4>
                            <p className="mb-3">
                                Contributed to the development of the House of Lagan website, a Wedding Management Company. Key responsibilities included:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Building interactive features and user flows with React.js.</li>
                                <li>Applying Tailwind CSS for consistent branding and aesthetic.</li>
                                <li>Collaborating on backend integration for service booking and portfolio display.</li>
                                <li>Debugging and troubleshooting to ensure a seamless user experience.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">React.js</span>
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Tailwind CSS</span>
                            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Node.js</span>
                            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">Express.js</span>
                            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">MongoDB</span>
                            <span className="bg-green-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Zustand</span>
                            <span className="bg-red-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">Cloudinary</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience
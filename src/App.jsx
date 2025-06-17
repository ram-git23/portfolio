import React, {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Send, User, Code, Briefcase, GraduationCap, AlignRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavBar } from "./components/NavBar.jsx";

//npm install @emailjs/browser

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [darkMode, setDarkMode] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {

            // For demonstration, we'll simulate a delay
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(''), 5000);
        }
    };

    const skills = [
        'JavaScript', 'React', 'HTML/CSS', 'Node.js', 'Python', 'Git',
        'MongoDB', 'SQL', 'Responsive Design', 'RESTful APIs'
    ];

    const projects = [
        {
            title: 'E-Commerce Website',
            description: 'A fully responsive e-commerce platform built with React and Node.js featuring user authentication, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: '#',
            live: '#'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
            github: '#',
            live: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'An interactive weather dashboard that displays current weather conditions, forecasts, and weather maps using external APIs.',
            technologies: ['JavaScript', 'APIs', 'Chart.js', 'CSS3'],
            github: '#',
            live: '#'
        }
    ];

    const htmlElement = document.documentElement; // <html> tag

    function toggleDarkMode() {
        htmlElement.classList.toggle('dark');
    }

    useEffect(() => {
        toggleDarkMode();
    },[darkMode]);



    return (
        <div className="min-h-screen bg-gradient-to-br dark:from-darkbg dark:via-gray-800 dark:to-darkbg from-green-900/80 via-gray-300 to-green-900/80 bg-gray-100">
            {/* Navigation */}
            <NavBar darkMode={darkMode} setDarkMode={() => setDarkMode(d => !d)}/>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-12 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h1 initial={{ opacity: 0, letterSpacing: '20px' }}
                        animate={{ opacity: 1, letterSpacing: '10px' }}
                        transition={{ duration: 1.5 }} className="text-5xl md:text-7xl text-stroke mb-3">
                        RAM B
                    </motion.h1>
                    <p className="text-xl md:text-2xl dark:text-gray-300 text-green-950 font-bold mb-8">
                        FULL STACK DEVELOPER | FRESHER
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={import.meta.env.VITE_RESUME_LINK}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-green-950 dark:border-gray-500 dark:text-gray-300 text-lightbg px-8 py-3 rounded-full hover:bg-green-950 hover:text-white transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>

                        <a href="#contact" className="border-2 border-green-950 dark:border-gray-500 dark:text-gray-300 text-lightbg px-8 py-3 rounded-full hover:bg-green-950 hover:text-white transition-all transform hover:scale-105 text-center">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="px-6 pt-24 pb-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold dark:text-white mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="dark:text-gray-300 text-lg leading-relaxed">
                                I'm a passionate full-stack developer with a fresh perspective and eagerness to contribute to innovative projects.
                                Recently graduated with a degree in Computer Science, I've been building my skills through personal projects and internships.
                            </p>
                            <p className="dark:text-gray-300 text-lg leading-relaxed">
                                I love creating clean, efficient code and building user-friendly applications that solve real-world problems.
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest industry trends.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 dark:text-purple-400">
                                    <GraduationCap size={20} />
                                    <span>Bachelor of Computer Applications (BCA)</span>
                                </div>
                                <div className="flex items-center gap-2 dark:text-purple-400">
                                    <MapPin size={20} />
                                    <span>Bengaluru, India</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 bg-black/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold dark:text-white mb-12 text-center">Skills & Technologies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                                <Code className="mx-auto mb-2 dark:text-purple-400" size={24} />
                                <span className="dark:text-white font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold dark:text-white mb-12 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <Briefcase className="dark:text-purple-400 mr-2" size={24} />
                                    <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                                </div>
                                <p className="dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-purple-600/30 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 dark:text-purple-400 hover:text-purple-300 transition-colors">
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 dark:text-purple-400 hover:text-purple-300 transition-colors">
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-black/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold dark:text-white mb-12 text-center">Get In Touch</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold dark:text-white mb-6">Let's Connect</h3>
                                <p className="dark:text-gray-300 text-lg mb-8">
                                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                                    Feel free to reach out!
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-600 p-3 rounded-full">
                                        <Mail size={20} className="dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="dark:text-white font-medium">Email</p>
                                        <p className="dark:text-gray-400">alex.johnson@email.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-600 p-3 rounded-full">
                                        <Phone size={20} className="dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="dark:text-white font-medium">Phone</p>
                                        <p className="dark:text-gray-400">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-600 p-3 rounded-full">
                                        <MapPin size={20} className="dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="dark:text-white font-medium">Location</p>
                                        <p className="dark:text-gray-400">Bengaluru, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                    <Github size={24} className="dark:text-white" />
                                </a>
                                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                                    <Linkedin size={24} className="dark:text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <div className="space-y-6">
                                <div>
                                    <label className="block dark:text-white font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block dark:text-white font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block dark:text-white font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div>
                                    <label className="block dark:text-white font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 dark:text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                    className="w-full bg-[#0D1821] border-white/20 dark:text-white py-3 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </button>
                                {submitStatus === 'success' && (
                                    <p className="text-green-400 text-center">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="dark:text-gray-400 text-green-950">
                        © 2025 Ram B. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
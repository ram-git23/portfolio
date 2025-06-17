import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
    Mail, Phone, MapPin, Github, Linkedin, ExternalLink, 
    Download, Send, Code, Briefcase, GraduationCap, 
    Menu, X, Sun, Moon, ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-gradient">RAM B</span>
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle */}
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                                >
                                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                                Hi, I'm <span className="text-gradient">Ram B</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Full Stack Developer passionate about creating innovative web solutions
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href={import.meta.env.VITE_RESUME_LINK}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <Download size={20} className="mr-2" />
                                    Download Resume
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm a passionate full-stack developer with a fresh perspective and eagerness to contribute to innovative projects.
                                Recently graduated with a degree in Computer Science, I've been building my skills through personal projects and internships.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                I love creating clean, efficient code and building user-friendly applications that solve real-world problems.
                                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest industry trends.
                            </p>
                            
                            <div className="grid sm:grid-cols-2 gap-4 pt-6">
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <GraduationCap className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Education</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Bachelor of Computer Applications</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">Bengaluru, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="lg:pl-8">
                            <div className="glass rounded-2xl p-8">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Experience</span>
                                        <span className="font-medium text-gray-900 dark:text-white">Fresher</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Projects Completed</span>
                                        <span className="font-medium text-gray-900 dark:text-white">10+</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-300">Technologies</span>
                                        <span className="font-medium text-gray-900 dark:text-white">15+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 group"
                            >
                                <Code className="mx-auto mb-3 text-blue-600 group-hover:text-cyan-500 transition-colors" size={24} />
                                <span className="text-sm font-medium text-gray-900 dark:text-white">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
                            >
                                <div className="flex items-center mb-4">
                                    <Briefcase className="text-blue-600 mr-3" size={24} />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                                    Feel free to reach out!
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <Mail size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-300">alex.johnson@email.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <Phone size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <MapPin size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-300">Bengaluru, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex space-x-4 pt-6">
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                        placeholder="Subject"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                                
                                {submitStatus === 'success' && (
                                    <p className="text-green-600 text-center font-medium">Message sent successfully!</p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="text-red-600 text-center font-medium">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        © 2025 Ram B. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
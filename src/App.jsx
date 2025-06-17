import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
    Mail, Phone, MapPin, Github, Linkedin, ExternalLink, 
    Download, Send, Briefcase, GraduationCap, 
    Menu, X, Sun, Moon, ArrowRight, Star, Calendar
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

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution with advanced features including real-time inventory management, secure payment processing, and intelligent product recommendations.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis'],
            github: '#',
            live: '#',
            status: 'Completed',
            year: '2024'
        },
        {
            title: 'Task Management System',
            description: 'Collaborative project management tool with real-time updates, advanced analytics, and team collaboration features for enhanced productivity.',
            technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io', 'Chart.js'],
            github: '#',
            live: '#',
            status: 'In Progress',
            year: '2024'
        },
        {
            title: 'Weather Analytics Dashboard',
            description: 'Interactive weather dashboard with predictive analytics, historical data visualization, and location-based weather insights.',
            technologies: ['JavaScript', 'D3.js', 'APIs', 'Chart.js', 'CSS3'],
            github: '#',
            live: '#',
            status: 'Completed',
            year: '2023'
        },
        {
            title: 'Social Media Analytics',
            description: 'Comprehensive social media analytics platform with sentiment analysis, engagement tracking, and automated reporting.',
            technologies: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'ML'],
            github: '#',
            live: '#',
            status: 'Completed',
            year: '2023'
        },
        {
            title: 'Real Estate Platform',
            description: 'Modern real estate platform with property listings, virtual tours, mortgage calculator, and advanced search filters.',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind'],
            github: '#',
            live: '#',
            status: 'Completed',
            year: '2024'
        },
        {
            title: 'Learning Management System',
            description: 'Educational platform with course management, progress tracking, interactive quizzes, and video streaming capabilities.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
            github: '#',
            live: '#',
            status: 'In Progress',
            year: '2024'
        }
    ];

    const experience = [
        {
            role: 'Frontend Developer Intern',
            company: 'Tech Startup',
            period: '2024',
            description: 'Developed responsive web applications and collaborated with design teams.'
        },
        {
            role: 'Freelance Developer',
            company: 'Various Clients',
            period: '2023-2024',
            description: 'Built custom websites and web applications for small businesses.'
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
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-slate-700">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">Ram B</span>
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
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

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
            <section id="home" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 hero-pattern">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                                <Star size={16} className="mr-2" />
                                Available for new opportunities
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ram B</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Full Stack Developer crafting digital experiences with modern technologies and clean code
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href={import.meta.env.VITE_RESUME_LINK}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    <Download size={20} className="mr-2" />
                                    Download Resume
                                </a>
                                <a
                                    href="#projects"
                                    className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-xl transition-all"
                                >
                                    View Projects
                                    <ArrowRight size={20} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding bg-white dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main About Content */}
                        <div className="lg:col-span-2 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I'm a passionate full-stack developer with a fresh perspective and eagerness to contribute to innovative projects.
                                    Recently graduated with a degree in Computer Science, I've been building my skills through personal projects and internships.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    I love creating clean, efficient code and building user-friendly applications that solve real-world problems.
                                    My approach combines technical expertise with creative problem-solving to deliver exceptional digital experiences.
                                </p>
                            </motion.div>

                            {/* Experience Timeline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Experience</h3>
                                <div className="space-y-6">
                                    {experience.map((exp, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-medium text-gray-900 dark:text-white">{exp.role}</h4>
                                                <p className="text-blue-600 dark:text-blue-400 text-sm">{exp.company} • {exp.period}</p>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 h-fit">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Education</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Bachelor of Computer Applications</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">Bengaluru, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Projects</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">15+ Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A showcase of my recent work, demonstrating various technologies and problem-solving approaches
                        </p>
                    </motion.div>
                    
                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg card-hover border border-gray-200 dark:border-slate-700"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <Briefcase className="text-blue-600 dark:text-blue-400" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                                            <div className="flex items-center space-x-2 mt-1">
                                                <Calendar size={14} className="text-gray-400" />
                                                <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                                                <span className={`px-2 py-1 text-xs rounded-full ${
                                                    project.status === 'Completed' 
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding bg-white dark:bg-slate-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Ready to bring your ideas to life? Let's discuss your next project
                        </p>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                                </p>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-300">ram.developer@email.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Location</p>
                                        <p className="text-gray-600 dark:text-gray-300">Bengaluru, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex space-x-4 pt-6">
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
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
                                        placeholder="Project Discussion"
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
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-600 dark:text-gray-300">
                        © 2025 Ram B. Crafted with passion and modern web technologies.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
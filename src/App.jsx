import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
    Mail, Phone, MapPin, Github, Linkedin, ExternalLink, 
    Download, Send, Briefcase, GraduationCap, 
    Menu, X, Sun, Moon, ArrowRight, Star, Calendar,
    Award, Code, Database, Cloud, Globe, Trophy
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
            title: 'National Service Scheme Portal',
            description: 'Built a comprehensive full-stack portal for student volunteer registration, attendance tracking, and event credit automation serving ~500 volunteers. Features grievance submissions and automated event-based credit calculation.',
            technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
            github: 'https://github.com/brave00700/nssproject',
            live: '#',
            status: 'Completed',
            year: '2025',
            period: 'Jan 2025 – Mar 2025'
        },
        {
            title: 'AWS Cloud Host',
            description: 'Deployed an e-commerce product display site with cloud-based architecture. Configured frontend on S3, backend on EC2, database on RDS within a VPC. Implemented secure cloud infrastructure with networking and DB connectivity.',
            technologies: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS VPC', 'Node.js', 'HTML5'],
            github: 'https://github.com/ram-git23/AWS-Cloud-Host-using-VPC-S3-EC2-and-RDS',
            live: '#',
            status: 'Completed',
            year: '2024',
            period: 'Dec 2024'
        },
        {
            title: 'Weather Report Bot',
            description: 'Created an intelligent Telegram bot to retrieve weather data based on ZIP codes. Integrated Gemini AI to recommend nearby places of interest with real-time weather fetching and intelligent suggestions.',
            technologies: ['Python', 'Telegram API', 'OpenWeatherMap API', 'Gemini AI'],
            github: 'https://github.com/ram-git23/Weather-Bot',
            // live: 'https://youtu.be/vZtm1wuA2yc?si=LE-yefseEj9AzO6e',
            status: 'Completed',
            year: '2025',
            period: 'Feb 2025'
        }
    ];

    const education = [
        {
            degree: 'Bachelor of Computer Applications',
            institution: "St. Joseph's University",
            location: 'Bengaluru, India',
            period: '2022 - 2025',
            grade: 'CGPA: 9.02',
            status: 'Completed'
        },
        {
            degree: 'II PUC (Pre-University)',
            institution: "St. Joseph's PU College",
            location: 'Bengaluru, India',
            period: '2020 - 2022',
            grade: 'Percentage: 95.33%',
            status: 'Completed'
        },
        {
            degree: 'Class X (ICSE)',
            institution: 'Patel Public School',
            location: 'Bengaluru, India',
            period: '2019 - 2020',
            grade: 'Percentage: 94.33%',
            status: 'Completed'
        }
    ];

    const certifications = [
        {
            title: 'Google Cybersecurity Professional Certificate',
            issuer: 'Coursera',
            badge: 'https://www.credly.com/badges/b6c22005-999f-407d-bd55-cdc6d3624852',
            year: '2025'
        },
        {
            title: 'Cisco Networking Academy: Networking Basics',
            issuer: 'Cisco',
            badge: 'https://www.credly.com/badges/6e480617-b5fb-4a09-bc6c-8dafdf5052a5',
            year: '2024'
        },
        {
            title: 'AWS Academy: Cloud Foundations',
            issuer: 'AWS',
            badge: 'https://www.credly.com/badges/ea8603d0-4fda-42e8-867c-8a875b0785eb',
            year: '2024'
        }
    ];

    const achievements = [
        {
            title: '1st Place – Coding & Debugging',
            event: 'Kalopsia Fest, Presidency College',
            type: 'Inter-college Competition',
            year: '2024',
            icon: Trophy
        },
        {
            title: '2nd Place – Code Relay',
            event: "St. Joseph's University",
            type: 'Intra-college Competition',
            year: '2024',
            icon: Award
        }
    ];

    const volunteerExperience = [
        {
            role: 'NSS Volunteer',
            organization: "St. Joseph's University",
            period: '2022 – 2024',
            description: 'Participated in events and workshops under the National Service Scheme program, contributing to community service initiatives.'
        },
        {
            role: 'AICUF Volunteer',
            organization: "St. Joseph's University",
            period: '2023 – 2024',
            description: 'Supported the finance team with reimbursements and documentation. Volunteered in hospitality during the Chronicles inter-college fest.'
        }
    ];

    const technicalSkills = {
        'Programming Languages': ['Java', 'C', 'Python', 'JavaScript', 'PHP'],
        'Web Technologies': ['HTML5', 'CSS3', 'React', 'Node.js'],
        'Databases': ['MySQL', 'MongoDB', 'SQL'],
        'Cloud & DevOps': ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS VPC'],
        'Developer Tools': ['Git', 'Linux', 'Windows', 'VS Code']
    };

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
        { href: '#education', label: 'Education' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Achievements' },
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
                                Aspiring Java Full-Stack Developer
                            </div>
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Ram B</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                                Java Full-Stack Developer with hands-on experience in PHP, MySQL, and AWS cloud technologies. 
                                Award-winning coder with a passion for building scalable web applications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href="#"
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
                                    I'm an aspiring Java Full-Stack Developer currently pursuing my Bachelor of Computer Applications 
                                    at St. Joseph's University with a CGPA of 9.02. I have hands-on experience building web applications 
                                    using PHP, MySQL, and modern web technologies.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Currently mastering Java and Spring Boot while developing cloud-based solutions on AWS. 
                                    I have a proven track record with award-winning projects including 1st place in inter-college 
                                    coding competitions. I love creating efficient, scalable solutions that solve real-world problems.
                                </p>
                            </motion.div>

                            {/* Technical Skills */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
                                <div className="space-y-4">
                                    {Object.entries(technicalSkills).map(([category, skills], index) => (
                                        <div key={index}>
                                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm rounded-lg font-medium"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        
                        {/* Contact Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 h-fit">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                                        <span className="text-gray-600 dark:text-gray-300">+91-9742711011</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                                        <span className="text-gray-600 dark:text-gray-300">ramb.bal2619@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                                        <span className="text-gray-600 dark:text-gray-300">Bengaluru, India</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                                    <div className="flex space-x-3">
                                        <a
                                            href="https://linkedin.com/in/ram-connect"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                        <a
                                            href="https://github.com/ram-git23"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                                        >
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="section-padding bg-gray-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </motion.div>
                    
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                            <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
                                            <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.grade}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                                        <div className={`mt-1 px-2 py-1 text-xs rounded-full ${
                                            edu.status === 'Current' 
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                        }`}>
                                            {edu.status}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700"
                                >
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">{cert.issuer} • {cert.year}</p>
                                    <a
                                        href={cert.badge}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        View Badge
                                        <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section-padding bg-white dark:bg-slate-800">
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
                                className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg card-hover border border-gray-200 dark:border-slate-700"
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
                                                <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
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
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    {project.live !== '#' && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                                        >
                                            <ExternalLink size={16} />
                                            {project.live.includes('youtube') ? 'Demo' : 'Live Demo'}
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className="section-padding bg-gray-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Experience</h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    </motion.div>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Awards & Recognition</h3>
                            <div className="space-y-6">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                                                <achievement.icon className="text-yellow-600 dark:text-yellow-400" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                                                <p className="text-blue-600 dark:text-blue-400 font-medium">{achievement.event}</p>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm">{achievement.type} • {achievement.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Volunteer Experience */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Volunteer Experience</h3>
                            <div className="space-y-6">
                                {volunteerExperience.map((exp, index) => (
                                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                                <Star className="text-green-600 dark:text-green-400" size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 dark:text-white">{exp.role}</h4>
                                                <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.organization}</p>
                                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
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
                                        <p className="text-gray-600 dark:text-gray-300">ramb.bal2619@gmail.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                        <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-300">+91-9742711011</p>
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
                                    href="https://github.com/ram-git23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/ram-connect"
                                    target="_blank"
                                    rel="noopener noreferrer"
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
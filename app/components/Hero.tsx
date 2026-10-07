'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '@/app/lib/animations'
import { socialLinks } from '@/app/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import { smoothScrollTo } from '@/app/utils/scroll'
import { FiDownload, FiMessageCircle } from 'react-icons/fi'

export default function Hero() {
    const handleScroll = (id: string) => {
        smoothScrollTo(id);
    };

    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center pt-10 md:pt-20 pb-32"
            id="home"
        >
            <div className="flex flex-col md:flex-row items-center gap-12 overflow-hidden justify-between">
                {/* Left — Text */}
                <motion.div
                    variants={slideIn('left', 'tween', 0.2, 1)}
                    className="md:w-3/5"
                >
                    <motion.p
                        variants={fadeIn('up', 'tween', 0.1, 0.8)}
                        className="text-purple-400 font-medium mb-3 tracking-widest uppercase text-sm"
                    >
                        👋 Hello, I&apos;m
                    </motion.p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Ritesh Khatkar
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold mb-6 text-gray-300">
                        AI/ML Engineer &amp; Full Stack Developer
                    </h2>
                    <p className="text-gray-400 mb-4 max-w-xl leading-relaxed">
                        B.Tech CS (AI &amp; ML) student at KIT Kolhapur, building intelligent systems and
                        scalable web applications. From computer-vision pipelines at the Airports Authority of
                        India to AI products at ORELSE &amp; Nexa Prime — I ship things that matter.
                    </p>

                    {/* Role badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {['AI/ML', 'Generative AI', 'Deep Learning', 'Data Science', 'Full Stack'].map((role) => (
                            <span
                                key={role}
                                className="px-3 py-1 text-xs rounded-full border border-purple-500/40 text-purple-300 bg-purple-500/10"
                            >
                                {role}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('projects');
                            }}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity font-medium"
                        >
                            View My Work
                        </Link>
                        <button
                            onClick={() => handleScroll('contact')}
                            className="px-6 py-3 rounded-full border border-purple-500/60 text-purple-300 hover:bg-purple-500/10 transition-colors font-medium flex items-center gap-2"
                        >
                            <FiMessageCircle className="w-4 h-4" />
                            Let&apos;s Connect
                        </button>
                        <a
                            href="/Ritesh_Khatkar_Resume.pdf"
                            download
                            className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
                        >
                            <FiDownload className="w-4 h-4" />
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Right — Photo */}
                <motion.div
                    variants={slideIn('right', 'tween', 0.2, 1)}
                    className="md:w-2/5 flex justify-center md:justify-end"
                >
                    <div className="relative">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-500/30 blur-2xl scale-110" />
                        {/* Photo circle */}
                        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/20">
                            <Image
                                src="/ritesh-khatkar.jpg"
                                alt="Ritesh Khatkar"
                                fill
                                className="object-cover object-center scale-105"
                                priority
                            />
                        </div>
                        {/* B.Tech badge top-left */}
                        <div className="absolute -top-3 -left-6 bg-gray-900/90 border border-gray-700 rounded-xl px-3 py-2 text-xs text-gray-300 shadow-lg backdrop-blur-sm">
                            🎓 B.Tech AI &amp; ML — 2026
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Social links */}
            <motion.div
                variants={fadeIn('up', 'tween', 0.5, 1)}
                className="mt-16 flex justify-center gap-6"
            >
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={link.name}
                    >
                        <link.icon className="w-6 h-6" />
                    </Link>
                ))}
            </motion.div>
        </motion.section>
    )
}
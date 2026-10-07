'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { skills } from '@/app/lib/constants'
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi'

const categories = ['AI / ML', 'Language', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps']

export default function About() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pb-20 pt-5"
            id="about"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Left — Bio + Contact */}
                <motion.div
                    variants={fadeIn('right', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <p className="text-gray-400 mb-5 leading-relaxed">
                        I&apos;m <span className="text-white font-semibold">Ritesh Khatkar</span>, a B.Tech Computer
                        Science (AI &amp; ML) student at Kolhapur Institute of Technology (2022–2026), passionate about
                        building AI-powered systems and full-stack web applications.
                    </p>
                    <p className="text-gray-400 mb-5 leading-relaxed">
                        My journey spans from training computer vision models for real-time baggage detection at the
                        Airports Authority of India, to building AI models and digital products at Nexa Prime Pvt. Ltd
                        and ORELSE. I thrive at the intersection of AI and product engineering.
                    </p>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        I have hands-on experience across the full AI/ML lifecycle — data collection, model training,
                        deployment — and the full web stack from React/Next.js frontends to FastAPI/Node.js backends,
                        containerised with Docker and deployed on AWS and Google Cloud.
                    </p>

                    {/* Education */}
                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-white">🎓 Education</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium text-gray-200">B.Tech — Computer Science &amp; Engineering (AI &amp; ML)</p>
                                <p className="text-sm text-purple-400">Kolhapur Institute of Technology</p>
                                <p className="text-sm text-gray-500">2022 – 2026</p>
                            </div>
                            <div className="border-t border-gray-800 pt-4">
                                <p className="font-medium text-gray-200">Higher Secondary (XII)</p>
                                <p className="text-sm text-purple-400">Shri Anandrao Abitkar Junior College, Gargoti</p>
                                <p className="text-sm text-gray-500">2020 – 2022</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact / Social links */}
                    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                        <h3 className="text-lg font-semibold mb-4 text-white">📬 Get In Touch</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:riteshkhatakar5@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                                    <FiMail className="w-4 h-4 text-red-400" />
                                </div>
                                <span className="text-sm">riteshkhatakar5@gmail.com</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ritesh-khatkar-a6646a41a"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <FiLinkedin className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-sm">linkedin.com/in/ritesh-khatkar</span>
                            </a>
                            <a
                                href="https://github.com/riteshkhatkar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-gray-700/50 border border-gray-600 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                                    <FiGithub className="w-4 h-4 text-gray-300" />
                                </div>
                                <span className="text-sm">github.com/riteshkhatkar</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-500">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                                    <FiMapPin className="w-4 h-4 text-purple-400" />
                                </div>
                                <span className="text-sm">Kolhapur, Maharashtra, India</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Skills */}
                <motion.div
                    variants={fadeIn('left', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                    <div className="space-y-5">
                        {categories.map((cat) => {
                            const catSkills = skills.filter((s) => s.category === cat)
                            if (catSkills.length === 0) return null
                            return (
                                <div key={cat}>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                                        <span className="h-px flex-1 bg-gray-800" />
                                        {cat}
                                        <span className="h-px flex-1 bg-gray-800" />
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {catSkills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="px-3 py-2 bg-gray-900 rounded-lg flex items-center gap-2 border border-gray-800 hover:border-purple-500/50 transition-colors text-sm"
                                            >
                                                <skill.icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                                <span className="text-gray-300">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}
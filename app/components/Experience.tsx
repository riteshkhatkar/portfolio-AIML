'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { experience, hackathons } from '@/app/lib/constants'
import { FiBriefcase, FiAward } from 'react-icons/fi'

export default function Experience() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="experience"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
                <p className="text-gray-400 max-w-3xl mb-12">
                    Internships, full-time roles, and client projects that have shaped my engineering journey.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/60 via-blue-500/40 to-transparent hidden sm:block" />

                <div className="space-y-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
                            className="flex gap-6 sm:gap-10"
                        >
                            {/* Dot */}
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                                    <FiBriefcase className="w-4 h-4 text-white" />
                                </div>
                            </div>

                            {/* Card */}
                            <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/40 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                                        <p className="text-purple-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start sm:items-end gap-1">
                                        <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                                        <span className="text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-400">{exp.type}</span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-1 text-xs bg-gray-800 rounded-full text-gray-300 border border-gray-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hackathons */}
            <motion.div
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                className="mt-16"
            >
                <div className="flex items-center gap-3 mb-8">
                    <FiAward className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold">Hackathons</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {hackathons.map((h, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/40 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-white leading-snug">{h.title}</h4>
                                <span className="text-lg ml-3 flex-shrink-0">{h.award}</span>
                            </div>
                            <p className="text-xs text-purple-400 mb-3 font-medium">{h.event}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{h.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    )
}

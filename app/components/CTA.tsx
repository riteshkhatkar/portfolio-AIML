'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/lib/animations'
import Link from 'next/link'
import { smoothScrollTo } from '@/app/utils/scroll'
import { FiMail } from 'react-icons/fi'

export default function CTA() {
    const handleScroll = (id: string) => {
        smoothScrollTo(id);
    };

    // Opens Gmail compose window directly
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=riteshkhatakar5@gmail.com&su=Hi%20Ritesh%2C%20Let%27s%20Connect!&body=Hi%20Ritesh%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.'

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="contact"
        >
            <motion.div
                variants={fadeIn('up', 'spring', 0.1, 1)}
                className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-2xl p-8 md:p-12 border border-gray-800"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together!</h2>
                    <p className="text-gray-300 mb-3 text-lg">
                        Have a project in mind or want to discuss potential opportunities?
                    </p>
                    <p className="text-gray-400 mb-8">
                        I&apos;m open to AI/ML collaborations, full-stack projects, freelance work, and full-time positions.
                        Reach me at{' '}
                        <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                            riteshkhatakar5@gmail.com
                        </a>
                        {' '}·{' '}
                        <a href="tel:+919834461015" className="text-purple-400 hover:text-purple-300 transition-colors">
                            +91 9834461015
                        </a>
                        {' '}· Kolhapur, India
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* Opens Gmail compose directly */}
                        <a
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity font-medium"
                        >
                            <FiMail className="w-5 h-5" />
                            Get In Touch
                        </a>
                        <Link
                            href="/projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleScroll('projects');
                            }}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-700 text-white hover:bg-gray-800 transition-colors font-medium"
                        >
                            View My Work
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    )
}
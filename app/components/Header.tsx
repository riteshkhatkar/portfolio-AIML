'use client'

import { motion } from 'framer-motion'
import { navLinks } from '@/app/lib/constants'
import { fadeIn } from '@/app/lib/animations'
import { useState } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { smoothScrollTo } from '@/app/utils/scroll'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = (id: string) => {
        smoothScrollTo(id);
        setIsOpen(false);
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn as any}
            className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/60"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <button
                    onClick={() => smoothScrollTo('home')}
                    className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent whitespace-nowrap"
                >
                    Ritesh Khatkar
                </button>

                {/* Desktop — horizontal nav links centered */}
                <ul className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => handleNavClick(link.href)}
                                className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-800/60 transition-all"
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Desktop — Resume download */}
                <div className="hidden md:flex items-center">
                    <a
                        href="/Ritesh_Khatkar_Resume.pdf"
                        download
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity text-sm font-medium"
                    >
                        <FiDownload className="w-4 h-4" />
                        Resume
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25 }}
                    className="md:hidden bg-gray-900 border-b border-gray-800 shadow-2xl"
                >
                    <div className="flex flex-col px-4 py-4 gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className="text-left px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all text-sm"
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pt-3 mt-2 border-t border-gray-800">
                            <a
                                href="/Ritesh_Khatkar_Resume.pdf"
                                download
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90 transition-opacity font-medium text-sm"
                            >
                                <FiDownload className="w-4 h-4" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>
    )
}
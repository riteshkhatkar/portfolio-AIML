import Link from 'next/link'
import { socialLinks } from '@/app/lib/constants'

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            Ritesh Khatkar
                        </Link>
                        <p className="text-gray-400 mt-2 text-sm">
                            AI/ML Engineer &amp; Full Stack Developer · Kolhapur, India
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            <a href="mailto:riteshkhatakar5@gmail.com" className="hover:text-gray-300 transition-colors">
                                riteshkhatakar5@gmail.com
                            </a>
                            {' '}·{' '}
                            <a href="tel:+919834461015" className="hover:text-gray-300 transition-colors">
                                +91 9834461015
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        {/* Social links */}
                        <div className="flex gap-5">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Ritesh Khatkar. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
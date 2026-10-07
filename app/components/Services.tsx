'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { services } from '@/app/lib/constants'

export default function Services() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="services"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
                <p className="text-gray-400 max-w-3xl mb-12">
                    From intelligent AI systems to scalable web platforms — here&apos;s how I can help bring your ideas to life.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500/40 transition-all hover:-translate-y-1 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}
'use client';

import { motion } from 'framer-motion';
import { timelineData, TimelineItem } from '@/data/timeline';

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
    const Icon = item.icon;
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex items-center justify-between w-full mb-8 ${isEven ? 'flex-row-reverse' : ''}`}
        >
            <div className="order-1 w-5/12"></div>

            <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-10 h-10 rounded-full justify-center text-white">
                <Icon className="text-xl" />
            </div>

            <div className={`order-1 w-5/12 px-6 py-4 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 ${isEven ? 'text-right' : 'text-left'}`}>
                <span className="mb-3 font-bold text-blue-600 text-sm block">{item.date}</span>
                <h3 className="mb-1 font-bold text-gray-800 dark:text-white text-lg">{item.title}</h3>
                <p className="text-sm leading-snug tracking-wide text-gray-600 dark:text-gray-300 text-opacity-100">
                    {item.detail}
                </p>
            </div>
        </motion.div>
    );
};

export default function Timeline() {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative wrap overflow-hidden p-4 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>

                    {timelineData.map((item, index) => (
                        <TimelineCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

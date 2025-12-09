'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import InteractiveBackground from './InteractiveBackground';

const TypingEffect = ({ text, delay = 50 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span>{displayedText}</span>;
};

export default function Header() {
    return (
        <section className="min-h-[100dvh] h-screen flex flex-col justify-center items-center bg-slate-900 text-center px-4 relative overflow-hidden">
            {/* 3D Interactive Background */}
            <InteractiveBackground />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 z-0 pointer-events-none"></div>

            <div className="z-10 max-w-4xl mx-auto w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 whitespace-normal md:whitespace-nowrap drop-shadow-lg leading-tight"
                >
                    <TypingEffect text="5년 차 프론트엔드 개발자 이제찬 입니다." delay={100} />
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-1 h-6 md:h-12 bg-blue-400 ml-1 align-middle box-shadow-glow"
                    />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed font-light px-2"
                >
                    "복잡한 문제를 구조화하고, 성능을 극대화하는 것이 제 강점입니다"
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, duration: 1 }}
                    className="text-blue-200/80 font-medium tracking-wide"
                >
                    <p>성능 최적화 | 레거시 전환 | 고난도 UI/UX 구현</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5, duration: 1 }}
                className="absolute bottom-10 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <MdKeyboardArrowDown className="text-4xl text-white/50 hover:text-white transition-colors cursor-pointer" />
                </motion.div>
            </motion.div>
        </section>
    );
}

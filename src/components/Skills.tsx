'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, engineSkillsData, domainSkillsData, SkillCategory, EngineSkillItem } from '@/data/skills';

// Tech Stack Flip Card
const FlipCard = ({ category, index, isFlipped, onClick }: { category: SkillCategory; index: number; isFlipped: boolean; onClick: () => void }) => {
    return (
        <div className="relative h-[320px] w-full perspective-1000 group cursor-pointer" onClick={onClick}>
            <motion.div
                className="relative w-full h-full transition-all duration-500 transform-style-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-500 mb-6">
                        <category.icon className="text-4xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">{category.title}</h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {category.items.map((item) => (
                            <div key={item.name} className="flex flex-col items-center gap-1">
                                <item.icon className="text-2xl text-gray-400 dark:text-gray-500" />
                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{item.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="absolute bottom-6 text-xs text-gray-400 animate-pulse">Click to flip all</p>
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-center rotate-y-180"
                >
                    <h3 className="text-lg font-bold mb-4 border-b border-blue-400 pb-2">{category.title}</h3>
                    <ul className="space-y-2 text-sm text-blue-50 text-left list-disc list-inside">
                        {category.description.map((desc, idx) => (
                            <li key={idx} className="leading-relaxed opacity-90">
                                {desc.split(':')[0]}
                                {desc.includes(':') && (
                                    <span className="block text-xs text-blue-200 pl-4 mt-0.5 font-light">
                                        {desc.split(':')[1]}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

// Engine Skill Card
const EngineCard = ({ skill, index }: { skill: EngineSkillItem; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-colors group h-full"
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="text-2xl" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {skill.tags.map(tag => (
                            <span key={tag} className="text-[10px] px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {skill.description}
            </p>
        </motion.div>
    );
};

// Domain Experience Card (New Design)
const DomainCard = ({ skill, index }: { skill: EngineSkillItem; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
        >
            <div className={`grid grid-cols-1 ${skill.imageUrl ? 'lg:grid-cols-5' : ''} gap-0 h-full`}>

                {/* Content Section */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${skill.imageUrl ? 'lg:col-span-3' : 'lg:col-span-5'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                            <skill.icon className="text-3xl text-blue-600 dark:text-blue-400 transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {skill.title}
                        </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                        {skill.description}
                    </p>

                    {skill.details && (
                        <ul className="mb-8 space-y-2">
                            {skill.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {skill.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-semibold">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                {skill.imageUrl && (
                    <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6">
                        {/* Mobile Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent z-20 lg:hidden dark:from-gray-900/50" />

                        <img
                            src={skill.imageUrl}
                            alt={skill.title}
                            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

type ViewState = 'stack-front' | 'stack-back' | 'engine' | 'domain';

export default function Skills() {
    const [viewState, setViewState] = useState<ViewState>('stack-front');
    const [locked, setLocked] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const lastScrollTime = useRef(0);

    const toggleFlip = () => {
        setViewState(prev => {
            if (prev === 'stack-front') return 'stack-back';
            if (prev === 'stack-back') return 'stack-front';
            return prev;
        });
    };

    // 1. IntersectionObserver to detect when to lock
    useEffect(() => {
        const target = sectionRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                    setLocked(true);
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (!entry.isIntersecting) {
                    setLocked(false);
                }
            },
            {
                threshold: 0.6,
            }
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    // 2. Handle wheel event when locked
    useEffect(() => {
        if (!locked) return;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            const now = Date.now();
            if (now - lastScrollTime.current < 800) return; // Increased delay for flip animation

            if (Math.abs(e.deltaY) < 20) return;

            lastScrollTime.current = now;

            if (e.deltaY > 0) {
                // Scroll Down Sequence
                if (viewState === 'stack-front') {
                    setViewState('stack-back');
                } else if (viewState === 'stack-back') {
                    setViewState('engine');
                } else if (viewState === 'engine') {
                    setViewState('domain');
                } else {
                    // Unlock and scroll down
                    setLocked(false);
                    window.scrollBy({ top: 100, behavior: 'smooth' });
                }
            } else {
                // Scroll Up Sequence
                if (viewState === 'domain') {
                    setViewState('engine');
                } else if (viewState === 'engine') {
                    setViewState('stack-back');
                } else if (viewState === 'stack-back') {
                    setViewState('stack-front');
                } else {
                    // Unlock and scroll up
                    setLocked(false);
                    window.scrollBy({ top: -100, behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        // @ts-ignore
        return () => window.removeEventListener('wheel', handleWheel);
    }, [locked, viewState]);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-gray-50 dark:bg-gray-900/50 py-20"
            id="skills"
        >
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col">
                <motion.div className="text-center mb-12 flex-shrink-0">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Skills & Expertise</h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>

                    {/* Tab Indicator */}
                    <div className="flex justify-center gap-4 mb-8 flex-wrap">
                        <button
                            onClick={() => setViewState('stack-front')}
                            className={`px-6 py-2 rounded-full font-bold text-lg border transition-all duration-300 ${viewState.includes('stack')
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                                : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            Tech Stack
                        </button>
                        <button
                            onClick={() => setViewState('engine')}
                            className={`px-6 py-2 rounded-full font-bold text-lg border transition-all duration-300 ${viewState === 'engine'
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                                : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            Core Engineering
                        </button>
                        <button
                            onClick={() => setViewState('domain')}
                            className={`px-6 py-2 rounded-full font-bold text-lg border transition-all duration-300 ${viewState === 'domain'
                                ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                                : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}
                        >
                            Domain Experience
                        </button>
                    </div>
                </motion.div>

                <div className="flex-grow relative min-h-[600px]">
                    <AnimatePresence mode="wait">
                        {viewState.includes('stack') ? (
                            <motion.div
                                key="stack"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {skillsData.map((category, index) => (
                                    <FlipCard
                                        key={category.title}
                                        category={category}
                                        index={index}
                                        isFlipped={viewState === 'stack-back'}
                                        onClick={toggleFlip}
                                    />
                                ))}
                            </motion.div>
                        ) : viewState === 'engine' ? (
                            <motion.div
                                key="engine"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {engineSkillsData.map((skill, index) => (
                                    <EngineCard key={skill.title} skill={skill} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="domain"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
                            >
                                {domainSkillsData.map((skill, index) => (
                                    <DomainCard key={skill.title} skill={skill} index={index} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {locked && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm z-50 cursor-pointer"
                        onClick={toggleFlip}
                    >
                        Scroll or Click to flip
                    </motion.div>
                )}
            </div>
        </section>
    );
}

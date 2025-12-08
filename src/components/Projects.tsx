'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projectsData, ProjectItem } from '@/data/projects';
import { FaGithub } from 'react-icons/fa';

// Major Project Card (Large, Featured)
const MajorProjectCard = ({ project, index }: { project: ProjectItem; index: number }) => {
    const isEven = index % 2 === 0;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!project.images || project.images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % (project.images?.length || 1));
        }, 3000);

        return () => clearInterval(timer);
    }, [project.images]);

    const currentImage = project.images ? project.images[currentImageIndex] : project.img;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center mb-32 ${isEven ? '' : 'lg:flex-row-reverse'}`}
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl group bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <AnimatePresence mode="wait">
                        {currentImage ? (
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={currentImage}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        ) : (
                            <span className="text-lg font-medium">Project Image Placeholder</span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Image Indicators (Dots) */}
                {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {project.images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                    ? 'bg-white w-6'
                                    : 'bg-white/50 hover:bg-white/80'
                                    }`}
                            />
                        ))}
                    </div>
                )}

                {/* Overlay with Github Link if available */}
                {project.github && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <a
                            href={`https://github.com/${project.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                        >
                            <FaGithub className="text-xl" /> View Code
                        </a>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">
                            Featured
                        </span>
                        {project.github && (
                            <a href={`https://github.com/${project.github}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
                                <FaGithub className="text-xl" />
                            </a>
                        )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3 leading-tight">{project.name}</h3>
                    <p className="text-xl text-blue-600 font-medium">{project.subtitle}</p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                </p>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Key Contributions</h4>
                    <ul className="space-y-3">
                        {project.mypart.map((part, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                <span className="leading-relaxed">{part}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                    {project.stacks.map((stack) => (
                        <span key={stack} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-lg font-medium border border-gray-200 dark:border-gray-700">
                            {stack}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

// Sub Project Card (Compact)
const SubProjectCard = ({ project }: { project: ProjectItem }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full hover:shadow-xl transition-all hover:-translate-y-1"
        >
            <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    {project.img ? (
                        <Image
                            src={project.img}
                            alt={project.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    ) : (
                        <span className="text-xs">No Image</span>
                    )}
                </div>
                {project.github && (
                    <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 bg-white/90 p-2 rounded-full text-gray-900 hover:text-blue-600 transition-colors shadow-sm z-10 opacity-0 group-hover:opacity-100"
                        title="View Code"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.name}</h3>
                <p className="text-sm text-blue-600 mb-4 font-medium line-clamp-1">{project.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.stacks.slice(0, 4).map((stack) => (
                            <span key={stack} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-[10px] rounded border border-gray-100 dark:border-gray-700">
                                {stack}
                            </span>
                        ))}
                        {project.stacks.length > 4 && (
                            <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-[10px] rounded border border-gray-100 dark:border-gray-700">+{project.stacks.length - 4}</span>
                        )}
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-500 dark:text-gray-400 space-y-1">
                        {project.mypart.slice(0, 2).map((part, idx) => (
                            <li key={idx} className="truncate">{part}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const majorProjects = projectsData.slice(0, 4);
    const subProjects = projectsData.slice(4);

    return (
        <section className="py-24 px-4 bg-white dark:bg-gray-900" id="projects">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        실제 서비스 환경에서의 성능 최적화와 복잡한 기능 구현에 집중한 주요 프로젝트들입니다.
                    </p>
                </motion.div>

                {/* Major Projects List */}
                <div className="mb-32">
                    {majorProjects.map((project, index) => (
                        <MajorProjectCard key={project.name} project={project} index={index} />
                    ))}
                </div>

                {/* Sub Projects Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Other Projects</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">개인 학습 및 토이 프로젝트 목록입니다.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10">
                        {subProjects.map((project) => (
                            <SubProjectCard key={project.name} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

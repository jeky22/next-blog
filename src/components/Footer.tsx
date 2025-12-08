'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                        <a href="mailto:qhzh33@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <FaEnvelope className="text-xl" />
                            <span>e-mail</span>
                        </a>
                        {/* <a href="tel:010-3029-1934" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <FaPhone className="text-xl" />
                            <span>010-3029-1934</span>
                        </a> */}
                        <a href="https://github.com/jeky22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <FaGithub className="text-xl" />
                            <span>Github</span>
                        </a>
                        <a href="https://basalt-diagnostic-0dc.notion.site/2bb0cdbf996d805d9e4efea4b0dd8ac4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                            <SiNotion className="text-xl" />
                            <span>Resume (Notion)</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 pt-8 text-gray-400 text-sm"
                >
                    <p className="mb-4 max-w-2xl mx-auto leading-relaxed">
                        "복잡한 문제를 구조화하고, 성능을 극대화하는 것이 제 강점입니다"<br />
                        안녕하세요! 5년 차 프론트엔드 개발자 이제찬입니다.<br />
                        React와 TypeScript를 중심으로 문서 편집기, 노코드 플랫폼, AI 기반 이미지 편집 툴 등 고난도 UI/UX가 요구되는 제품을 다수 개발해왔습니다.
                    </p>
                    <p>© {new Date().getFullYear()} Lee Je Chan. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}

'use client';

import { motion } from 'framer-motion';

export default function Goals() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                            Developer Goals
                        </h2>
                        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3 mb-6">
                            <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                            개발자로서의 목표
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                    복잡하게 얽힌 코드를 구조화하고 중복을 제거해, 흐름이 명확한 코드베이스를 만드는 것을 지향합니다.
                                </span>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                    기능 구현뿐 아니라 코드 품질, 가독성, 유지보수성을 장기적으로 높이는 데 집중합니다.
                                </span>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                    고난도 편집기·미디어 처리 도메인 경험을 바탕으로, 구조 개선과 성능 최적화에 적극적으로 참여하고자 합니다.
                                </span>
                            </li>
                            <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                <span className="mt-2 w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                                    자동화와 AI 기반 개발 도구를 활용해 반복 작업을 줄이고, 개발 속도와 안정성을 향상시키는 환경을 만들고자 합니다.
                                </span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

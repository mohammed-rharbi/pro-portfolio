"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../../services/FAQData";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20 overflow-hidden">

             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">

                 <div className="lg:col-span-5 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 inline-flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-orange-500"></span>
                            Common Questions
                        </h2>
                        <h3 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                            F.A.Q.
                        </h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Here are some of the most common questions I get asked. If you have any other questions, feel free to reach out!
                        </p>

                        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 hidden sm:flex items-center justify-center">
                            <div className="relative w-64 h-64 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-3 flex items-center justify-center shadow-2xl shadow-blue-500/20">
                                <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm rounded-2xl"></div>
                                <span className="text-9xl font-bold text-white/20 select-none">?</span>

                                <motion.div
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 w-20 h-20 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <FiPlus className="text-4xl text-white" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-5 -left-5 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <div className="w-8 h-1 bg-white rounded-full"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

function FAQItem({ faq, isOpen, onClick, index }: { faq: { question: string, answer: string }, isOpen: boolean, onClick: () => void, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group border ${isOpen ? 'border-blue-500/50 bg-slate-800/50' : 'border-white/5 bg-slate-800/20'} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/30`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-blue-400' : 'text-slate-200 group-hover:text-white'}`}>
                    {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-700 group-hover:text-white'}`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

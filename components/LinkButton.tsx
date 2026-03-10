"use client";

import { handleLinkClick } from '@/lib/tracking';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface LinkButtonProps {
    title: string;
    url: string;
    event: string;
}

export default function LinkButton({ title, url, event }: LinkButtonProps) {
    return (
        <motion.button
            onClick={() => handleLinkClick(url, event)}
            className="w-full flex items-center justify-between p-5 mb-4 premium-button rounded-3xl text-left focus:outline-none focus:ring-2 focus:ring-white/20 group"
        >
            <span className="text-[17px] font-medium text-[#f5f5f7] tracking-wide">{title}</span>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#a1a1a6] group-hover:text-white group-hover:bg-white/10 transition-colors">
                <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
        </motion.button>
    );
}

"use client";

import { config } from '@/config';
import { handleLinkClick } from '@/lib/tracking';
import { motion } from 'framer-motion';

export default function SocialIcons() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center space-x-5 mb-16"
        >
            {config.socials.map((social) => {
                const Icon = social.icon;
                return (
                    <motion.button
                        key={social.name}
                        onClick={() => handleLinkClick(social.url, social.event)}
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-14 h-14 flex items-center justify-center rounded-3xl premium-button text-[#a1a1a6] hover:text-white"
                        aria-label={social.name}
                    >
                        <Icon size={22} strokeWidth={1.5} />
                    </motion.button>
                );
            })}
        </motion.div>
    );
}

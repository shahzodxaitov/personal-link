"use client";

import Image from 'next/image';
import { config } from '@/config';
import { motion } from 'framer-motion';

export default function ProfileHeader() {
    const { name, occupation, bio, avatarUrl } = config.profile;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center space-y-8 mb-16 pt-10"
        >
            <div className="relative group">
                {/* Soft ambient light around the avatar */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-32 h-32 rounded-full overflow-hidden border border-white/10 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] relative z-10 bg-[#1c1c1e]"
                >
                    <Image
                        src={avatarUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-2">{name}</h1>
                <p className="text-lg sm:text-xl font-medium text-gradient tracking-wide">{occupation}</p>
                <p className="text-[#a1a1a6] mt-6 leading-relaxed text-base sm:text-lg font-light max-w-lg mx-auto">
                    {bio}
                </p>
            </div>
        </motion.div>
    );
}

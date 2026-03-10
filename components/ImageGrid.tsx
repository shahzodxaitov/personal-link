"use client";

import Image from 'next/image';
import { handleLinkClick } from '@/lib/tracking';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    imageUrl: string;
    url: string;
    event: string;
}

interface ImageGridProps {
    projects: Project[];
}

export default function ImageGrid({ projects }: ImageGridProps) {
    if (!projects || projects.length === 0) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    onClick={() => handleLinkClick(project.url, project.event)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer premium-button transition-all group"
                >
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/20 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-[#f5f5f7] font-semibold text-lg leading-tight group-hover:text-white transition-colors">{project.title}</h3>
                        <p className="text-[#a1a1a6] text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                            View Project &rarr;
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

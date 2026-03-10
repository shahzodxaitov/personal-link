interface VideoEmbedProps {
    url: string;
}

export default function VideoEmbed({ url }: VideoEmbedProps) {
    if (!url) return null;

    return (
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 mb-16 relative group bg-[#1c1c1e]">
            {/* Cinematic background light */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-white/5 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

            <iframe
                src={url}
                title="Video Embed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>
        </div>
    );
}

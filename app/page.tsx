import ProfileHeader from '@/components/ProfileHeader';
import SocialIcons from '@/components/SocialIcons';
import LinkButton from '@/components/LinkButton';
import ImageGrid from '@/components/ImageGrid';
import VideoEmbed from '@/components/VideoEmbed';
import { config } from '@/config';

export default function Home() {
    return (
        <main className="min-h-screen relative overflow-hidden font-sans">
            {/* Soft Ambient Cinematic Orbs */}
            <div className="bg-glow-spot-1 absolute top-[0%] left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] -z-10 opacity-50"></div>
            <div className="bg-glow-spot-2 absolute bottom-[10%] right-[0%] w-[50vw] h-[50vw] rounded-full blur-[120px] -z-10 opacity-40"></div>

            <div className="max-w-[680px] mx-auto relative z-10 px-5 sm:px-8 py-20">
                <ProfileHeader />
                <SocialIcons />

                <div className="space-y-4 mb-20">
                    {config.links.map((link, i) => (
                        <LinkButton
                            key={i}
                            title={link.title}
                            url={link.url}
                            event={link.event}
                        />
                    ))}
                </div>

                <div className="mb-20">
                    <h2 className="text-sm font-medium text-[#a1a1a6] tracking-widest pl-2 mb-6">Tanlangan loyihalar</h2>
                    <ImageGrid projects={config.projects} />
                </div>

                <div className="mb-24">
                    <h2 className="text-sm font-medium text-[#a1a1a6] tracking-widest pl-2 mb-6">So‘nggi video</h2>
                    <VideoEmbed url={config.videoEmbed} />
                </div>

                <footer className="pt-8 border-t border-white/[0.05] text-center text-[#86868b] hover:text-[#a1a1a6] transition-colors text-xs tracking-wide">
                    <p>© 2026 {config.profile.name}. Barcha huquqlar himoyalangan.</p>
                </footer>
            </div>
        </main>
    );
}

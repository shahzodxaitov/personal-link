import { Instagram, Linkedin, Send, Youtube, Twitter } from 'lucide-react';

export const config = {
  profile: {
    name: "Shahzod Xayitov",
    occupation: "Performance Marketolog",
    bio: "Ma'lumotlarga asoslangan marketing orqali biznes o‘sishini tezlashtiraman va reklama samaradorligini maksimal darajaga olib chiqaman.",
    avatarUrl: "/avatar-new.jpg",
  },
  socials: [
    {
      name: "Telegram",
      url: "https://t.me/placeholder1",
      icon: Send,
      event: "click_tg_channel",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/placeholder2",
      icon: Instagram,
      event: "click_ig_profile",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/placeholder3",
      icon: Linkedin,
      event: "click_linkedin_profile",
    },
  ],
  links: [
    {
      title: "Kursni sotib olish",
      url: "https://example.com/course",
      event: "click_buy_course",
    },
    {
      title: "Konsultatsiyaga yozilish",
      url: "https://example.com/consulting",
      event: "click_book_consultation",
    },
    {
      title: "Portfolio ko‘rish",
      url: "https://example.com/portfolio",
      event: "click_portfolio",
    },
  ],
  projects: [
    {
      title: "Reklama kampaniyasi natijalari",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      url: "https://example.com/alpha",
      event: "click_project_alpha",
    },
    {
      title: "Marketing strategiya loyihasi",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      url: "https://example.com/beta",
      event: "click_project_beta",
    },
  ],
  videoEmbed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
};

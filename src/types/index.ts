export interface HeroSectionProps {
  title: string;
  subtitle: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  ctaLabel: string;
  ctaLink: string;
}

export interface Problem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemSectionProps {
  title: string;
  subtitle?: string;
  problems: Problem[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SolutionSectionProps {
  title: string;
  description: string;
  features: Feature[];
  image: string;
}

export interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  bgColor?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating?: number;
}

export interface SocialProofSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqItems: FAQItem[];
}

export interface CalendlySectionProps {
  title: string;
  subtitle?: string;
  embedUrl: string;
}
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CTAMidSection from '../components/CTAMidSection';
import SocialProofSection from '../components/SocialProofSection';
import FAQSection from '../components/FAQSection';
import CalendlySection from '../components/CalendlySection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

// Mock data
const headerData = {
  logoText: 'SalesFunnel',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Book a Demo',
  ctaLink: '#calendly',
};

const heroData = {
  title: 'Streamline Your Workflow with AI Automation',
  subtitle: 'Revolutionize your operations and save time with our powerful tools. Don\'t miss out on the future of efficiency—join our satisfied clients today!',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Unlocking Growth: Overcome Operational Hurdles with AI Automation',
  subtitle: 'Transform the way your business operates by automating repetitive tasks and enhancing efficiency.',
  problems: [
    {
      id: 1,
      title: 'Struggling with Repetitive Tasks?',
      description: 'Manual processes can waste valuable time and resources, holding back your team from focusing on strategic growth initiatives.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inefficient Data Management',
      description: 'Disparate systems lead to siloed information and inconsistent data, making it challenging to make informed decisions and serve your customers effectively.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Inability to Scale Operations',
      description: 'As your business grows, the complexity of managing workflows increases; without automation, you're at risk of overloading your team and sacrificing quality.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Revolutionize Your Business Workflow with AI-Powered Automation',
  description: 'AutoPilot Systems Inc offers intelligent workflow automation tools that eliminate repetitive tasks, enhancing operational efficiency for small and mid-sized businesses.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Seamless Integration',
      description: 'Easily connect your existing CRMs, email systems, and lead-gen platforms to create a unified workflow.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Smart Logic and Branching',
      description: 'Utilize deeper logic and smart branching features to customize automation processes that suit your unique business needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Voice Assistant Triggers (Beta)',
      description: 'Empower your team with hands-free operation by automating tasks using voice commands currently in beta.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Native Notion/Slack Integration',
      description: 'Leverage real-time communication and collaborative tools with native integrations to streamline feedback and support.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Elevate Your Workflow?',
  subtitle: 'Join leading B2B SaaS companies and other innovative businesses automating their tasks with us.',
  ctaText: 'Schedule Your Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'See How Our Clients Are Thriving with AutoPilot Systems',
  subtitle: 'Discover the success stories of businesses just like yours',
  testimonials: [
    {
      id: 1,
      name: 'Jessica Rowan',
      role: 'Marketing Manager',
      company: 'Innovatech Solutions',
      quote: 'Since integrating AutoPilot, our lead conversion rate has jumped by 30% in just three months! It\'s like having an extra team member that never sleeps.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Samuel Lee',
      role: 'Owner',
      company: 'Baker\'s Delight',
      quote: 'We reduced our order processing time by 50% after using AutoPilot. I can finally focus on baking instead of paperwork!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya Kumar',
      role: 'Chief Operations Officer',
      company: 'TechStream',
      quote: 'The smart branching feature has transformed our workflows. We\'ve saved over 20 hours a week that we can now spend on strategic initiatives.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Thomas Evers',
      role: 'Sales Director',
      company: 'SaaS Dynamics',
      quote: 'AutoPilot\'s integration with our CRM has streamlined our sales process. We\'ve closed 15% more deals this quarter compared to last!',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our services',
  faqItems: [
    {
      id: 1,
      question: 'How long does it typically take to see results?',
      answer: 'Most clients begin seeing measurable improvements within the first 30 days. However, significant results are typically observed after 60\-90 days as we optimize based on real user data and behavior patterns. We provide detailed monthly reports so you can track progress throughout the process.'
    },
    {
      id: 2,
      question: 'Do you work with small businesses or just enterprise clients?',
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to meet the needs and budget of your specific business. We even have special packages designed for SMBs.'
    },
    {
      id: 3,
      question: 'What makes your approach different from other agencies?',
      answer: 'Unlike many agencies that apply a one\-size\-fits\-all template, we take a data\-driven approach customized to your industry, target audience, and goals. We blend psychology with iterative testing to craft funnels that actually convert.'
    },
    {
      id: 4,
      question: 'Do I need to have an existing website or marketing strategy?',
      answer: 'Not at all. We can build your funnel from scratch using best practices and our proven frameworks. If you already have assets, we\'ll audit and optimize them as part of our onboarding.'
    },
    {
      id: 5,
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing based on project scope. Packages start at $2,500 for small businesses, with enterprise\-scale options available. After a short discovery call, we\'ll provide a detailed quote.'
    },
    {
      id: 6,
      question: 'Do you offer ongoing support after the funnel is built?',
      answer: 'Yes! We offer maintenance and optimization plans to keep your funnel performing. Most clients choose our quarterly optimization package for long\-term gains.'
    },
  ],
};

const calendlyData = {
  title: 'Book Your Free Demo Today',
  subtitle: 'Join us for a quick chat about how our AI-powered workflow automation tools can streamline your business operations. No pressure, just real advice tailored to your needs.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: 'Boost Your Efficiency Today',
  subtitle: 'Don\'t miss out on streamlined operations and increased productivity!',
  ctaText: 'Book Your Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'At AutoPilot Systems Inc, we provide AI-powered workflow automation tools that empower small and mid-sized businesses to streamline operations. Our solutions integrate CRMs, email systems, and lead-gen platforms to eliminate repetitive tasks and enhance efficiency.',
  navItems: [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'E-books', href: '/resources' },
        { label: 'Webinars', href: '/webinars' },
      ],
    },
  ],
  contactInfo: {
    email: 'info@autopilotsystems.ai',
    phone: '(123) 456-7890',
    address: '123 Automation Lane, Tech City, TC 12345',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  copyrightText: '© 2023 AutoPilot Systems Inc. All rights reserved.',
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        <ProblemSection {...problemData} />
        <SolutionSection {...solutionData} />
        <CTAMidSection {...ctaMidData} />
        <SocialProofSection {...socialProofData} />
        <FAQSection {...faqData} />
        <div id="calendly">
          <CalendlySection {...calendlyData} />
        </div>
        <FinalCTASection {...finalCTAData} />
      </main>
      <Footer {...footerData} />
    </div>
  );
};

export default HomePage;
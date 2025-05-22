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
  title: 'Automate Tasks & Boost Efficiency Instantly',
  subtitle: 'Experience seamless workflow with AI-powered automation designed for small to mid-sized businesses. Upgrade from Zapier with deeper logic and smart branching.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Streamline Your Operations with Intelligent Automation',
  subtitle: 'Eliminate bottlenecks and enhance efficiency by automating repetitive tasks with AI-powered tools.',
  problems: [
    {
      id: 1,
      title: 'Manual Processes are Holding You Back',
      description: 'Relying on manual workflows in your CRM and email systems wastes valuable time and reduces productivity. Automating these tasks can free up resources and enable your team to focus on growth-driving activities.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Complex Logic Beyond Zapier\'s Reach',
      description: 'Zapier is great for simple automations, but when your business demands complex logic and smart branching, it falls short. We provide advanced solutions that can handle these complexities, ensuring seamless integrations and smarter operations.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Missed Opportunities with Unified Platforms',
      description: 'Integrating your communication platforms like Notion and Slack can drastically improve collaboration and operational oversight. Missing out on these integrations can mean missed opportunities and slower decision-making.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Revolutionize Your Business Processes with AI-Powered Automation',
  description: 'AutoPilot Systems Inc offers advanced workflow automation tools designed to elevate your business efficiency. Our AI-powered solutions seamlessly integrate CRMs, email systems, and lead-gen platforms to automate repetitive tasks, allowing your team to focus on strategic initiatives.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Advanced AI Workflow Automation',
      description: 'Automate complex workflows with our smart logic and branching capabilities, enhancing productivity and reducing errors.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'CRM and Email System Integration',
      description: 'Seamlessly connect your CRM and email platforms to streamline operations and maintain consistent customer engagements.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'AI-Driven Smart Branching',
      description: 'Utilize deep logic automation to create adaptive workflows that respond intelligently to different triggers, maximizing efficiency.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Voice Assistant Triggers and Native Integration',
      description: 'Experience hands-free operations with our beta voice assistant triggers and integrate seamlessly with tools like Notion and Slack.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Supercharge Your Business?',
  subtitle: 'Join over 200 businesses already maximizing efficiency with AutoPilot Systems.',
  ctaText: 'Get Your Free Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'Trusted by Innovators, Loved by Achievers',
  subtitle: 'See how businesses are transforming with AutoPilot Systems Inc.',
  testimonials: [
    {
      id: 1,
      name: 'Sophia Tran',
      role: 'Operations Manager',
      company: 'TechWave Solutions',
      quote: 'With AutoPilot, we\'ve slashed our task completion times by 40%. It\'s like adding an extra team member without the overhead.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Liam Patel',
      role: 'CEO',
      company: 'Digital Hive',
      quote: 'In just one month, we boosted our lead conversion rate by 30% thanks to smarter automation flows.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Lee',
      role: 'Founder',
      company: 'Crafters Bakery',
      quote: 'Our small team has managed to handle the holiday rush effortlessly, and customers loved the personal touch we maintained!',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 4,
      name: 'Ian Clarkson',
      role: 'CTO',
      company: 'SkyNet Innovations',
      quote: 'The integration with Slack has revolutionized our workflow communication, making complex tasks surprisingly simple.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
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
      answer: 'Most clients start noticing improvements within a few weeks, but tangible results generally appear after 60–90 days. Our tools learn and adapt to your business processes, ensuring sustainable enhancements. We also provide you with monthly updates to track progress.'
    },
    {
      id: 2,
      question: 'Are AutoPilot Systems tools suitable for small businesses?',
      answer: 'Absolutely! Our solutions are designed to scale with your business, whether you\'re a small local bakery or a growing B2B Saas company. We offer tailored packages to fit different budgets and needs, making automation accessible to everyone.'
    },
    {
      id: 3,
      question: 'What makes AutoPilot Systems unique compared to other automation tools?',
      answer: 'Our tools offer more than just basic automation by providing deeper logic, smart branching, and the latest in voice assistant triggers. We specialize in creating a seamless connection between disparate systems, like a more sophisticated Zapier alternative.'
    },
    {
      id: 4,
      question: 'Do I need technical expertise to use your tools?',
      answer: 'Not at all! Our user-friendly interface means anyone can set up and manage workflows. Plus, our support team is always ready to help you get the most out of our tools every step of the way.'
    },
    {
      id: 5,
      question: 'What are your pricing options?',
      answer: 'We offer competitive pricing plans to cater to various business sizes and needs. Pricing is flexible, starting at affordable entry points for smaller businesses. We recommend scheduling a demo through our Calendly link to discuss your specific requirements and obtain a detailed quote.'
    },
    {
      id: 6,
      question: 'What support do you offer after implementation?',
      answer: 'We believe in long-term partnerships, offering ongoing support and optimization. Our team can assist with continual improvements to ensure your automation remains efficient and effective.'
    },
  ],
};

const calendlyData = {
  title: 'Transform Your Business with AI-Powered Automation',
  subtitle: 'No strings attached. Discover how our tools can streamline your workflow and boost efficiency. Perfect for businesses looking for smarter solutions.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: '**Automate to Elevate Now**',
  subtitle: 'Maximize efficiency and watch your business thrive instantly.',
  ctaText: 'Book Your Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'Empower your business with AI-driven automation tools designed to simplify complex workflows and enhance operational efficiency. Discover smarter alternatives to traditional automation that are tailored for businesses of all sizes.',
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
    email: 'support@autopilotsystems.ai',
    phone: '123-456-7890',
    address: '123 Automation Lane, Tech City, TX 12345',
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
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
  title: 'Automate Your Business Workflows Effortlessly',
  subtitle: 'Unlock operational efficiency with our AI-driven tools that integrate seamlessly with your existing systems. Join industry leaders in transforming productivity and gain a competitive edge today.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Unlock Your Business Potential by Overcoming Workflow Inefficiencies',
  subtitle: 'Revolutionize your operations with AI-driven automation that alleviates tedious tasks and accelerates growth.',
  problems: [
    {
      id: 1,
      title: 'Manual Tasks Wasting Valuable Resources',
      description: 'Repetitive manual processes drain your team's time, leading to reduced productivity and missed growth opportunities.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Ineffective Tool Integration',
      description: 'Disjointed systems create data silos, making it challenging to derive insights and diminishing overall operational efficiency.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Limited Scalability with Current Solutions',
      description: 'As your business grows, traditional methods become a bottleneck, hindering your ability to scale and adapt in a fast-paced market.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Transform Your Business Operations with AI-Powered Workflow Automation',
  description: 'AutoPilot Systems Inc empowers small and mid-sized businesses to enhance operational efficiency by automating repetitive tasks with our AI-driven integration of CRMs, email systems, and lead-gen platforms.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Seamless Integration',
      description: 'Effortlessly connect your existing CRMs and communication tools to streamline workflows and reduce manual input.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Advanced Automation Logic',
      description: 'Our platform offers smart branching and deeper logic, enabling more complex automation scenarios that adapt to your business needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Voice Assistant Compatibility',
      description: 'Unlock the future of workflow automation with our upcoming voice assistant triggers that make task execution even more intuitive.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Robust Analytics and Feedback',
      description: 'Gain insights into your workflow's performance with built-in analytics, allowing for continuous improvement and optimization.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Boost Your Efficiency?',
  subtitle: 'Join the growing number of businesses automating their workflows with AutoPilot Systems' AI tools.',
  ctaText: 'Book Your Demo Now',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'Trusted by Businesses to Automate Success',
  subtitle: 'See how AutoPilot Systems is transforming workflows for our clients.',
  testimonials: [
    {
      id: 1,
      name: 'Rachel Green',
      role: 'Operations Manager',
      company: 'NextGen SaaS',
      quote: 'Since we integrated AutoPilot, our lead response time has dropped by 50%, and our team's productivity has skyrocketed!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'James Smith',
      role: 'Marketing Director',
      company: 'Ambitious Bakery',
      quote: 'Thanks to the smart branching features, we increased sales by 30% in just three months. This tool is a game changer for us!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'CEO',
      company: 'Tech Innovations',
      quote: 'AutoPilot saved us around 10 hours a week on manual tasks, allowing my team to focus on what really matters — growth!',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Michael Johnson',
      role: 'Product Lead',
      company: 'Cloud Solutions Ltd.',
      quote: 'With the voice assistant triggers, we’ve streamlined our operations even further. It's incredibly efficient!',
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
      answer: 'Most clients begin seeing measurable improvements within the first 30 days. However, significant results are typically observed after 60–90 days as we optimize based on real user data and behavior patterns. We provide detailed monthly reports so you can track progress throughout the process.'
    },
    {
      id: 2,
      question: 'Do you work with small businesses or just enterprise clients?',
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to meet the needs and budget of your specific business. We even have special packages designed for SMBs.'
    },
    {
      id: 3,
      question: 'What makes your approach different from other agencies?',
      answer: 'Unlike many agencies that apply a one-size-fits-all template, we take a data-driven approach customized to your industry, target audience, and goals. We blend psychology with iterative testing to craft funnels that actually convert.'
    },
    {
      id: 4,
      question: 'Do I need to have an existing website or marketing strategy?',
      answer: 'Not at all. We can build your funnel from scratch using best practices and our proven frameworks. If you already have assets, we'll audit and optimize them as part of our onboarding.'
    },
    {
      id: 5,
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing based on project scope. Packages start at $2,500 for small businesses, with enterprise-scale options available. After a short discovery call, we’ll provide a detailed quote.'
    },
    {
      id: 6,
      question: 'Do you offer ongoing support after the funnel is built?',
      answer: 'Yes! We offer maintenance and optimization plans to keep your funnel performing. Most clients choose our quarterly optimization package for long-term gains.'
    },
  ],
};

const calendlyData = {
  title: 'Book Your Free Demo',
  subtitle: 'Experience how our AI-powered workflow automation tools can transform your business. No pressure, just real advice to streamline your operations.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: 'Elevate Your Business Efficiency',
  subtitle: 'Transform the way you work with our AI-powered tools designed for your success.',
  ctaText: 'Book Your Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'At AutoPilot Systems Inc, we empower small and mid-sized businesses with AI-powered workflow automation tools, enabling them to streamline their operations and boost efficiency. Our innovative solutions integrate CRMs, email systems, and lead-gen platforms to alleviate the burden of repetitive tasks.',
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
    phone: '+1-234-567-8901',
    address: '123 Innovation Drive, Suite 456, Tech City, TC 78910',
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
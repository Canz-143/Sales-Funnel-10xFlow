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
  title: 'Automate Your Workflow with Powerful AI Tools',
  subtitle: 'AutoPilot Systems Inc offers cutting-edge AI solutions that integrate seamlessly with your existing CRMs and email systems to automate tasks and enhance efficiency. Don\'t miss out on staying ahead in today\'s fast-paced business environment, where every second counts.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Automate Workflows and Eliminate Bottlenecks with AI',
  subtitle: 'Discover how AI-powered automation can transform your business operations by seamlessly integrating essential tools.',
  problems: [
    {
      id: 1,
      title: 'Wasting Time on Repetitive Tasks',
      description: 'Many businesses find their teams bogged down by repetitive tasks that siphon away valuable time and resources. This inefficiency not only impacts productivity but also stifles creativity and growth.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inadequate Integration Between Systems',
      description: 'Disconnected systems lead to operational silos, preventing seamless data flow and comprehensive insights. This issue can hinder decision-making and delay response times, affecting overall business performance.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Missed Opportunities Due to Slow Processes',
      description: 'In today\'s fast-paced markets, slow manual processes can mean missed business opportunities. It\'s vital to have systems that swiftly respond to changes and capitalize on real-time data.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Streamline Workflows with AutoPilot\'s Advanced AI Automation',
  description: 'AutoPilot Systems Inc provides cutting-edge AI-powered workflow automation tools designed to integrate CRMs, email systems, and lead-gen platforms, effectively automating repetitive tasks to enhance operational efficiency for small and mid-sized businesses.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Intelligent CRM Integration',
      description: 'Seamlessly connect your CRMs to automate data entry and updates, freeing your team\'s time for critical tasks.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Advanced Email Automation',
      description: 'Leverage smart branching to create personalized email workflows that enhance customer engagement.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Dynamic Lead-Gen Automation',
      description: 'Maximize lead generation through efficient automation processes that streamline data collection and follow-up.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Beta Voice Assistant Triggers',
      description: 'Experience innovative automation with voice-activated workflows, plus native Notion and Slack integration in progress.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Supercharge Your Business?',
  subtitle: 'Join top B2B SaaS companies boosting efficiency with us.',
  ctaText: 'Schedule a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'Join the Automation Revolution',
  subtitle: 'See how our clients boost productivity with AI-driven solutions.',
  testimonials: [
    {
      id: 1,
      name: 'Samantha Green',
      role: 'Operations Manager',
      company: 'Tech Innovations LLC',
      quote: 'AutoPilot Systems Inc has cut our repetitive task time by 40\%, allowing us to focus on growth strategies.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Ramirez',
      role: 'Founder',
      company: 'Ramirez & Co',
      quote: 'Switching to AutoPilot's platform enhanced our customer response time by 30\% and reduced errors significantly.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Linda Foster',
      role: 'Owner',
      company: 'Baker\'s Delight',
      quote: 'Who knew a bakery could benefit from AI? AutoPilot helped us manage orders seamlessly during peak times!',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Marcus Lee',
      role: 'Head of Sales',
      company: 'SaaS Pioneers',
      quote: 'Thanks to AutoPilot, our lead conversion rates improved by 20\% in just three months. It\'s a game-changer!',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our AI-powered workflow automation tools',
  faqItems: [
    {
      id: 1,
      question: 'How long does it take to set up and start seeing results?',
      answer: 'Most of our clients begin experiencing enhanced efficiency within the first 2-3 weeks. As our systems learn and adapt to your workflows, more pronounced results can be observed within 1-2 months.'
    },
    {
      id: 2,
      question: 'Are your automation tools suitable for small businesses?',
      answer: 'Absolutely! Our tools are specifically designed to cater to both small and mid-sized businesses. We provide scalable solutions that fit your business\'s unique needs and budget constraints.'
    },
    {
      id: 3,
      question: 'What makes AutoPilot Systems different from other automation tools?',
      answer: 'We offer deeper logic and smart branching alternatives to popular tools like Zapier, plus we\'re working on innovative voice assistant triggers and native integrations with Notion and Slack. Our customization capabilities allow for more precise automation tailored to your business processes.'
    },
    {
      id: 4,
      question: 'How do you integrate with existing systems like CRMs and email platforms?',
      answer: 'Our team works closely with you to seamlessly integrate our tools with your existing CRMs and email systems. This involves a short onboarding process where we ensure everything is aligned and optimized for efficacy.'
    },
    {
      id: 5,
      question: 'What does your pricing structure look like?',
      answer: 'We offer flexible pricing models based on your specific needs and the complexity of the automation. Schedule a free 30-minute consultation at [our Calendly link](https://calendly.com/autopilot-demos/30min) to get a personalized quote.'
    },
    {
      id: 6,
      question: 'Do you provide ongoing support and updates?',
      answer: 'Yes, we offer continuous support and regular updates to our systems to ensure they remain effective and secure. Clients can choose our comprehensive support package for peace of mind and optimal performance.'
    },
  ],
};

const calendlyData = {
  title: 'Book Your Free Demo Today',
  subtitle: 'Discover how our AI-powered tools can transform your business operations and improve efficiency. No pressure, just real advice from our experts.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: '**Boost Your Business Effortlessly**',
  subtitle: 'Eliminate inefficiencies with AI-powered automation — no more repetitive tasks.',
  ctaText: 'Book Your Demo Now',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'At AutoPilot Systems Inc, we empower small and mid-sized businesses with intelligent workflow automation tools, enhancing efficiency by seamlessly integrating CRMs, email systems, and more. Experience a smarter approach to workflow automation with our robust Zapier alternatives, complete with advanced logic and innovative features.',
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
    phone: '1-800-AUTOPILOT',
    address: '123 Innovation Drive, Tech City, TX 75001',
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
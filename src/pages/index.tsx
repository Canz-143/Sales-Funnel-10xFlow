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
  title: 'Automate Your Sales for Maximum Growth',
  subtitle: 'Unlock the power of automation to elevate your sales process and optimize conversions. Join countless businesses transforming their results today.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Start Free Trial',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Unlock Your Business Potential by Overcoming Operational Roadblocks',
  subtitle: 'Streamline your processes and empower your team with our AI-driven automation solutions',
  problems: [
    {
      id: 1,
      title: 'Repetitive Tasks Drain Productivity',
      description: 'Manual data entry and task management consume valuable time and resources, leading to missed opportunities and employee burnout.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inefficient Workflow Management',
      description: 'Disjointed tools and processes result in poor collaboration and fragmented communication, hindering your team\'s ability to execute effectively.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Scalability Challenges Stifle Growth',
      description: 'As your business expands, the inability to automate leads to operational bottlenecks, preventing you from capitalizing on new market opportunities.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Our Comprehensive Solution',
  description: 'We\'ve built a platform that addresses these challenges with proven strategies',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Conversion-Optimized Funnels',
      description: 'Our funnels are designed based on proven psychological principles to guide visitors toward making a decision.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Clear, Compelling Messaging',
      description: 'We help craft messages that resonate with your ideal customers, clearly communicating your unique value proposition.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Streamlined Customer Journey',
      description: 'We simplify the path to purchase by removing unnecessary steps and friction points that prevent conversions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Data-Driven Optimization',
      description: 'We continuously analyze performance data to make informed improvements that increase conversion rates over time.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Transform Your Sales Process?',
  subtitle: 'Join hundreds of businesses that have increased their conversion rates by an average of 37%',
  ctaText: 'Schedule a Free Strategy Call',
  ctaLink: '#calendly',
};

const socialProofData = {
  title: 'What Our Clients Say',
  subtitle: 'Don\'t just take our word for it',
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Tech Innovators',
      quote: 'Our conversion rates increased by 43% within the first month of implementing the new sales funnel. The ROI has been incredible!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mark Williams',
      role: 'CEO',
      company: 'Growth Ventures',
      quote: 'The streamlined approach to our sales process has not only increased conversions but also significantly improved customer satisfaction scores.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jennifer Chen',
      role: 'E-commerce Manager',
      company: 'Retail Excellence',
      quote: 'The clarity in messaging helped us stand out in a crowded market. Our customers now understand exactly what makes our products unique.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Robert Miller',
      role: 'Sales Director',
      company: 'Enterprise Solutions',
      quote: 'The guidance we received in restructuring our sales funnel was invaluable. We\'ve seen a 52% increase in qualified leads.',
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
      answer: 'Most clients begin seeing measurable improvements within the first 30 days. However, significant results are typically observed after 60-90 days as we optimize based on real user data and behavior patterns. We provide detailed monthly reports so you can track progress throughout the process.'
    },
    {
      id: 2,
      question: 'Do you work with small businesses or just enterprise clients?',
      answer: 'We work with businesses of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and can be tailored to meet the needs and budget of your specific business. We have special packages designed specifically for small and medium-sized businesses.'
    },
    {
      id: 3,
      question: 'What makes your approach different from other agencies?',
      answer: 'Unlike many agencies that apply a one-size-fits-all template, we take a data-driven approach customized to your specific industry, target audience, and business goals. We combine proven psychological principles with continuous optimization to create sales funnels that convert at the highest possible rates.'
    },
    {
      id: 4,
      question: 'Do I need to have an existing website or marketing strategy?',
      answer: 'While having an existing website or strategy can provide valuable insights and data, it\'s not required. We can build your sales funnel from scratch, informed by industry best practices and our extensive experience. If you do have existing assets, we\'ll conduct a thorough analysis to identify strengths and opportunities.'
    },
    {
      id: 5,
      question: 'How much does it cost?',
      answer: 'Our pricing is tailored to your specific needs and the scope of the project. We offer flexible packages starting at $2,500 for smaller businesses, with comprehensive enterprise solutions also available. We\'re transparent about our pricing and would be happy to provide a detailed quote after learning more about your business goals.'
    },
    {
      id: 6,
      question: 'Do you offer ongoing support after the funnel is built?',
      answer: 'Absolutely! We offer various maintenance and optimization packages to ensure your funnel continues to perform at its best. Our team continually monitors performance metrics and makes data-driven improvements to increase your conversion rates over time. Many clients choose our quarterly optimization package for the best long-term results.'
    },
  ],
};

const calendlyData = {
  title: 'Schedule Your Free Strategy Call',
  subtitle: 'Book a 30-minute call with our experts to discuss your business goals',
  embedUrl: 'https://calendly.com/your-calendly-link/30min',
};

const finalCTAData = {
  title: 'Ready to Transform Your Business?',
  subtitle: 'Take the first step towards higher conversions and increased revenue',
  ctaText: 'Get Started Now',
  ctaLink: '#calendly',
};

const footerData = {
  companyName: 'SalesFunnel',
  description: 'We help businesses optimize their sales process and increase conversions through data-driven strategies and proven psychological principles.',
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
    email: 'info@salesfunnel.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, San Francisco, CA 94107',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  copyrightText: 'SalesFunnel Inc. All rights reserved.',
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

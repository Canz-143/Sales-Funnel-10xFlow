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
  title: 'Automate Your Workflow with AI-Powered Efficiency',
  subtitle: 'Join leading B2B SaaS companies revolutionizing efficiency with our powerful automation tools. Act now to unlock deeper logic and smart integrations with voice triggers.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Unlock Your Business\'s Full Potential with AI-Driven Automation',
  subtitle: 'Streamline your operations and eliminate bottlenecks with our advanced workflow automation tools.',
  problems: [
    {
      id: 1,
      title: 'Tedious Manual Processes',
      description: 'Manual data entry and task tracking waste precious time and resources, hindering your team\'s productivity and focus on core business activities.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inefficient System Integrations',
      description: 'Disparate systems without seamless integration lead to disconnected information silos, resulting in missed opportunities and operational errors.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Scalability Challenges',
      description: 'As your business grows, outdated processes can become major roadblocks, reducing your ability to scale effectively and adapt quickly to market changes.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Revolutionize Your Workflow with AI-Powered Automation',
  description: 'AutoPilot Systems Inc provides cutting-edge AI-powered tools designed to streamline your business operations by automating repetitive tasks. Our platform seamlessly integrates with CRMs, email systems, and lead-generation platforms, boosting efficiency and allowing your team to focus on what\'s truly important.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Advanced Logic Automation',
      description: 'Our tools offer deeper logic and smart branching, enabling more complex and dynamic workflow automation than traditional Zapier alternatives.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'AI-Driven Efficiency',
      description: 'Leverage artificial intelligence to automate repetitive tasks, reducing operational costs and increasing productivity.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Voice Assistant Triggers (Beta)',
      description: 'Experience innovative voice-activated workflow triggers to save time and enhance user interaction.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Seamless Software Integration',
      description: 'Enjoy native integrations with Notion and Slack, providing smooth transitions and real-time updates across platforms.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Boost Your Efficiency Today!',
  subtitle: 'Join hundreds of businesses transforming operations with 99% task automation.',
  ctaText: 'Book Your Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'Empowering Businesses with Effortless Automation',
  subtitle: 'Discover how we\'ve transformed operations for our diverse clientele.',
  testimonials: [
    {
      id: 1,
      name: 'Sarah Jennings',
      role: 'Operations Manager',
      company: 'TechFusion',
      quote: 'With AutoPilot Systems, we\'ve cut our repetitive tasks time by 60% within the first month. It\'s been a game-changer for our team\'s productivity.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mark Elwood',
      role: 'CEO',
      company: 'Innovate Bakery Co.',
      quote: 'Our humble bakery now runs smoother than ever. The automation tools are intuitive, and the integration with Slack is seamless.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Jessica Turner',
      role: 'Head of Business Development',
      company: 'CloudMetrics',
      quote: 'Adopting AutoPilot\'s workflow solutions, we\'ve increased our lead conversion rate by 30% in just a few months. Highly recommended for any B2B SaaS firm.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: '',
      role: '',
      company: '',
      quote: '',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: ,
    },
  ],
};

const faqData = {
  title: 'Frequently Asked Questions',
  subtitle: 'Everything you need to know about our services',
  faqItems: [
    {
      id: 1,
      question: 'How quickly can I expect to see results?',
      answer: 'Most of our clients notice improvements in efficiency and task automation within the first few weeks. As our system learns and adapts, you\'ll see continual optimization and enhancements. We provide regular updates and reports to show how these changes impact your operations.'
    },
    {
      id: 2,
      question: 'Is AutoPilot Systems suitable for small businesses?',
      answer: 'Absolutely! We specialize in providing solutions that are scalable and adaptable to businesses of all sizes, including small and mid-sized businesses. Our tools are designed to fit your specific needs and budget, ensuring you get the most out of our services.'
    },
    {
      id: 3,
      question: 'Why should I choose your services over Zapier?',
      answer: 'Our solutions offer deeper logic and smarter branching, which allows for more complex and tailored automations to fit unique business needs. We\'re constantly innovating, with features like voice assistant triggers and native integrations with platforms like Notion and Slack.'
    },
    {
      id: 4,
      question: 'Do I need existing systems to use your tools?',
      answer: 'No existing systems are required. Our tools are designed to integrate seamlessly with your current processes or from the ground up if starting afresh. We help you set up everything you need to get started effectively.'
    },
    {
      id: 5,
      question: 'What is the cost of your service?',
      answer: 'Our pricing is flexible, based on the scope and complexity of your automation needs. We have cost-effective solutions suitable for small businesses and can discuss pricing in more detail during a discovery call. You can book a session through our Calendly link to get started.'
    },
    {
      id: 6,
      question: 'Do you provide ongoing support and updates?',
      answer: 'Yes, we provide continuous support to ensure your automation systems are always running at peak efficiency. We also offer optimization and feature updates as part of our ongoing service commitment.'
    },
  ],
};

const calendlyData = {
  title: 'Boost Your Efficiency: Schedule a Free Demo Call',
  subtitle: 'Discover how AutoPilot Systems Inc can transform your workflow with AI-powered automation. No obligation – just genuine insights on enhancing your business operations.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: '**Supercharge Your Workflow Effortlessly**',
  subtitle: 'Experience unprecedented productivity with AI-powered automation that\'s smarter, faster, and more intuitive.',
  ctaText: 'Book Your Demo Now',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'Empower your business with seamless AI-powered workflow automation tools designed to enhance efficiency and simplify complex tasks. Our solutions integrate with your existing systems to save time and maximize productivity.',
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
    phone: '+1-800-555-0199',
    address: '123 Innovation Way, Tech City, CA 94000',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  copyrightText: '© 2023 AutoPilot Systems Inc. All Rights Reserved.',
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
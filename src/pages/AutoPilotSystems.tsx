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
  title: 'Boost Efficiency with AI-Powered Automation',
  subtitle: 'Join leading B2B companies already thriving with our advanced workflow systems. Act fast to leverage smart logic and voice triggers, now featuring Notion and Slack integration.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const problemData = {
  title: 'Eliminate Bottlenecks with AI-Powered Workflow Automation',
  subtitle: 'Streamline your operations and unlock your company's full potential with advanced automation solutions.',
  problems: [
    {
      id: 1,
      title: 'Inefficient Manual Processes',
      description: 'Manual tasks drain time and resources, hindering your team's productivity and growth. Automate these workflows to focus on strategic efforts.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Disconnected Systems and Tools',
      description: 'Operating with disparate systems leads to data silos and miscommunication. Integrate your platforms for seamless data flow and collaboration.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Limited Customization and Flexibility',
      description: 'Generic automation tools often lack depth and adaptability. Gain a competitive edge with highly customizable solutions that cater to your unique business needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Revolutionize Your Business with AI-Powered Workflow Automation',
  description: 'AutoPilot Systems Inc provides AI-driven workflow automation tools that streamline operations for small and mid-sized businesses by integrating CRMs, email systems, and lead-gen platforms. Our solutions eliminate repetitive tasks, thereby enhancing productivity and operational efficiency.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Advanced Integration Capabilities',
      description: 'Seamlessly connect your CRM, email, and lead-gen platforms to automate routine tasks and focus on strategic growth.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Smart Branching Logic',
      description: 'Utilize our deeper logic capabilities to create intelligent workflows that adapt to your business needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Voice Assistant Triggers',
      description: 'Experience the future of automation with beta voice commands that simplify task initiation and management.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Detailed Analytics and Feedback Loops',
      description: 'Gain insights with data-driven analytics and enhance workflows through continuous feedback and optimization.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Elevate Your Productivity?',
  subtitle: 'Join the ranks of ambitious businesses optimizing with our AI-powered tools.',
  ctaText: 'Book a Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const socialProofData = {
  title: 'Why Businesses Love AutoPilot Systems',
  subtitle: 'Real stories from clients who transformed their operations with us',
  testimonials: [
    {
      id: 1,
      name: 'David Thompson',
      role: 'CEO',
      company: 'ThriveTech Solutions',
      quote: 'Switching to AutoPilot was a game-changer; we reduced manual tasks by 70% in just two months!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Samantha Lee',
      role: 'Operations Manager',
      company: 'Bake & Bloom',
      quote: 'Our team’s productivity skyrocketed thanks to seamless integrations. Now, we focus on what we love: baking!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Carlos Rodriguez',
      role: 'Head of Marketing',
      company: 'LeadBoosters Inc.',
      quote: 'Our CRM workflows are now faster and smarter, boosting conversion rates by 15% since implementation.',
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
      question: 'How long does it take to see the benefits of your automation tools?',
      answer: 'Many of our clients notice improvements in efficiency within the first few weeks. For more comprehensive results, such as increased productivity and time savings, it usually takes 1-2 months as we fine-tune settings based on your workflow needs.'
    },
    {
      id: 2,
      question: 'Are your tools suitable for small businesses?',
      answer: 'Absolutely! Our automation solutions are designed to be scalable for businesses of all sizes. We have specific packages that cater to small and mid-sized enterprises, ensuring that our services are both effective and affordable.'
    },
    {
      id: 3,
      question: 'How does your system differ from Zapier?',
      answer: 'Our tools offer deeper logic and intelligent branching, which allows for more sophisticated automation scenarios than standard Zapier flows. We're also working on exciting features like voice assistant triggers and native integrations with Notion and Slack.'
    },
    {
      id: 4,
      question: 'Do I need technical expertise to use your products?',
      answer: 'No technical expertise is required. Our platform is user-friendly and designed with non-technical users in mind. Plus, we provide comprehensive support and onboarding to get you started without any hassle.'
    },
    {
      id: 5,
      question: 'What is the investment required for your services?',
      answer: 'Our pricing is flexible and depends on the features and scale of your automation needs. For small businesses, pricing starts at a competitive rate, and we provide a detailed quote after an initial consultation to understand your workflow challenges.'
    },
    {
      id: 6,
      question: 'Can I see a demo before committing?',
      answer: 'Of course! We invite you to schedule a 30-minute demo via our Calendly link to see our automation tools in action and discuss how they can fit your specific business needs.'
    },
  ],
};

const calendlyData = {
  title: 'Book Your Free Workflow Automation Demo',
  subtitle: 'Discover how our AI-powered tools can streamline your operations and boost efficiency. Join many successful B2B SaaS firms and more in automating tasks with smarter solutions.',
  embedUrl: 'https://calendly.com/autopilot-demos/30min',
};

const finalCTAData = {
  title: '**Supercharge Your Business Today**',
  subtitle: 'Automate your workflows and watch productivity soar. No more mundane tasks, just smarter operations.',
  ctaText: 'Book Your Free Demo',
  ctaLink: 'https://calendly.com/autopilot-demos/30min',
};

const footerData = {
  companyName: 'AutoPilot Systems Inc',
  description: 'AutoPilot Systems Inc provides reliable AI-powered workflow automation tailored for small and mid-sized businesses, enhancing productivity and simplifying complex tasks.',
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
    email: 'contact@autopilotsystems.ai',
    phone: '+1 (800) 555-0199',
    address: '123 Automation Lane, Tech City, TX 78701',
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
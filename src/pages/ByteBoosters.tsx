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
  logoText: 'ByteBoosters',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Book Your Demo Now',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const heroData = {
  title: 'Boost Your Shopify Sales by 30% in 30 Days',
  subtitle: 'Leverage AI-driven insights to skyrocket your DTC conversions. Trusted by 40+ brands in wellness, pet care, and apparel. Don\'t miss out on a competitive edge.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const problemData = {
  title: 'Unlock Higher Conversion Rates with AI Precision',
  subtitle: 'ByteBoosters empowers DTC e-commerce brands to overcome growth barriers through AI-driven conversion optimization.',
  problems: [
    {
      id: 1,
      title: 'Stagnant Conversion Rates',
      description: 'Many DTC e-commerce brands struggle to move beyond stagnant conversion rates, affecting their overall growth and revenue potential. ByteBoosters\' AI tools analyze customer behaviors to dynamically enhance user experiences.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inflexible Optimization Techniques',
      description: 'Traditional methods of conversion optimization require significant development resources and lack agility. Our integration with Shopify and major platforms allows for seamless, multivariate testing without needing dev support.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Missed Personalization Opportunities',
      description: 'Brands often miss opportunities to personalize their user engagement due to static strategies. ByteBoosters uses psychographic segmentation to tailor layouts and copy, leading to a 17-30% improvement in checkout completions.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Revolutionize Your Conversion Rates with AI-Driven Precision',
  description: 'ByteBoosters\' cutting-edge AI-driven CRO optimization tools empower DTC e-commerce brands to substantially increase their conversion rates using advanced machine learning techniques tailored specifically for Shopify environments.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Proprietary Machine Learning Algorithms',
      description: 'Leverage AI to analyze heatmaps, scroll depth, and checkout behavior for insightful optimization.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Seamless Integration',
      description: 'Connect effortlessly with Shopify, Klaviyo, and Meta Ads to run tests without developer support.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Dynamic Copy Rewriting & Layout Reshuffling',
      description: 'Boost engagement through audience-specific modifications based on psychographic segmentation.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Comprehensive Analytics and Feedback',
      description: 'Gain insights and refine strategies through robust analytics and feedback loops, ensuring continuous improvement.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to boost your Shopify sales?',
  subtitle: 'Join over 40 brands seeing a 17-30% checkout lift in just 30 days!',
  ctaText: 'Schedule a Demo',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const socialProofData = {
  title: 'Boost Your Conversions with Trusted Results',
  subtitle: 'Hear from our delighted clients who have transformed their business with ByteBoosters.',
  testimonials: [
    {
      id: 1,
      name: 'Emily Rivers',
      role: 'CMO',
      company: 'TailWag Co.',
      quote: 'With ByteBoosters, we achieved a 25% increase in conversions within just a month. The dynamic layout features are a game-changer for us.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Liam Johnson',
      role: 'Head of E-commerce',
      company: 'PureGlow',
      quote: 'Our checkout completion rates soared by 30% thanks to ByteBoosters. Their seamless integration with Shopify made it hassle-free!',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sophia Martinez',
      role: 'Marketing Director',
      company: 'Eco-Pure Essentials',
      quote: 'Partnering with ByteBoosters was a turning point—the psychographic segmentation strategy elevated our customer engagement by 20%.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Jacob Hwang',
      role: 'VP of Sales',
      company: 'Wellness Wave',
      quote: 'Switching to ByteBoosters helped us refine our ad strategies, resulting in a 17% lift in conversion rates within weeks.',
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
      question: 'How soon can I expect to see improved conversion rates?',
      answer: 'Brands typically see a 17-30% increase in checkout completion within the first 30 days. Our AI-driven approach allows us to make data-backed optimizations quickly, while continuously refining strategies for long-term success.'
    },
    {
      id: 2,
      question: 'Do I need a technical team to implement your tools?',
      answer: 'No technical team is required! Our tools integrate directly into Shopify, Klaviyo, and Meta Ads without needing any developer involvement. We ensure a seamless setup for you.'
    },
    {
      id: 3,
      question: 'What makes ByteBoosters unique compared to other optimization solutions?',
      answer: 'We specialize in psychographic segmentation, using dynamic copy and layout adjustments to directly address your audience\'s personality traits. This tailored approach, coupled with our machine learning algorithms analyzing user behavior, sets us apart.'
    },
    {
      id: 4,
      question: 'Are ByteBoosters’ tools suitable for small and medium-sized businesses?',
      answer: 'Absolutely! While we work with over 40 brands including mid-market players, our solutions are designed to be scalable and beneficial for SMBs, especially those on Shopify.'
    },
    {
      id: 5,
      question: 'Do you provide a trial or demo of your tools?',
      answer: 'Yes, we offer demos to show you firsthand how our tools can transform your conversion rates. You can schedule a demo through our Calendly link here: https://calendly.com/byteboosters/demo.'
    },
    {
      id: 6,
      question: 'What kind of ongoing support do you offer?',
      answer: 'We provide continuous support through maintenance and optimization programs to ensure your conversion rates improve consistently. Our team is available for any questions or further customization needs.'
    },
  ],
};

const calendlyData = {
  title: 'Boost Your Conversion Rates – Schedule Your Free Demo',
  subtitle: 'Discover how ByteBoosters\' AI-driven tools can increase your Shopify store\'s checkout completion by up to 30%. No pressure, just expert advice.',
  embedUrl: 'https://calendly.com/byteboosters/demo',
};

const finalCTAData = {
  title: '**Unlock a 30% Revenue Boost!**',
  subtitle: 'Join over 40 brands seeing increased checkouts in just 30 days.',
  ctaText: 'Book Your Demo Now',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const footerData = {
  companyName: 'ByteBoosters',
  description: 'At ByteBoosters, we empower DTC e-commerce brands with AI-driven CRO optimization tools, helping enhance conversion rates through advanced machine learning algorithms and integrations, delivering substantial lifts in checkout completion.',
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
    email: 'contact@byteboosters.io',
    phone: '1-800-555-0199',
    address: '1234 Optimization Drive, Suite 100, Tech City, TE 54321',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  copyrightText: '© 2023 ByteBoosters. All rights reserved.',
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
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
  title: 'Boost Your Shopify Conversion Rates Instantly',
  subtitle: 'Join 40+ brands leveraging AI-powered optimization to see a 17-30% sales lift in 30 days. Our tools integrate seamlessly with Shopify, Klaviyo, and Meta Ads, providing dynamic insights without dev work. Act now and transform your revenue stream!',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const problemData = {
  title: 'Unlocking Growth Barriers for DTC E-commerce with AI-Driven CRO',
  subtitle: 'ByteBoosters helps DTC brands enhance profitability by boosting conversion rates with advanced AI tools.',
  problems: [
    {
      id: 1,
      title: 'Low Conversion Rates Hindering Revenue Growth',
      description: 'DTC brands often struggle with low conversion rates, which directly impact their revenue and growth potential. Improving these metrics swiftly is crucial for maintaining competitive advantage.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Inefficient Testing and Implementation Processes',
      description: 'Traditional multivariate testing requires developer resources and time, delaying actionable insights. Without efficient workflows, brands miss out on timely optimizations and revenue opportunities.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Lack of Personalization and Customer Insight',
      description: 'Brands that do not leverage psychographic segmentation miss out on tailored marketing strategies, resulting in less effective customer engagement and lower sales.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Boost Your DTC Conversions with ByteBoosters',
  description: 'ByteBoosters offers AI-driven CRO optimization tools tailored for DTC e-commerce brands, enhancing conversion rates through sophisticated machine learning algorithms and seamless Shopify integration, ensuring strategic growth with minimal technical hassle.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'AI-Powered Analysis',
      description: 'Utilizes proprietary algorithms to analyze heatmaps, scroll depth, and checkout behavior, offering deep insights to enhance user experience.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Seamless Integrations',
      description: 'Integrates directly with Shopify, Klaviyo, and Meta Ads, allowing for effortless multivariate testing without the need for developer involvement.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Dynamic Personalization',
      description: 'Employs psychographic segmentation to dynamically rewrite copy and reshuffle layouts, leading to a 17-30% increase in checkout completion within 30 days.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Real-Time Analytics & Automation',
      description: 'Provides real-time analytics and automated feedback loops that optimize campaigns continuously, ensuring sustained conversion growth and efficiency.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Supercharge Your Conversions?',
  subtitle: 'Join 40+ brands boosting sales by 30% in just 30 days!',
  ctaText: 'Schedule Your Demo',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const socialProofData = {
  title: 'Why Top Shopify Brands Trust ByteBoosters',
  subtitle: 'Hear how our AI-driven CRO tools transform their conversion rates.',
  testimonials: [
    {
      id: 1,
      name: 'Sarah L.',
      role: 'E-Commerce Director',
      company: 'GreenLeaf Wellness',
      quote: 'After integrating ByteBoosters, we saw a 25% increase in checkout completion within the first month. It\'s a game-changer!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike T.',
      role: 'Head of Digital Marketing',
      company: 'FurEver Pet Supplies',
      quote: 'Our conversion rates shot up by 20% in just weeks. ByteBoosters made it effortless to test new strategies without needing a dev team.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Karen H.',
      role: 'Growth Manager',
      company: 'Urban Threads',
      quote: 'ByteBoosters’ tailored copy and layout changes boosted our sales by 18% in less than 30 days. Our team couldn\'t be happier!',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Luis G.',
      role: 'Co-Founder',
      company: 'Healthy Treats Co.',
      quote: 'We partnered with ByteBoosters and saw immediate improvements in customer engagement, with a solid 27% conversion lift.',
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
      question: 'How quickly can we see results with ByteBoosters?',
      answer: 'Most brands see a 17-30% lift in checkout completion within the first 30 days. Our machine learning algorithms quickly adapt to real-time user behaviors to optimize your conversion rates.'
    },
    {
      id: 2,
      question: 'Is ByteBoosters suitable for small DTC brands or larger companies only?',
      answer: 'We work with over 40 brands, including mid-market players in wellness, pet care, and apparel. Our scalable solutions are perfect for both budding DTC Shopify brands and established enterprises.'
    },
    {
      id: 3,
      question: 'What makes ByteBoosters\' CRO tools stand out?',
      answer: 'Our edge lies in dynamic copy rewriting and layout reshuffling based on psychographic segmentation. This customized approach using proprietary algorithms differentiates us from other generic CRO solutions.'
    },
    {
      id: 4,
      question: 'Do I need existing integrations or can ByteBoosters set them up?',
      answer: 'We integrate directly into Shopify, Klaviyo, and Meta Ads with ease. Whether you have existing systems or need help setting them up, we cover it all without requiring developer involvement.'
    },
    {
      id: 5,
      question: 'What does ByteBoosters charge for its services?',
      answer: 'Our pricing is flexible and tailored to your needs. Contact us for a discovery call through our Calendly link to get a detailed quote suited to your business scope.'
    },
    {
      id: 6,
      question: 'Can ByteBoosters provide ongoing support and optimization?',
      answer: 'Absolutely! We offer continuous support and can run multivariate tests to ensure your funnels are always at peak performance, helping maintain and improve conversion rates.'
    },
  ],
};

const calendlyData = {
  title: 'Boost Your Sales: Book Your Free Demo Today!',
  subtitle: 'Discover how AI-driven CRO can elevate your Shopify brand. No pressure, just real insights from the experts who know conversion optimization. See how you can achieve a 17-30% lift in checkout completion in just 30 days.',
  embedUrl: 'https://calendly.com/byteboosters/demo',
};

const finalCTAData = {
  title: '**Boost Your Revenue Now**',
  subtitle: 'Unlock up to 30% more sales with our AI-driven solutions.',
  ctaText: 'Book Your Demo',
  ctaLink: 'https://calendly.com/byteboosters/demo',
};

const footerData = {
  companyName: 'ByteBoosters',
  description: 'Trusted by 40+ brands, ByteBoosters specializes in AI-driven CRO tools that increase DTC Shopify brands\' conversion rates by 17-30% within 30 days, using machine learning to analyze user behaviors for dynamic site optimization.',
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
    email: 'support@byteboosters.io',
    phone: '1-800-123-4567',
    address: '123 E-commerce St., Suite 456, Tech City, TX, 78910',
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
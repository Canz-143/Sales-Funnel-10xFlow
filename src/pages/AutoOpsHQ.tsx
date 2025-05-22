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
  logoText: 'AutoOpsHQ',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaLabel: 'Book Your Discovery',
  ctaLink: 'https://calendly.com/autoopshq/discovery',
};

const heroData = {
  title: 'Scale Effortlessly with Automation Power',
  subtitle: 'Unlock 22+ hours/week by automating tasks and scaling without the extra headcount. Designed by experts for startups ready to grow exponentially.',
  media: {
    type: 'image' as const,
    src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Team collaborating on business strategy',
  },
  ctaLabel: 'Book a Demo',
  ctaLink: 'https://calendly.com/autoopshq/discovery',
};

const problemData = {
  title: 'Revolutionize Your Startup\'s Efficiency with Automation',
  subtitle: 'Eliminate repetitive tasks and streamline operations to scale without expanding your team.',
  problems: [
    {
      id: 1,
      title: 'Wasted Hours on Manual Processes',
      description: 'Startups often lose over 20 hours a week to repetitive tasks that could be automated. This inefficiency not only drains time but also hinders growth and innovation.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>'
    },
    {
      id: 2,
      title: 'Ineffective Client Onboarding',
      description: 'Manual client onboarding leads to longer setup times and increased chances of error, affecting client satisfaction and retention rates.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    {
      id: 3,
      title: 'Unreliable Data Management Systems',
      description: 'Without real-time data integration and automation, critical business decisions can be delayed or based on outdated information, impacting strategic planning and competitiveness.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>'
    },
  ],
};

const solutionData = {
  title: 'Transform Your Startup with End-to-End Automation',
  description: 'AutoOpsHQ offers a comprehensive suite of no-code automation services, empowering startups and agencies to scale efficiently by removing manual labor from routine tasks, enhancing productivity and growth without expanding team sizes.',
  image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  features: [
    {
      id: 1,
      title: 'Customized Automation Stacks',
      description: 'Builds tailored no-code automation systems using tools like Zapier and Airtable, fitting your unique operational needs.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
    },
    {
      id: 2,
      title: 'Automated Client Onboarding',
      description: 'Streamlines client onboarding processes from contract signing to Slack channel creation, ensuring a seamless experience.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>'
    },
    {
      id: 3,
      title: 'Real-Time Data Enrichment',
      description: 'Leverages LinkedIn and Apollo APIs for instant CRM data updates, keeping your sales team informed and effective.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 4,
      title: 'Lead Generation and Distribution',
      description: 'Implements automatic lead scraping, qualification, and distribution, boosting your sales funnel efficiency.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
    },
  ],
};

const ctaMidData = {
  title: 'Ready to Scale Effortlessly?',
  subtitle: 'Join leading startups saving 22+ hours weekly with AutoOpsHQ.',
  ctaText: 'Book a Free Demo',
  ctaLink: 'https://calendly.com/autoopshq/discovery',
};

const socialProofData = {
  title: 'Why Our Clients Love AutoOpsHQ',
  subtitle: 'Hear directly from those who\'ve transformed their operations with us',
  testimonials: [
    {
      id: 1,
      name: 'Jenna Mathews',
      role: 'COO',
      company: 'Growthly',
      quote: 'Implementing AutoOpsHQ saved us 20 hours a week and streamlined our onboarding process beyond what we imagined.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 2,
      name: 'Lucas Porter',
      role: 'Head of Marketing',
      company: 'AgencyCo',
      quote: 'With AutoOpsHQ, our CRM now updates in real-time, which has boosted our sales team\'s efficiency by 30%.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
    },
    {
      id: 3,
      name: 'Samantha Riley',
      role: 'Operations Manager',
      company: 'InnovX',
      quote: 'Their white-label service gave us a new revenue stream, resulting in a 15% increase in client retention rates.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
    },
    {
      id: 4,
      name: 'Ethan Clark',
      role: 'Founder',
      company: 'BuzzLaunch',
      quote: 'The automation stacks they designed have allowed us to scale without hiring additional staff, saving us thousands.',
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
      question: 'How quickly can I see results after implementing automation?',
      answer: 'Most of our clients start seeing time savings of around 22 hours per week within the first month of implementation. As we refine the systems based on your feedback and data, even greater efficiencies can be realized.'
    },
    {
      id: 2,
      question: 'Is AutoOpsHQ suitable for startups and agencies of all sizes?',
      answer: 'Absolutely! We tailor our automation solutions to meet the specific needs of startups and agencies, whether you\'re just getting started or are an established business. We have a special focus on early-stage startups and scaling agencies.'
    },
    {
      id: 3,
      question: 'What sets AutoOpsHQ apart from other automation service providers?',
      answer: 'Our team consists of ex-RevOps, growth marketers, and certified Make experts who not only build reliable automations but design scalable systems with built-in error handling and documentation, setting us apart from others in the field.'
    },
    {
      id: 4,
      question: 'Do I need to be tech-savvy to use your services?',
      answer: 'Not at all. We handle the technical aspects of building and integrating automation. We also provide thorough documentation and training to ensure your team can manage new workflows with ease.'
    },
    {
      id: 5,
      question: 'What is the cost of your automation services?',
      answer: 'Pricing is flexible and depends on the complexity of the automation required. We offer a free discovery call to understand your needs better and provide a tailored quote.'
    },
    {
      id: 6,
      question: 'Do you offer white-label solutions?',
      answer: 'Yes, we offer white-label builds for agencies wanting to resell automation services under their own brand. This allows agencies to expand their service offerings with minimal overhead.'
    },
  ],
};

const calendlyData = {
  title: 'Schedule Your Custom Automation Strategy Session',
  subtitle: 'Discover how AutoOpsHQ can save your team hours every week with tailored automation solutions. No obligations—just expert advice from our seasoned automation specialists.',
  embedUrl: 'https://calendly.com/autoopshq/discovery',
};

const finalCTAData = {
  title: '**Supercharge Your Growth Now!**',
  subtitle: 'Save up to 22 hours weekly and focus on scaling your startup effortlessly.',
  ctaText: 'Book Your Discovery',
  ctaLink: 'https://calendly.com/autoopshq/discovery',
};

const footerData = {
  companyName: 'AutoOpsHQ',
  description: 'Empowering startups and agencies through seamless automation solutions, saving time and optimizing efficiency without the need for additional manpower.',
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
    email: 'info@autoopshq.com',
    phone: '+1 (555) 123-4567',
    address: '123 Automation Lane, Tech City, TX 75001, USA',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  copyrightText: '© 2023 AutoOpsHQ Inc. All rights reserved.',
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
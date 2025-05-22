import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { SocialProofSectionProps } from '../types';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from 'lucide-react';

const SocialProofSection: React.FC<SocialProofSectionProps> = ({ 
  title, 
  subtitle,
  testimonials 
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: testimonials.length > 2 ? 3 : testimonials.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pb-12"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-xl shadow-md p-8 h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                      
                      {testimonial.rating && (
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16}
                              className={`${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} mr-1`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
        
        {/* Trust badges */}
        <div className="mt-16">
          <p className="text-center text-gray-600 mb-8">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <img src="https://images.pexels.com/photos/11304372/pexels-photo-11304372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 grayscale" />
            <img src="https://images.pexels.com/photos/11304370/pexels-photo-11304370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 grayscale" />
            <img src="https://images.pexels.com/photos/11304375/pexels-photo-11304375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 grayscale" />
            <img src="https://images.pexels.com/photos/11304374/pexels-photo-11304374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 grayscale" />
            <img src="https://images.pexels.com/photos/11304376/pexels-photo-11304376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Company logo" className="h-8 grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
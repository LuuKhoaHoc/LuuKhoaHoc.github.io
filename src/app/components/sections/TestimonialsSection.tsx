'use client';

import { motion } from 'framer-motion';
import { Linkedin, Quote, Star, User } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  linkedinUrl?: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    position: 'Senior Frontend Developer',
    company: 'GREENSOFTWARE ASIA',
    content:
      'Khoa là một developer rất tài năng và có tinh thần học hỏi cao. Anh ấy đã thể hiện khả năng lãnh đạo xuất sắc trong việc mentoring team junior và luôn đưa ra những giải pháp sáng tạo cho các vấn đề phức tạp.',
    rating: 5,
    relationship: 'Direct Supervisor',
    linkedinUrl: 'https://linkedin.com/in/example',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    position: 'Project Manager',
    company: 'GREENSOFTWARE ASIA',
    content:
      'Làm việc với Khoa trong dự án Podbrick thực sự là một trải nghiệm tuyệt vời. Anh ấy không chỉ có kỹ năng technical tốt mà còn có khả năng giao tiếp và làm việc nhóm rất hiệu quả. Deadline luôn được đảm bảo.',
    rating: 5,
    relationship: 'Project Collaboration',
  },
  {
    id: '3',
    name: 'Lê Văn C',
    position: 'Junior Frontend Developer',
    company: 'GREENSOFTWARE ASIA',
    content:
      'Khoa đã mentor tôi trong 6 tháng đầu làm việc. Anh ấy rất kiên nhẫn trong việc hướng dẫn và luôn sẵn sàng chia sẻ kiến thức. Nhờ có anh, tôi đã phát triển kỹ năng React và Next.js rất nhanh chóng.',
    rating: 5,
    relationship: 'Mentee',
  },
  {
    id: '4',
    name: 'Phạm Thị D',
    position: 'UI/UX Designer',
    company: 'GREENSOFTWARE ASIA',
    content:
      'Khoa có khả năng hiểu design requirement rất tốt và luôn implement đúng như mockup. Anh ấy cũng đưa ra nhiều suggestion hay để optimize user experience và performance.',
    rating: 5,
    relationship: 'Cross-functional Teammate',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What People{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feedback from colleagues, supervisors, and team members I&apos;ve
              had the pleasure to work with.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-purple-200 dark:text-purple-800">
                  <Quote size={40} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar ? (
                        <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </div>
                      ) : (
                        <User size={24} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {testimonial.company} • {testimonial.relationship}
                      </p>
                    </div>
                  </div>

                  {testimonial.linkedinUrl && (
                    <motion.a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                    >
                      <Linkedin size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Team Members Mentored
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Project Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                1.5+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years of Leadership
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Want to Work Together?
              </h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, sharing
                knowledge, and collaborating on exciting projects. Let&apos;s
                connect and create something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-colors duration-300 inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

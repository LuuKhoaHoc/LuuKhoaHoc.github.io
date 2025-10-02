'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  Code,
  Coffee,
  MapPin,
  Users,
} from 'lucide-react';

import { personalInfo } from '@/lib/data';
import { calculateYearsOfExperience } from '@/lib/utils';

const stats = [
  {
    icon: Code,
    label: 'Years Experience',
    value: `${calculateYearsOfExperience('2020-01-01')}+`,
    description: 'Building digital solutions',
  },
  {
    icon: Award,
    label: 'Projects Completed',
    value: '25+',
    description: 'Successful deliveries',
  },
  {
    icon: Coffee,
    label: 'Cups of Coffee',
    value: '∞',
    description: 'Fueling creativity',
  },
  {
    icon: Users,
    label: 'Happy Clients',
    value: '15+',
    description: 'Satisfied customers',
  },
];

const highlights = [
  {
    icon: '🚀',
    title: 'Performance Focused',
    description:
      'I build fast, scalable applications optimized for user experience and performance.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Enthusiast',
    description:
      'Passionate about creating beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: '⚡',
    title: 'Modern Technologies',
    description:
      'Always learning and implementing the latest technologies and best practices.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Strong believer in agile methodologies and effective team collaboration.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for
              creating amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image and Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg"
                >
                  <Code size={24} />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg"
                >
                  <BookOpen size={24} />
                </motion.div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin size={20} />
                  <span>{personalInfo.contact.location}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={20} />
                  <span>Available for new opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Description */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  Passionate Developer & Problem Solver
                </h3>

                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    I&apos;m a dedicated full-stack developer with over{' '}
                    {calculateYearsOfExperience('2020-01-01')} years of
                    experience creating digital solutions that make a
                    difference. My journey in tech began with a curiosity about
                    how things work, which evolved into a passion for building
                    them.
                  </p>

                  <p>
                    I specialize in modern web technologies like React, Next.js,
                    and Node.js, with a strong focus on creating user-centric
                    applications that are both beautiful and functional. I
                    believe in writing clean, maintainable code and following
                    best practices to deliver exceptional results.
                  </p>

                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community. I&apos;m
                    always eager to take on new challenges and collaborate with
                    amazing teams.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{highlight.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center"
                >
                  <stat.icon size={24} />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * index,
                    type: 'spring',
                  }}
                  className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  {stat.value}
                </motion.div>

                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

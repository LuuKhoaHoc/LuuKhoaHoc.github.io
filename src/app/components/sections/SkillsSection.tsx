'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import { skills } from '@/lib/data';
import type { Skill } from '@/lib/types';

const categories = [
  { id: 'all', label: 'All Skills', color: 'from-blue-500 to-purple-500' },
  { id: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
  { id: 'database', label: 'Database', color: 'from-yellow-500 to-orange-500' },
  { id: 'devops', label: 'DevOps', color: 'from-red-500 to-pink-500' },
  { id: 'other', label: 'Other', color: 'from-purple-500 to-indigo-500' },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
        </div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: index * 0.1 + 0.5,
              ease: 'easeOut',
            }}
            className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </motion.div>
        </div>

        {/* Skill Level Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          className="absolute -top-1 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full w-4 h-4 shadow-md"
          style={{ left: `calc(${skill.level}% - 8px)` }}
        />
      </div>

      {/* Category Badge */}
      <div className="mt-4">
        <span
          className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-white`}
        >
          {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
        </span>
      </div>
    </motion.div>
  );
}

function getCategoryColor(category: string): string {
  const colorMap: Record<string, string> = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    database: 'from-yellow-500 to-orange-500',
    devops: 'from-red-500 to-pink-500',
    mobile: 'from-purple-500 to-indigo-500',
    other: 'from-gray-500 to-slate-500',
  };
  return colorMap[category] || 'from-blue-500 to-purple-500';
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life. Each skill
              represents hours of learning and real-world application.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category.label}
                <span className="ml-2 px-2 py-1 bg-black/10 dark:bg-white/10 rounded-full text-xs">
                  {category.id === 'all'
                    ? skills.length
                    : skills.filter(s => s.category === category.id).length}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I&apos;m constantly
              exploring new frameworks, tools, and best practices to stay at the
              forefront of web development. The skills you see here represent my
              current expertise, but I&apos;m always adding more!
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  label: 'Languages',
                  count: skills.filter(s =>
                    ['JavaScript', 'TypeScript', 'Python'].includes(s.name)
                  ).length,
                },
                {
                  label: 'Frameworks',
                  count: skills.filter(s =>
                    ['React', 'Next.js', 'Express.js'].includes(s.name)
                  ).length,
                },
                {
                  label: 'Databases',
                  count: skills.filter(s => s.category === 'database').length,
                },
                {
                  label: 'Tools',
                  count: skills.filter(s => s.category === 'devops').length,
                },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="text-3xl font-bold mb-1"
                  >
                    {stat.count}+
                  </motion.div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

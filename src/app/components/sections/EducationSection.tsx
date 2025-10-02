'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  GraduationCap,
  MapPin,
} from 'lucide-react';

import { certifications, education } from '@/lib/data';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
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
              Education &{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Learning
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My educational background and continuous learning journey in
              technology and software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <GraduationCap className="mr-3 text-green-600" size={28} />
                  Formal Education
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full mb-8" />
              </motion.div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-lg font-medium text-green-600 dark:text-green-400 mb-2">
                          {edu.school}
                        </p>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-4">
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-2" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      {edu.gpa && (
                        <div className="bg-white dark:bg-gray-700 px-3 py-1 rounded-lg border">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            GPA
                          </span>
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            {edu.gpa}
                          </div>
                        </div>
                      )}
                    </div>

                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                    )}

                    {edu.relevantCourses && (
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                          Relevant Coursework:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCourses.map(course => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Award className="mr-3 text-blue-600" size={28} />
                  Certifications & Courses
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8" />
              </motion.div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                      {cert.credentialUrl && (
                        <motion.a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.status && (
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            cert.status === 'Valid'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                          }`}
                        >
                          {cert.status}
                        </span>
                      )}
                    </div>

                    {cert.description && (
                      <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-3">
                        {cert.description}
                      </p>
                    )}

                    {cert.skills && (
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Online Learning Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 rounded-xl text-white"
              >
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <BookOpen className="mr-2" size={20} />
                  Continuous Learning
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm opacity-80">Courses Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm opacity-80">Hours of Learning</div>
                  </div>
                </div>
                <p className="text-sm opacity-90 mt-4">
                  Always staying updated with the latest technologies through
                  platforms like Udemy, Coursera, and YouTube channels focused
                  on web development.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Learning Philosophy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous learning and staying curious about new
                technologies. My approach combines formal education with
                hands-on practice, online courses, and real-world project
                experience to build comprehensive expertise in frontend
                development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

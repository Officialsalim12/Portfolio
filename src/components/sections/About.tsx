"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Code2, Palette, Globe, Layers } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Done", value: "6" },
  { label: "Happy Clients", value: "2" },
];

const skills = [
  { category: "Languages", items: ["C#", "JavaScript", "TypeScript"] },
  { category: "Frameworks", items: ["React", "Next.js", "Flutter", "Flask", "Django"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { category: "Tools & Platforms", items: ["AWS", "Git", "Docker", "Postman", "Cursor IDE", "VS Code"] },
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Background</span>
            <h2 className="text-4xl lg:text-5xl font-poppins font-black mb-8 leading-tight">Beyond the <span className="text-gradient">Code</span>.</h2>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              I am a Lead Software Developer with a passion for creating seamless digital experiences. I graduated with **Double Honors** in **B.Sc. Software Engineering** from **Cyprus West University**, where I was recognized as the **Best Graduating and International Student of 2024**.
            </p>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed">
              My academic excellence, combined with over 2 years of professional leadership, allows me to build scalable web applications that merge robust architecture with intuitive, award-winning technical engineering.
            </p>
            
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <div className="text-4xl lg:text-5xl font-black text-primary">{stat.value}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-8 group hover:bg-primary/5 transition-colors border-none bg-slate-50/50 h-full">
                  <h3 className="font-black text-2xl lg:text-3xl mb-6 text-slate-800 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full group-hover:w-12 transition-all"></span>
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, j) => (
                      <span 
                        key={j} 
                        className="px-4 py-2 bg-white text-slate-700 text-sm rounded-xl font-bold border border-slate-100 shadow-sm group-hover:border-primary/20 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Experience & Education */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Journey
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-poppins font-black mb-12"
            >
              Work Experience
            </motion.h3>
            <div className="space-y-12">
              {[
                {
                  role: "Lead Developer and Project Engineer",
                  company: "Knowledge Network Solution",
                  period: "2025 - Present",
                  desc: "Leading architecture, development, and project engineering for enterprise systems, ensuring high-performance delivery and team coordination."
                },
                {
                  role: "Manager",
                  company: "Vydish Guest House & Pool",
                  period: "2024",
                  desc: "Oversee daily operations, staff management, and customer satisfaction to ensure smooth guest house and pool service."
                },
                {
                  role: "Assistant Head of Restaurant & Waiter",
                  company: "Tssokos Hotel, Cyprus",
                  period: "2023",
                  desc: "Support restaurant management with staff coordination and customer service."
                },
                {
                  role: "Intern, Head of IT and Support",
                  company: "Atlantis Garden, Cyprus",
                  period: "2022",
                  desc: "Led IT Support functions, ensuring smooth technology operations and assisting with system maintenance."
                }
              ].map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l-2 border-slate-100 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary" />
                  <p className="text-sm font-bold text-primary mb-1">{job.period}</p>
                  <h4 className="text-xl font-black text-slate-800">{job.role}</h4>
                  <p className="text-slate-500 font-bold mb-3">{job.company}</p>
                  <p className="text-slate-600 leading-relaxed">{job.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Academic
            </motion.span>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-poppins font-black mb-12"
            >
              Education
            </motion.h3>
            <div className="space-y-12">
              {[
                {
                  degree: "BSc. Software Engineering (GPA: 3.75)",
                  school: "Cyprus West University",
                  period: "2020 - 2024",
                  desc: "Double Honors. Recognized as the Best Graduating and International Student of 2024."
                },
                {
                  degree: "Wassce Certificate",
                  school: "Prince of Wales Senior Secondary School",
                  period: "2014 - 2018",
                  desc: "Senior Secondary Education completion."
                },
                {
                  degree: "BECE Certificate",
                  school: "VEM Junior Secondary school",
                  period: "2010 - 2014",
                  desc: "Junior Secondary Education completion."
                }
              ].map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l-2 border-slate-100 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-secondary" />
                  <p className="text-sm font-bold text-secondary mb-1">{edu.period}</p>
                  <h4 className="text-xl font-black text-slate-800">{edu.degree}</h4>
                  <p className="text-slate-500 font-bold mb-3">{edu.school}</p>
                  <p className="text-slate-600 leading-relaxed">{edu.desc}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Certificates */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-8 rounded-[2.5rem] bg-slate-900 text-white"
            >
              <h4 className="text-2xl font-black mb-6">Certifications</h4>
              <ul className="space-y-4">
                {[
                  { title: "B.Sc. Double Honors in Software Engineering", school: "Cyprus West University" },
                  { title: "Software Lead @ Code4Health Hackathon", school: "Organized by DSTI and UNICEF" },
                  { title: "Web Development Bootcamp", school: "Udemy - Angela Yu" },
                  { title: "Big 5 Innovation Challenge", school: "Government Innovation Bootcamp" },
                ].map((cert, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <p className="font-bold">{cert.title}</p>
                      <p className="text-sm text-slate-400">{cert.school}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

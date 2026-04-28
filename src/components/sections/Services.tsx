"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Code2, Smartphone, Database, LineChart } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Building high-performance, scalable web applications using modern frameworks like React and Next.js."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-secondary" />,
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications with Flutter and React Native for iOS and Android."
  },
  {
    icon: <Database className="w-8 h-8 text-indigo-500" />,
    title: "API Development",
    description: "Designing and implementing robust backend architectures and secure, efficient RESTful/GraphQL APIs."
  },
  {
    icon: <LineChart className="w-8 h-8 text-blue-500" />,
    title: "Consulting",
    description: "Providing strategic technical advice on system architecture, performance optimization, and tech stacks."
  }
];

export const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-slate-50/50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Expertise</span>
            <h2 className="text-6xl lg:text-7xl 2xl:text-8xl font-poppins font-black mb-6">Expertise & <span className="text-gradient">Solutions</span></h2>
            <p className="text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Leveraging modern technologies to deliver high-impact digital solutions that drive growth and efficiency.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="h-full relative overflow-hidden bg-white/70 backdrop-blur-md border-slate-200/50 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-8 rounded-[2.5rem] flex flex-col">
                <div className="absolute top-6 right-8 text-5xl font-black text-slate-100 group-hover:text-primary/5 transition-colors">
                  0{i + 1}
                </div>
                
                <div className="mb-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 inline-block group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500 self-start">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black mb-4 text-slate-800">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 flex items-center text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

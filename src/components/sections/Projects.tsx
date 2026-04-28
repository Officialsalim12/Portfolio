"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web App", "Mobile", "Consultancy"];

const projects = [
  {
    id: 1,
    title: "RCBank Complaint Tool",
    category: "Web App",
    image: "/RCBank-Complaint-Tool.png",
    description: "A comprehensive complaint management system developed for RCBank to streamline customer feedback and resolution processes.",
    link: "",
    isDevelopment: true,
  },
  {
    id: 2,
    title: "Fundflow",
    category: "Web App",
    image: "/Fundflow-web.png",
    description: "A modern financial management platform designed to simplify how individuals and organizations track, manage, and optimize their cash flow. Fundflow.sl provides intuitive tools for monitoring transactions, budgeting, and generating financial insights, helping users make smarter, data-driven decisions. Built with a focus on usability and clarity, the platform bridges the gap between complex financial data and everyday users.",
    link: "https://fundflow.sl",
  },
  {
    id: 3,
    title: "VitaFoods 360",
    category: "Web App",
    image: "/vitfoods360-web.png",
    description: "A health and nutrition web application that promotes better eating habits through accessible, user-centered design. And a store were the bakery do product sales and manage customers. VitaFood360 provides insights into food choices, nutrition tracking, and wellness guidance, helping users make informed lifestyle decisions. The platform combines functionality with a clean, engaging interface to deliver a holistic digital health experience.",
    link: "https://vitafood360.vercel.app",
  },
  {
    id: 4,
    title: "KNS College",
    category: "Web App",
    image: "/KNS-College-Web.png",
    description: "An education-focused web platform tailored to enhance communication and information access for students, staff, and stakeholders. The site centralizes academic resources, announcements, and institutional information in a user-friendly interface. Designed with scalability in mind, it supports future growth and digital transformation in the education space.",
    link: "https://kns.edu.sl",
  },
  {
    id: 5,
    title: "KNS Web",
    category: "Web App",
    image: "/KNS-Web.png",
    description: "A dynamic web platform developed to represent and support KNS’s digital presence. The site delivers structured information, seamless navigation, and a clean user experience, making it easy for visitors to engage with services and content. The project emphasizes performance, responsiveness, and accessibility across devices.",
    link: "https://kns.sl",
  },

];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-6xl lg:text-7xl 2xl:text-8xl font-poppins font-black mb-4">Selected <span className="text-gradient">Work</span></h2>
            <p className="text-slate-500 max-w-md lg:max-w-xl text-lg lg:text-xl">
              A curated collection of digital products and brand experiences built with precision.
            </p>
          </div>

          <div className="flex bg-slate-100/50 backdrop-blur-sm p-2 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-8 py-3 rounded-xl text-sm font-bold transition-all duration-500",
                  activeTab === cat 
                    ? "bg-white text-primary shadow-xl scale-105" 
                    : "text-slate-500 hover:text-slate-800"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-primary-foreground/80 text-sm font-medium">{project.category}</span>
                    {project.isDevelopment && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-yellow-500/30 backdrop-blur-md">
                        In Development
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-6 text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="flex gap-4">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-slate-900 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

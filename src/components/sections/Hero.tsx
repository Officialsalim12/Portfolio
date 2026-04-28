"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden section-padding">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -30, 0],
            rotate: [0, -10, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            Available for new projects
          </motion.div>
          
          <div className="relative mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black leading-tight tracking-tighter text-slate-900 mix-blend-darken">
              ABDUL<br/>
              <span className="text-gradient">SALIM GANI</span>
            </h1>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </div>
          
          <p className="text-xl lg:text-2xl 2xl:text-3xl text-slate-600 mb-10 max-w-2xl 2xl:max-w-4xl leading-relaxed">
            Experienced and motivated young Lead Software Developer with over 2+ years of experience in creating and implementing cutting-edge software solutions to enhance business efficiency. Highly skilled in software development and comprehensive project management, from initial concept to final deployment. proficient in managing cross-functional teams in a high-speed, deadline-driven environment to ensure timely project completion within budget constraints.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button className="group">
                Let's Work Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/work">
              <Button variant="secondary" className="group">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end animate-float"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] animate-border-light rounded-[2.5rem]">
            <div className="absolute inset-0 bg-premium-gradient rounded-[2.5rem] rotate-6 scale-105 opacity-20 blur-sm" />
            <div className="absolute inset-0 bg-white rounded-[2.5rem] -rotate-3 border border-slate-200 shadow-xl overflow-hidden">
               {/* Use the generated image if available, else a high-quality placeholder */}
               <img 
                 src="/626047085_915091154843022_4459607812033514120_n-removebg-preview.png" 
                 alt="Fullstack Web & Mobile Developer" 
                 className="w-full h-full object-cover grayscale-0 transition-all duration-700 hover:scale-105"
               />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">2+ Years</p>
                  <p className="text-sm text-slate-500">Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

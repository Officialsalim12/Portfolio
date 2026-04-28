"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    text: "Working with this developer was a game-changer for our platform. The attention to detail in both UI and architecture is rare.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at CloudScale",
    text: "The perfect blend of design thinking and engineering excellence. Delivered a complex project ahead of schedule.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder of GreenPulse",
    text: "Our brand identity and web presence have never looked better. Truly a professional who understands user needs.",
  }
];

export const Testimonials = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-poppins font-bold mb-16 text-center">What Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full relative pt-12">
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote className="w-12 h-12" />
                </div>
                <p className="text-slate-600 mb-8 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-800">{t.name}</p>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

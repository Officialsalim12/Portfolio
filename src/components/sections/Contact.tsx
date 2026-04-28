"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Facebook, MessageCircle, Github, Twitter } from "lucide-react";
import { Card } from "@/components/ui/Card";

const contacts = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "salim@kns.sl",
    href: "mailto:salim@kns.sl",
    color: "bg-blue-500"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "Abdul Salim Gani",
    href: "https://www.linkedin.com/in/abdul-salim-gani-28212a233/",
    color: "bg-indigo-600"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    label: "WhatsApp",
    value: "+232 77287881",
    href: "https://wa.me/23277287881",
    color: "bg-green-500"
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: "Github",
    value: "Officialsalim12",
    href: "https://github.com/Officialsalim12",
    color: "bg-slate-800"
  },
  {
    icon: <Facebook className="w-6 h-6" />,
    label: "Facebook",
    value: "Abdul Salim Gani",
    href: "https://www.facebook.com/abdul.salim.gani",
    color: "bg-blue-600"
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    label: "X (Twitter)",
    value: "@SalimGani156414",
    href: "https://x.com/SalimGani156414",
    color: "bg-slate-900"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-6xl lg:text-7xl 2xl:text-8xl font-poppins font-black mb-8 leading-tight">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-md lg:max-w-xl leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-6">
              {[
                { icon: <Github />, href: "https://github.com/Officialsalim12", color: "hover:bg-slate-900" },
                { icon: <Twitter />, href: "https://x.com/SalimGani156414", color: "hover:bg-blue-400" },
                { icon: <Facebook />, href: "https://www.facebook.com/abdul.salim.gani", color: "hover:bg-blue-600" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -5 }}
                  className={cn("p-4 rounded-2xl bg-slate-100 text-slate-600 hover:text-white transition-all duration-300 shadow-sm", social.color)}
                >
                  {React.cloneElement(social.icon as React.ReactElement, { className: "w-6 h-6" })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Card className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 p-8 hover:border-primary/20 hover:shadow-xl transition-all duration-500 h-full rounded-[2rem] bg-slate-50/50 border-slate-100">
                  <div className={cn("p-4 rounded-2xl text-white shadow-lg w-fit mx-auto lg:mx-0 group-hover:scale-110 transition-transform duration-500", contact.color)}>
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">{contact.label}</p>
                    <p className="text-base font-black text-slate-800 truncate">{contact.value}</p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Abdul Salim Gani. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

// Helper for Tailwind classes inside the map
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

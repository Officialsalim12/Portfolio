import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className, hoverable = true }: CardProps) => {
  return (
    <div
      className={cn(
        "glass p-6 rounded-3xl border border-white/40",
        hoverable && "hover:shadow-premium transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};

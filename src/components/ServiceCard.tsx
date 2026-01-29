"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  id?: string;
}

export default function ServiceCard({ icon, title, description, id }: ServiceCardProps) {
  return (
    <motion.article
      id={id}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-200/80 hover:shadow-xl hover:shadow-emerald-500/5"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-100/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-slate-50 text-2xl text-emerald-600 shadow-inner transition-all duration-300 group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/25">
          {icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
      </div>
    </motion.article>
  );
}

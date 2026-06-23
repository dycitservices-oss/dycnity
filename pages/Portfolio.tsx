import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Lexonit Website Development",
      category: "Website Development",
      desc: "Developed a modern, responsive website for Lexonit using cutting-edge web technologies and best practices.",
      image: "https://picsum.photos/id/1/800/600",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Techiemaya Enterprise Systems",
      category: "Enterprise Systems",
      desc: "Implemented comprehensive enterprise systems for Techiemaya, enhancing operational efficiency and scalability.",
      image: "https://picsum.photos/id/3/800/600",
      tags: ["ERP", "Cloud Computing", "Integration"]
    },
    {
      title: "SMI Middle East IT Services",
      category: "IT Services",
      desc: "Provided end-to-end IT services for SMI Middle East, including infrastructure management and technical support.",
      image: "https://picsum.photos/id/180/800/600",
      tags: ["IT Infrastructure", "Support", "Consulting"]
    }
  ];

  return (
    <>
      <SEO
        title="DYCNITY Portfolio - Successful IT Projects & Case Studies"
        description="Explore DYCNITY's portfolio of successful IT projects including mobile app development, ERP implementation, test automation, and data analytics solutions for enterprise clients."
        keywords="IT portfolio, case studies, mobile app development, ERP implementation, test automation, data analytics projects, successful IT projects"
        canonical="https://DYCNITY.com/portfolio"
      />
      <div className="pt-10 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <SectionHeader title="Our Recent Work" subtitle="Portfolio" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.category} project showcasing ${project.tags.join(', ')} technologies`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Client Logo Strip (Visual Filler) */}
      <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
            >
               <a href="https://lexonit.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Lexonit</a>
               <a href="https://techiemaya.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Techiemaya</a>
               <a href="https://smimiddleeast.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold font-sans text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">SMI Middle East</a>
            </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Portfolio;
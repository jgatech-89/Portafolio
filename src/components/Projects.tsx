import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico con gestión completa de inventario, pagos y envíos.',
    image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NjQwNDY5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'App de Gestión Empresarial',
    description: 'Sistema integral para gestión de proyectos, recursos humanos y finanzas.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjYzMTgyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
  },
  {
    title: 'Aplicación Móvil de Salud',
    description: 'App móvil de uso para personas con discapacidades.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjY0MTYxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React Native', 'Firebase', 'TypeScript'],
  },
  {
    title: 'CRM',
    description: 'Sistema de monitoreo y control para un CallCenter.',
    image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2NDExMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'MQTT', 'InfluxDB', 'Docker'],
  },
  {
  title: 'Integración de Pagos Multicanal',
  description:
    'Implementación de un sistema de pagos en una plataforma existente, permitiendo transacciones con tarjetas de crédito/débito y métodos digitales, manteniendo compatibilidad con la arquitectura previa.',
  image:
    'https://images.unsplash.com/photo-1642790106117-e829e14a795f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjBwYXltZW50fGVufDF8fHx8MTc2NjQxOTAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
  tags: ['Crypto Payments', 'Stripe', 'Web3', 'Node.js', 'React'],
},

];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Algunos de nuestros trabajos más recientes que demuestran nuestra experiencia y compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink size={18} />
                    <span>Ver Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                    <Github size={18} />
                    <span>Código</span>
                  </button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

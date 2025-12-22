import { motion } from 'motion/react';
import { Smartphone, Globe, Cloud, Database, Palette, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías: React, Next.js, y más.',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description: 'Apps nativas y multiplataforma para iOS y Android con experiencias de usuario excepcionales.',
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Arquitecturas cloud escalables y seguras en AWS, Azure y Google Cloud Platform.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Desarrollo de APIs RESTful y GraphQL robustas con arquitecturas escalables.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Diseño de interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
  },
  {
    icon: Settings,
    title: 'Consultoría Tech',
    description: 'Asesoría tecnológica para optimizar tus procesos y elegir las mejores soluciones.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900 dark:text-white">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de desarrollo que abarcan todas las necesidades tecnológicas de tu empresa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
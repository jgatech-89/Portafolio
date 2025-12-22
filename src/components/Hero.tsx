import { motion } from 'motion/react';
import { ArrowRight, Code2 } from 'lucide-react';
import logoLight from 'figma:asset/29546634ecba304bb40c4be984f05dd97c18b741.png';
import logoDark from 'figma:asset/96c9aaff0762a0080065cd9c8915e03586abb930.png';
import { useTheme } from '../contexts/ThemeContext';

export function Hero() {
  const { theme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-6">
              <Code2 size={20} />
              <span>Desarrollo de Software Profesional</span>
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900 dark:text-white">
              Transformamos tus ideas en{' '}
              <span className="text-blue-600 dark:text-blue-400">soluciones digitales</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              En JGA TECH, desarrollamos aplicaciones web y móviles innovadoras que impulsan el crecimiento de tu negocio. Expertos en tecnologías modernas y metodologías ágiles.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('proyectos')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Ver Proyectos</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contáctanos
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform -rotate-1">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/30 dark:to-purple-500/30 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg mb-4 flex items-center justify-center">
                        <Code2 className="text-blue-600" size={24} />
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg mb-4"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg mb-4"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg mb-4"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
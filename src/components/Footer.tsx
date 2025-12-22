import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import logoLight from 'figma:asset/1cca4ef853d16962a455340df2450350e7bdd51a.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src={logoLight} 
              alt="JGA TECH" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 dark:text-gray-500">
              Transformando ideas en soluciones digitales innovadoras.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Apps Móviles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
            © 2025 JGA TECH. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}

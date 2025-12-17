import { useState } from 'react';
import {
  BookOpen,
  Users,
  Globe,
  Lightbulb,
  MessageCircle,
  Accessibility,
  FileText,
  Monitor,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

// --- DATOS DE EJEMPLO (Aquí debes cargar tu contenido real del TP3, TP4, etc.) ---

const recursosData = [
  {
    titulo: 'Biblioteca Digital Mundial',
    url: 'https://www.wdl.org/es/',
    destinatarios: 'Alumnos de Secundaria / Docentes',
    utilidad: 'Acceso a fuentes primarias de diferentes culturas.',
    valoracion: 'Excelente para proyectos de historia y diversidad cultural.',
  },
  // ... Agrega aquí los 30 recursos solicitados en el PDF [cite: 33]
];

const sitiosData = [
  {
    titulo: 'Eduteka',
    url: 'https://eduteka.icesi.edu.co/',
    comentario: 'Portal educativo gratuito actualizado mensualmente.',
    ejemplo: 'Uso de sus rúbricas para evaluar competencias informacionales.',
  },
  // ... Agrega aquí los 10+ sitios solicitados [cite: 41]
];

const articulosInnovacion = [
  {
    titulo: 'Gamificación en bibliotecas escolares (2023)',
    fuente: 'Revista Española de Documentación',
    comentario: 'Aborda el uso de escape rooms para fomentar la lectura.',
  },
  // ... Agrega los 5 artículos posteriores a 2022 [cite: 48, 49]
];

// --- COMPONENTES UI ---

const SectionTitle = ({ children, icon: Icon }) => (
  <div className='flex items-center gap-3 mb-8 border-b-2 border-teal-100 pb-2'>
    {Icon && <Icon className='text-blue-900 w-8 h-8' />}
    <h2 className='text-3xl font-bold text-blue-900'>{children}</h2>
  </div>
);

const Card = ({ children, className = '' }) => (
  <div
    className={`bg-white rounded-xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-shadow ${className}`}
  >
    {children}
  </div>
);

const NavItem = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className='block px-4 py-2 text-slate-600 hover:text-blue-900 hover:bg-teal-50 rounded-md transition-colors font-medium'
  >
    {label}
  </a>
);

// --- APP PRINCIPAL ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-slate-50 font-sans text-slate-800'>
      {/* 2.1 ENCABEZADO FIJO [cite: 10] */}
      <header className='fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex items-center gap-2'>
              <div className='bg-blue-900 p-2 rounded-lg'>
                <BookOpen className='text-teal-400 w-6 h-6' />
              </div>
              <span className='text-xl font-bold text-blue-900 tracking-tight'>
                Multialfabetizaciones BE
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className='hidden lg:flex space-x-1'>
              <NavItem href='#propuesta' label='Propuesta' />
              <NavItem href='#recursos' label='Recursos' />
              <NavItem href='#aprendizaje' label='Aprendizaje' />
              <NavItem href='#sitios' label='Sitios' />
              <NavItem href='#articulos' label='Artículos' />
              <NavItem href='#poster' label='Póster' />
              <NavItem href='#innovacion' label='Innovación' />
            </nav>

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden p-2 text-slate-600'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className='lg:hidden bg-white border-t border-slate-100 pb-4 shadow-lg'>
            <nav className='flex flex-col p-4 gap-2'>
              <NavItem
                href='#propuesta'
                label='Propuesta de Alfabetización'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#recursos'
                label='Recursos Digitales'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#aprendizaje'
                label='Aprendizaje Significativo'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#sitios'
                label='Sitios Recomendados'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#articulos'
                label='Artículos y Prensa'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#poster'
                label='Póster Tecnologías'
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href='#innovacion'
                label='Innovación'
                onClick={() => setIsMenuOpen(false)}
              />
            </nav>
          </div>
        )}
      </header>

      <main className='pt-20'>
        {/* HERO SECTION [cite: 11] */}
        <section className='relative bg-gradient-to-br from-blue-900 to-blue-800 text-white py-24 px-4 overflow-hidden'>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className='max-w-5xl mx-auto text-center relative z-10'>
            <h1 className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight'>
              Transformando la Biblioteca Escolar <br />
              <span className='text-teal-400'>
                en un Hub de Multialfabetización
              </span>
            </h1>
            <p className='text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed'>
              Un espacio donde la información se convierte en conocimiento. Como
              profesionales de la información, impulsamos competencias
              digitales, mediáticas e informacionales para el siglo XXI.
            </p>
            <a
              href='#propuesta'
              className='inline-block bg-teal-500 text-blue-900 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-teal-400 transform hover:-translate-y-1 transition-all'
            >
              Explorar Propuesta Formativa
            </a>
          </div>
        </section>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24'>
          {/* 2.3 PROPUESTA DE ALFABETIZACIÓN (Ex TP4) [cite: 23] */}
          <section id='propuesta' className='scroll-mt-24'>
            <SectionTitle icon={Lightbulb}>
              Propuesta de Alfabetización: Programa IA
            </SectionTitle>
            <Card className='bg-slate-50 border-l-4 border-teal-500'>
              <div className='prose max-w-none text-slate-700'>
                <h3 className='text-2xl font-bold mb-4'>
                  Programa Formativo en Alfabetización Informacional
                </h3>
                <p className='mb-4 font-medium text-lg'>
                  Objetivo: Desarrollar competencias críticas en el uso de
                  Inteligencia Artificial.
                </p>
                <div className='p-4 bg-white rounded border border-slate-200 mb-4'>
                  {/* Aquí insertarías el contenido limpio de tu TP4 */}
                  <p className='italic text-slate-500'>
                    [Espacio para insertar el desarrollo del Programa Formativo:
                    Fundamentación, Objetivos, Actividades y Evaluación.
                    Recuerda eliminar consignas de TP.]
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* 2.4 RECURSOS (Ex TP3) [cite: 33] */}
          <section id='recursos' className='scroll-mt-24'>
            <SectionTitle icon={Monitor}>
              Recursos Educativos Seleccionados
            </SectionTitle>
            <p className='mb-6 text-slate-600'>
              Una curaduría de 30 recursos electrónicos esenciales para la
              biblioteca escolar moderna.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {recursosData.map((rec, idx) => (
                <Card key={idx} className='flex flex-col h-full'>
                  <h4 className='font-bold text-lg text-blue-900 mb-2'>
                    {rec.titulo}
                  </h4>
                  <a
                    href={rec.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-teal-600 text-sm mb-3 flex items-center hover:underline'
                  >
                    Visitar recurso <ExternalLink className='w-3 h-3 ml-1' />
                  </a>
                  <div className='text-sm space-y-2 flex-grow'>
                    <p>
                      <span className='font-semibold text-slate-700'>
                        Destinatarios:
                      </span>{' '}
                      {rec.destinatarios}
                    </p>
                    <p>
                      <span className='font-semibold text-slate-700'>
                        Utilidad:
                      </span>{' '}
                      {rec.utilidad}
                    </p>
                  </div>
                  <div className='mt-4 pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-xl'>
                    <p className='text-xs text-slate-500 italic'>
                      " {rec.valoracion} "
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* 2.5 APRENDIZAJE SIGNIFICATIVO (Ex TP1) [cite: 44] */}
          <section id='aprendizaje' className='scroll-mt-24'>
            <SectionTitle icon={Users}>Aprendizaje Significativo</SectionTitle>
            <div className='grid md:grid-cols-2 gap-8'>
              <Card>
                <h3 className='font-bold text-xl mb-4 text-center'>
                  Mapa Conceptual
                </h3>
                <div className='aspect-video bg-slate-200 rounded flex items-center justify-center relative overflow-hidden group'>
                  {/* Reemplazar src con tu imagen del mapa */}
                  <img
                    src='/api/placeholder/600/400'
                    alt='Mapa Conceptual Multialfabetización'
                    className='object-cover w-full h-full'
                  />
                  <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                    <span className='text-white font-medium'>
                      Ver Mapa Completo
                    </span>
                  </div>
                </div>
              </Card>
              <Card>
                <h3 className='font-bold text-xl mb-4 text-center'>
                  Presentación Interactiva
                </h3>
                <div className='aspect-video bg-slate-800 rounded flex items-center justify-center'>
                  {/* Reemplazar con el embed code de Powtoon */}
                  <p className='text-slate-400 text-sm p-4 text-center'>
                    [Insertar aquí Iframe de Powtoon/Genially]
                    <br />
                    Recuerda verificar que el enlace sea público.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* 2.6 SITIOS RECOMENDADOS [cite: 40] */}
          <section id='sitios' className='scroll-mt-24'>
            <SectionTitle icon={Globe}>
              Sitios de Interés en Multialfabetización
            </SectionTitle>
            <div className='space-y-4'>
              {sitiosData.map((sitio, idx) => (
                <div
                  key={idx}
                  className='bg-white p-6 rounded-lg border-l-4 border-blue-900 shadow-sm hover:shadow-md transition-shadow'
                >
                  <div className='flex flex-col md:flex-row md:justify-between md:items-start'>
                    <div>
                      <h4 className='font-bold text-lg text-blue-900'>
                        <a
                          href={sitio.url}
                          className='hover:text-teal-600 flex items-center gap-2'
                        >
                          {sitio.titulo} <ExternalLink className='w-4 h-4' />
                        </a>
                      </h4>
                      <p className='text-slate-600 mt-1'>{sitio.comentario}</p>
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-6 bg-teal-50 p-3 rounded text-sm text-teal-800 md:max-w-xs'>
                      <strong>Aplicación en BE:</strong> {sitio.ejemplo}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2.7 ARTÍCULOS Y PRENSA (Ex TP2) [cite: 42, 43] */}
          <section id='articulos' className='scroll-mt-24'>
            <SectionTitle icon={FileText}>Artículos y Reflexiones</SectionTitle>

            <div className='mb-12'>
              <h3 className='text-xl font-bold text-slate-700 mb-4 border-l-4 border-teal-400 pl-3'>
                Multialfabetización como Derecho
              </h3>
              <div className='grid gap-6 md:grid-cols-2'>
                {/* Ejemplo de artículo académico */}
                <Card>
                  <p className='font-serif text-sm text-slate-800 mb-3 bg-slate-100 p-2 rounded'>
                    Area Moreira, M. (2020).{' '}
                    <em>La alfabetización en la sociedad digital</em>. Revista
                    Comunicar.
                  </p>
                  <p className='text-slate-600 text-sm'>
                    <strong>Comentario:</strong> Este texto es fundamental para
                    entender el cambio de paradigma del usuario consumidor al
                    prosumidor...
                  </p>
                </Card>
                {/* Repetir para los 10 artículos requeridos */}
              </div>
            </div>

            <div>
              <h3 className='text-xl font-bold text-slate-700 mb-4 border-l-4 border-teal-400 pl-3'>
                Columna de Opinión (Producción Propia)
              </h3>
              <Card className='bg-gradient-to-r from-slate-50 to-white'>
                <article className='prose lg:prose-xl mx-auto'>
                  <h4>El rol ineludible de la biblioteca escolar hoy</h4>
                  <p className='text-slate-500 italic text-sm mb-4'>
                    Por [Tu Nombre]
                  </p>
                  <p>
                    [Aquí insertar el texto de tu TP2 Parte 2. Recuerda que este
                    es tu artículo periodístico. Formátalo con párrafos claros y
                    citas adecuadas si las hubiera.]
                  </p>
                </article>
              </Card>
            </div>
          </section>

          {/* 2.8 NOS PREGUNTAMOS (ENCUESTA) [cite: 45] */}
          <section
            id='preguntas'
            className='scroll-mt-24 bg-blue-50 p-8 rounded-2xl border border-blue-100'
          >
            <div className='flex flex-col md:flex-row items-center gap-8'>
              <div className='flex-1'>
                <div className='flex items-center gap-3 mb-4'>
                  <MessageCircle className='text-teal-500 w-8 h-8' />
                  <h2 className='text-2xl font-bold text-blue-900'>
                    Nos Preguntamos: Estudio de Usuarios
                  </h2>
                </div>
                <p className='text-slate-700 mb-4'>
                  Como parte de un proceso de investigación continua, hemos
                  desarrollado un instrumento para relevar los hábitos
                  informacionales de nuestra comunidad educativa.
                </p>
                <p className='text-sm text-slate-500 mb-6'>
                  Objetivo: Identificar las principales barreras de acceso a la
                  información digital en el ciclo superior.
                </p>
                <a
                  href='LINK_A_TU_GOOGLE_FORM_O_ENCUESTA'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors'
                >
                  Ver Encuesta y Resultados
                </a>
              </div>
              <div className='flex-1 bg-white p-6 rounded-xl shadow-inner text-center'>
                <p className='text-slate-400 italic'>
                  Gráficos o captura de la encuesta
                </p>
              </div>
            </div>
          </section>

          {/* 2.9 PÓSTER [cite: 46, 47] */}
          <section id='poster' className='scroll-mt-24'>
            <SectionTitle icon={Monitor}>
              Póster: Tecnologías Emergentes
            </SectionTitle>
            <div className='w-full bg-slate-900 p-2 rounded-xl shadow-2xl'>
              {/* Aquí incrustar la imagen del póster hecho en Canva/Piktochart */}
              <img
                src='/api/placeholder/1200/800'
                alt='Póster sobre Multialfabetización y Tecnologías'
                className='w-full h-auto rounded-lg'
              />
            </div>
          </section>

          {/* 2.10 INNOVACIÓN [cite: 48, 49] */}
          <section id='innovacion' className='scroll-mt-24'>
            <SectionTitle icon={Lightbulb}>
              Innovación en la Biblioteca Escolar
            </SectionTitle>
            <p className='text-slate-600 mb-6'>
              Tendencias recientes (2022-2025) que están redefiniendo nuestros
              espacios.
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {articulosInnovacion.map((art, idx) => (
                <Card key={idx} className='bg-teal-50 border-teal-100'>
                  <h5 className='font-bold text-blue-900 mb-2'>{art.titulo}</h5>
                  <span className='text-xs font-semibold bg-white px-2 py-1 rounded text-slate-500'>
                    {art.fuente}
                  </span>
                  <p className='text-sm text-slate-700 mt-3 leading-relaxed'>
                    {art.comentario}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* 2.11 ACCESIBILIDAD [cite: 21, 50] */}
          <section id='accesibilidad' className='scroll-mt-24'>
            <SectionTitle icon={Accessibility}>
              Herramientas de Accesibilidad
            </SectionTitle>
            <div className='grid md:grid-cols-3 gap-6 text-center'>
              <Card>
                <div className='text-teal-500 mx-auto mb-3'>
                  <BookOpen size={40} />
                </div>
                <h4 className='font-bold mb-2'>Lectores de Pantalla (NVDA)</h4>
                <p className='text-sm text-slate-600'>
                  Esencial para garantizar el acceso a usuarios con discapacidad
                  visual en los terminales de búsqueda.
                </p>
              </Card>
              <Card>
                <div className='text-teal-500 mx-auto mb-3'>
                  <Monitor size={40} />
                </div>
                <h4 className='font-bold mb-2'>
                  Extensiones de Alto Contraste
                </h4>
                <p className='text-sm text-slate-600'>
                  Herramientas de navegador que permiten adaptar la interfaz de
                  los catálogos en línea.
                </p>
              </Card>
              <Card>
                <div className='text-teal-500 mx-auto mb-3'>
                  <Accessibility size={40} />
                </div>
                <h4 className='font-bold mb-2'>Señalética Aumentada</h4>
                <p className='text-sm text-slate-600'>
                  Sistemas de códigos QR con audio-guías integrados en las
                  estanterías físicas.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* 2.3 FOOTER [cite: 53, 58] */}
      <footer className='bg-blue-900 text-blue-100 py-12 mt-20'>
        <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8'>
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>
              Bibliotecario Digital
            </h3>
            <p className='mb-2'>
              Desarrollado por:{' '}
              <span className='text-white font-semibold'>
                [Tu Nombre Completo]
              </span>
            </p>
            <p className='text-sm text-blue-300'>
              Universidad Nacional de Mar del Plata - Depto. Ciencia de la
              Información
            </p>
            <p className='text-sm text-blue-300 mt-1'>
              Cátedra: Bibliotecario Escolar a Distancia
            </p>
          </div>
          <div className='text-sm text-blue-300 border-t md:border-t-0 md:border-l border-blue-800 md:pl-8 pt-4 md:pt-0'>
            <p className='font-semibold text-white mb-2'>Aviso Legal y Ético</p>
            <p className='mb-2'>
              El contenido de este sitio ha sido curado con fines educativos.
              Todas las imágenes y textos citados son propiedad de sus
              respectivos autores.
            </p>
            <p className='italic opacity-75'>
              "El respeto a la propiedad intelectual es la base de la sociedad
              de la información."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { App };

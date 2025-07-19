import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Heart, 
  Shield, 
  Users, 
  Clock,
  Star,
  MapPin,
  Phone,
  ChevronRight,
  Search,
  UserCheck,
  Target,
  Eye,
  Award,
  CheckCircle,
  Home,
  Stethoscope,
  Activity,
  Moon,
  Utensils,
  Instagram,
  Linkedin,
  Mail
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { user } = useAuth();

  const aboutSections = [
    {
      title: 'Nossa Missão',
      content: 'Proporcionar cuidados especializados e humanizados para idosos, garantindo qualidade de vida, dignidade e bem-estar através de profissionais qualificados e comprometidos com a excelência no atendimento.'
    },
    {
      title: 'Nossa Visão',
      content: 'Ser reconhecida como a principal referência em cuidados domiciliares para idosos, transformando vidas através do cuidado personalizado e inovador, sempre priorizando o amor e o respeito.'
    },
    {
      title: 'Nossos Valores',
      content: [
        'Empatia e compaixão em cada atendimento',
        'Segurança e confiabilidade em todos os processos',
        'Inovação constante em métodos de cuidado',
        'Transparência e ética profissional',
        'Respeito à dignidade e individualidade',
        'Excelência técnica e humana'
      ]
    }
  ];

  const coreValues = [
    {
      icon: <Heart size={32} />,
      title: 'Compaixão',
      description: 'Cuidamos com amor e dedicação, entendendo as necessidades únicas de cada pessoa.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Confiança',
      description: 'Construímos relacionamentos sólidos baseados na transparência e segurança.'
    },
    {
      icon: <Award size={32} />,
      title: 'Excelência',
      description: 'Mantemos os mais altos padrões de qualidade em todos os nossos serviços.'
    },
    {
      icon: <Users size={32} />,
      title: 'Responsabilidade',
      description: 'Assumimos o compromisso de cuidar com responsabilidade e profissionalismo.'
    }
  ];

  const services = [
    {
      icon: <Home size={24} />,
      title: 'Cuidado Domiciliar',
      description: 'Assistência completa no conforto do lar, com profissionais especializados.'
    },
    {
      icon: <Stethoscope size={24} />,
      title: 'Acompanhamento Médico',
      description: 'Suporte em consultas e procedimentos médicos com acompanhamento especializado.'
    },
    {
      icon: <UserCheck size={24} />,
      title: 'Cuidados Especializados',
      description: 'Atendimento específico para condições como Alzheimer, Parkinson e outras.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Plantão 24 Horas',
      description: 'Cuidado contínuo com profissionais disponíveis 24 horas por dia.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Atividades Terapêuticas',
      description: 'Fisioterapia, terapia ocupacional e atividades de estímulo cognitivo.'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Cuidados Nutricionais',
      description: 'Acompanhamento nutricional e preparo de refeições balanceadas.'
    }
  ];

  const whyChooseUs = [
    'Cuidadores Certificados e Experientes',
    'Equipe Multidisciplinar Qualificada',
    'Monitoramento 24h Contínuo',
    'Flexibilidade de Horários e Serviços',
    'Planos Personalizados',
    'Suporte Familiar Completo'
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'A equipe é maravilhosa! Cuidaram da minha mãe com tanto carinho que ela se sentia em família. Recomendo de coração.'
    },
    {
      name: 'João Silva',
      photo: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Minha mãe adorou o cuidado recebido. Os profissionais são atenciosos e muito competentes. Excelente serviço!'
    },
    {
      name: 'Ana Costa',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Profissionalismo e humanização em cada atendimento. Meu pai se sente seguro e bem cuidado. Muito obrigada!'
    },
    {
      name: 'Carlos Oliveira',
      photo: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Serviço excepcional! A cuidadora se tornou parte da família. Qualidade e confiança em cada detalhe.'
    },
    {
      name: 'Lucia Ferreira',
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Encontrei na Vitalongis o cuidado que minha família precisava. Profissionais dedicados e muito carinhosos.'
    },
    {
      name: 'Roberto Lima',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      rating: 5,
      comment: 'Atendimento personalizado e de alta qualidade. Minha esposa está muito bem cuidada. Recomendo sem hesitar!'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Cuidadora com idosa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Cuidado Especializado para Quem Você <span className="text-blue-300">Ama</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Proporcionamos cuidados personalizados e carinhosos para idosos, garantindo dignidade, 
            segurança e bem-estar em todos os momentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setCurrentPage('search')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Solicitar Cuidador
            </button>
            <button
              onClick={() => {
                document.getElementById('sobre-nos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border-2 border-gray-300 text-white hover:bg-white hover:text-gray-900 rounded-lg font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

{/* Sobre Nós Section (Ajustado conforme imagem) */}
<section id="sobre-nos" className="py-20 bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        Conectamos famílias e pessoas idosas a fornecedores especializados, possibilitando a criação de Redes de Cuidado
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
      {/* Missão + Visão (coluna esquerda) */}
      <div className="space-y-8">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Nossa Missão</h3>
          <p className="text-white/90">
            Facilitar o acesso a cuidadores de qualidade para pessoas idosas, conectando famílias a profissionais qualificados e comprometidos, garantindo bem-estar, segurança e dignidade em cada momento da jornada do envelhecimento.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Nossa Visão</h3>
          <p className="text-white/90">
            Ser a plataforma de referência no Brasil para serviços de cuidados a pessoas idosas, transformando a maneira como as famílias constroem as suas Redes de Cuidado e administram o apoio a seus entes queridos.
          </p>
        </div>
      </div>

      {/* Valores (coluna direita) */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Nossos Valores</h3>
        <ul className="list-disc list-inside space-y-3 text-white/90">
          <li>
            <strong>Empatia e Respeito:</strong> colocamos as necessidades das pessoas idosas e suas famílias em primeiro lugar
          </li>
          <li>
            <strong>Qualidade e Segurança:</strong> Garantimos os mais altos padrões na seleção dos prestadores da rede
          </li>
          <li>
            <strong>Transparência e Confiança:</strong> Construímos relações baseadas em comunicação clara e honesta
          </li>
          <li>
            <strong>Inovação e Cuidado:</strong> Utilizamos tecnologia para melhorar a experiência do cuidado
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



      {/* Nossos Valores Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Serviços Section */}
      {/* Nossos Serviços Section */}
<section className="py-20 bg-white dark:bg-gray-900" id="servicos">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Nossos Serviços
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Oferecemos uma gama completa de serviços de cuidados especializados, adaptados às necessidades específicas de cada pessoa.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    {/* Por que escolher nossos serviços */}
    <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Por que escolher nossos serviços?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Cuidadores Certificados:</strong> Todos os nossos profissionais são devidamente capacitados e certificados.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Equipe Multidisciplinar:</strong> Enfermeiros, fisioterapeutas, psicólogos e cuidadores especializados.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Cuidado Humanizado:</strong> Tratamento digno e respeitoso, priorizando o bem-estar emocional.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                <strong>Flexibilidade:</strong> Horários adaptáveis às necessidades da família e do idoso.
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
<img
  src="https://img.freepik.com/fotos-gratis/cena-realista-com-cuidados-de-idosos-para-pessoas-idosas_23-2151231510.jpg?"
  alt="Cuidadora e paciente sorrindo"
  className="rounded-xl w-full max-w-md mx-auto"
/>

        </div>
      </div>
    </div>
  </div>
</section>

{/* Avaliações Section */}
<section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Avaliações dos Nossos Clientes
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          name: 'Maria Santos',
          photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'A equipe é maravilhosa! Cuidaram da minha mãe com tanto carinho que ela se sentia em família. Recomendo de coração.'
        },
        {
          name: 'João Silva',
          photo: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'Minha mãe adorou o cuidado recebido. Os profissionais são atenciosos e muito competentes. Excelente serviço!'
        },
        {
          name: 'Ana Costa',
          photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'Profissionalismo e humanização em cada atendimento. Meu pai se sente seguro e bem cuidado. Muito obrigada!'
        },
        {
          name: 'Carlos Oliveira',
          photo: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'Serviço excepcional! A cuidadora se tornou parte da família. Qualidade e confiança em cada detalhe.'
        },
        {
          name: 'Lucia Ferreira',
          photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'Encontrei na Vitalogis o cuidado que minha família precisava. Profissionais dedicados e muito carinhosos.'
        },
        {
          name: 'Roberto Lima',
          photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
          rating: 5,
          comment: 'Atendimento personalizado e de alta qualidade. Minha esposa está muito bem cuidada. Recomendo sem hesitar!'
        }
      ].map((testimonial, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="flex items-center mb-4">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </div>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.784 1.402 8.174L12 18.897l-7.336 3.87 1.402-8.174L.132 9.209l8.2-1.191z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic">
            "{testimonial.comment}"
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Logo */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Heart size={32} className="text-blue-600" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Vitalogis</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contato
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={16} className="text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">contato@Vitalogis.com.br</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={16} className="text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">(21) 3456-7890</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              ©2025 Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
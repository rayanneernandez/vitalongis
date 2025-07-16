import React from 'react';
import { Heart, Shield, Users, Award, CheckCircle, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart size={24} />,
      title: 'Cuidado Humano',
      description: 'Acreditamos que o cuidado vai além da técnica - é sobre conexão, empatia e respeito pela dignidade humana.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Segurança Primeiro',
      description: 'Todos os nossos profissionais passam por rigorosa verificação de antecedentes e capacitação contínua.'
    },
    {
      icon: <Users size={24} />,
      title: 'Comunidade',
      description: 'Construímos uma rede de apoio que conecta famílias, cuidadores e profissionais de saúde.'
    },
    {
      icon: <Award size={24} />,
      title: 'Excelência',
      description: 'Mantemos os mais altos padrões de qualidade em todos os nossos serviços e relacionamentos.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Cuidadores Verificados' },
    { number: '1000+', label: 'Famílias Atendidas' },
    { number: '50+', label: 'Cidades Cobertas' },
    { number: '4.9', label: 'Avaliação Média' }
  ];

  const team = [
    {
      name: 'Dra. Maria Santos',
      role: 'Fundadora e CEO',
      bio: 'Médica geriatra com 20 anos de experiência em cuidados com idosos.',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'João Silva',
      role: 'Diretor de Operações',
      bio: 'Especialista em gestão de serviços de saúde domiciliar.',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora de Cuidadores',
      bio: 'Enfermeira com vasta experiência em treinamento e capacitação.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossa <span className="text-blue-200">Missão</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transformar a vida de famílias e idosos através de cuidados excepcionais, 
              conectando corações e construindo confiança em cada interação.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  A VitalCare nasceu da necessidade pessoal de nossa fundadora, Dra. Maria Santos, 
                  que enfrentou dificuldades para encontrar cuidadores qualificados para seus próprios pais.
                </p>
                <p>
                  Após anos de experiência como médica geriatra, ela percebeu que milhares de famílias 
                  compartilhavam da mesma angústia: encontrar profissionais competentes e confiáveis 
                  para cuidar de seus entes queridos.
                </p>
                <p>
                  Em 2020, fundamos a VitalCare com o objetivo de criar uma ponte segura e confiável 
                  entre famílias e cuidadores profissionais, garantindo que cada idoso receba o 
                  cuidado que merece, no conforto de sua própria casa.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7551658/pexels-photo-7551658.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Cuidadora com idosa"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Os princípios que guiam nossa missão e definem quem somos como empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nosso Impacto
            </h2>
            <p className="text-xl text-blue-100">
              Números que refletem nossa dedicação e compromisso
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Conheça as pessoas dedicadas que tornam nossa missão possível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Garantia de Qualidade
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nosso compromisso com a excelência em cada etapa do processo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle size={24} className="text-green-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Verificação Rigorosa
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Todos os cuidadores passam por verificação de antecedentes criminais, 
                referências profissionais e avaliação de competências.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star size={24} className="text-yellow-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Treinamento Contínuo
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Oferecemos programas de capacitação e atualização constante para 
                manter nossos profissionais sempre preparados.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Shield size={24} className="text-blue-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Suporte 24/7
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa equipe está sempre disponível para apoiar famílias e 
                cuidadores em qualquer situação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Faça Parte da Nossa Família
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de famílias que já confiam na VitalCare para 
            cuidar de quem mais amam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Encontrar Cuidador
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Trabalhar Conosco
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
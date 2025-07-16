import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general' as 'general' | 'caregiver' | 'family' | 'partnership'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Telefone',
      details: ['(11) 3456-7890', '(21) 2345-6789'],
      description: 'Atendimento de segunda a sexta, 8h às 18h'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['contato@vitalongis.com.br', 'suporte@vitalongis.com.br'],
      description: 'Respondemos em até 24 horas'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Endereço',
      details: ['Av. Paulista, 1000 - Conjunto 501', 'São Paulo, SP - 01310-100'],
      description: 'Visite nosso escritório'
    },
    {
      icon: <Clock size={24} />,
      title: 'Horário',
      details: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h'],
      description: 'Emergências: 24h por dia'
    }
  ];

  const faqItems = [
    {
      question: 'Como funciona a verificação dos cuidadores?',
      answer: 'Todos os cuidadores passam por verificação de antecedentes criminais, checagem de referências profissionais, avaliação de competências técnicas e entrevista pessoal com nossa equipe.'
    },
    {
      question: 'Qual é o custo dos serviços?',
      answer: 'Os valores variam conforme a especialidade, experiência e localização do cuidador. Oferecemos opções para diferentes orçamentos, com transparência total nos custos.'
    },
    {
      question: 'Como posso me cadastrar como cuidador?',
      answer: 'Basta criar uma conta escolhendo a opção "Cuidador" no cadastro. Você passará por nosso processo de verificação e poderá começar a atender famílias.'
    },
    {
      question: 'Vocês oferecem atendimento em emergências?',
      answer: 'Sim, temos uma equipe de plantão 24h para situações de emergência. Entre em contato pelo telefone de emergência para atendimento imediato.'
    },
    {
      question: 'Como é feito o pagamento?',
      answer: 'Oferecemos múltiplas formas de pagamento: cartão de crédito, débito, PIX e transferência bancária. O pagamento é processado de forma segura através da plataforma.'
    }
  ];

  const subjectOptions = [
    { value: 'general', label: 'Informações Gerais' },
    { value: 'caregiver', label: 'Sou um Cuidador' },
    { value: 'family', label: 'Preciso de um Cuidador' },
    { value: 'partnership', label: 'Parcerias' },
    { value: 'complaint', label: 'Reclamação' },
    { value: 'suggestion', label: 'Sugestão' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco para esclarecer dúvidas, 
            obter suporte ou conhecer melhor nossos serviços.
          </p>
        </div>
      </div>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-900 dark:text-white font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Envie uma Mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Assunto
                    </label>
                    <select
                      id="subject"
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      {subjectOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Descreva sua dúvida ou solicitação..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-green-700 dark:text-green-300">
                      Mensagem enviada com sucesso! Retornaremos em breve.
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <AlertCircle size={20} className="text-red-500" />
                    <span className="text-red-700 dark:text-red-300">
                      Erro ao enviar mensagem. Tente novamente.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <details
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  >
                    <summary className="px-6 py-4 cursor-pointer text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      {faq.question}
                    </summary>
                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Visite nosso escritório ou entre em contato para agendar uma reunião.
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Mapa interativo estará disponível em breve
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
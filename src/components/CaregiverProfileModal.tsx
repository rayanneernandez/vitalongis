import React from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  Phone, 
  Mail, 
  Calendar,
  Award,
  Heart,
  MessageCircle,
  CheckCircle,
  Globe,
  Briefcase,
  GraduationCap
} from 'lucide-react';

interface Caregiver {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  reviews: number;
  location: string;
  specialties: string[];
  experience: string;
  hourlyRate: string;
  availability: string;
  verified: boolean;
  description: string;
  languages: string[];
  phone?: string;
  email?: string;
  education?: string[];
  certifications?: string[];
  workHistory?: Array<{
    position: string;
    company: string;
    period: string;
    description: string;
  }>;
  services?: string[];
  personalInfo?: {
    age: number;
    gender: string;
    smoker: boolean;
    hasTransport: boolean;
    petFriendly: boolean;
  };
  schedule?: {
    [key: string]: string[];
  };
  testimonials?: Array<{
    name: string;
    rating: number;
    comment: string;
    date: string;
  }>;
}

interface CaregiverProfileModalProps {
  caregiver: Caregiver;
  isOpen: boolean;
  onClose: () => void;
}

const CaregiverProfileModal: React.FC<CaregiverProfileModalProps> = ({ 
  caregiver, 
  isOpen, 
  onClose 
}) => {
  if (!isOpen) return null;

  const defaultSchedule = {
    'Segunda': ['08:00', '18:00'],
    'Terça': ['08:00', '18:00'],
    'Quarta': ['08:00', '18:00'],
    'Quinta': ['08:00', '18:00'],
    'Sexta': ['08:00', '18:00'],
    'Sábado': ['08:00', '14:00'],
    'Domingo': ['Indisponível']
  };

  const defaultTestimonials = [
    {
      name: 'Ana Maria Santos',
      rating: 5,
      comment: 'Excelente profissional! Cuidou da minha mãe com muito carinho e dedicação.',
      date: '2024-01-15'
    },
    {
      name: 'Carlos Silva',
      rating: 5,
      comment: 'Muito responsável e atenciosa. Recomendo sem hesitação.',
      date: '2024-01-10'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          {/* Header */}
          <div className="relative px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <img
                src={caregiver.avatar}
                alt={caregiver.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {caregiver.name}
                  </h2>
                  {caregiver.verified && (
                    <Shield size={20} className="text-blue-500" />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">
                      {caregiver.rating} ({caregiver.reviews} avaliações)
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                  <MapPin size={16} className="mr-1" />
                  {caregiver.location}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[70vh] overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* Quick Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-blue-600" />
                    <span className="font-medium text-gray-900 dark:text-white">Experiência</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{caregiver.experience}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={20} className="text-green-600" />
                    <span className="font-medium text-gray-900 dark:text-white">Disponibilidade</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{caregiver.availability}</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={20} className="text-purple-600" />
                    <span className="font-medium text-gray-900 dark:text-white">Valor/Hora</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">{caregiver.hourlyRate}</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Sobre o Profissional
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caregiver.description}
                </p>
              </div>

              {/* Specialties */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Especialidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caregiver.specialties.map(specialty => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Informações Pessoais
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Idade: 35 anos
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Gênero: Feminino
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Não fumante
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Possui transporte próprio
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Aceita animais de estimação
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Idiomas: {caregiver.languages.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Formação e Certificações
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Técnico em Enfermagem
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        SENAC São Paulo - 2018
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-green-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Certificação em Cuidados Geriátricos
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Hospital das Clínicas - 2020
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-purple-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Curso de Primeiros Socorros
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Cruz Vermelha - 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Horários Disponíveis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(defaultSchedule).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="font-medium text-gray-900 dark:text-white">{day}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {Array.isArray(hours) && hours.length > 1 ? `${hours[0]} - ${hours[1]}` : hours[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Avaliações Recentes
                </h3>
                <div className="space-y-4">
                  {defaultTestimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </span>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {testimonial.comment}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
                <Heart size={16} />
                Favoritar
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                <MessageCircle size={16} />
                Enviar Mensagem
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                <Calendar size={16} />
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaregiverProfileModal;
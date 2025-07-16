import React, { useState } from 'react';
import CaregiverProfileModal from './CaregiverProfileModal';
import { Search, MapPin, Star, Clock, Shield, Filter, Heart, MessageCircle } from 'lucide-react';

interface SearchPageProps {
  setCurrentPage: (page: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [availability, setAvailability] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCaregiver, setSelectedCaregiver] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const caregivers = [
    {
      id: 1,
      name: 'Maria Silva',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      rating: 4.9,
      reviews: 87,
      location: 'Vila Madalena, SP',
      specialties: ['Cuidados Gerais', 'Alzheimer', 'Mobilidade'],
      experience: '8 anos',
      hourlyRate: 'R$ 25/hora',
      availability: 'Disponível hoje',
      verified: true,
      description: 'Cuidadora experiente especializada em cuidados com idosos portadores de Alzheimer. Formação em enfermagem e cursos de especialização.',
      languages: ['Português', 'Espanhol'],
      phone: '(11) 99999-1234',
      email: 'maria.silva@email.com',
      education: ['Técnico em Enfermagem - SENAC (2015)', 'Especialização em Geriatria - USP (2018)'],
      certifications: ['Primeiros Socorros', 'Cuidados Paliativos', 'Alzheimer Care'],
      workHistory: [
        {
          position: 'Cuidadora Senior',
          company: 'Casa de Repouso Bem Viver',
          period: '2020 - Atual',
          description: 'Responsável pelo cuidado de 8 idosos com diferentes necessidades.'
        }
      ],
      services: ['Higiene pessoal', 'Administração de medicamentos', 'Companhia', 'Fisioterapia básica'],
      personalInfo: {
        age: 45,
        gender: 'Feminino',
        smoker: false,
        hasTransport: true,
        petFriendly: true
      }
    },
    {
      id: 2,
      name: 'João Santos',
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      rating: 4.8,
      reviews: 64,
      location: 'Copacabana, RJ',
      specialties: ['Fisioterapia', 'Reabilitação', 'Cuidados Pós-Cirúrgicos'],
      experience: '6 anos',
      hourlyRate: 'R$ 30/hora',
      availability: 'Disponível amanhã',
      verified: true,
      description: 'Fisioterapeuta especializado em reabilitação de idosos. Atendimento domiciliar com equipamentos profissionais.',
      languages: ['Português', 'Inglês'],
      phone: '(21) 98888-5678',
      email: 'joao.santos@email.com',
      education: ['Fisioterapia - UFRJ (2016)', 'Pós-graduação em Geriatria - PUC (2019)'],
      certifications: ['Fisioterapia Respiratória', 'RPG', 'Pilates Clínico'],
      personalInfo: {
        age: 32,
        gender: 'Masculino',
        smoker: false,
        hasTransport: true,
        petFriendly: false
      }
    },
    {
      id: 3,
      name: 'Ana Costa',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      rating: 4.7,
      reviews: 52,
      location: 'Bela Vista, SP',
      specialties: ['Enfermagem', 'Medicação', 'Cuidados Intensivos'],
      experience: '10 anos',
      hourlyRate: 'R$ 35/hora',
      availability: 'Disponível hoje',
      verified: true,
      description: 'Enfermeira com vasta experiência em cuidados domiciliares. Especialista em administração de medicamentos e cuidados intensivos.',
      languages: ['Português'],
      phone: '(11) 97777-9012',
      email: 'ana.costa@email.com',
      education: ['Enfermagem - UNIFESP (2012)', 'Especialização em UTI - Einstein (2015)'],
      certifications: ['ACLS', 'BLS', 'Cuidados Intensivos'],
      personalInfo: {
        age: 38,
        gender: 'Feminino',
        smoker: false,
        hasTransport: false,
        petFriendly: true
      }
    },
    {
      id: 4,
      name: 'Pedro Oliveira',
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      rating: 4.6,
      reviews: 41,
      location: 'Ipanema, RJ',
      specialties: ['Companhia', 'Atividades Lúdicas', 'Passeios'],
      experience: '4 anos',
      hourlyRate: 'R$ 20/hora',
      availability: 'Disponível esta semana',
      verified: true,
      description: 'Cuidador focado em proporcionar companhia e atividades recreativas para idosos. Experiência com atividades físicas leves.',
      languages: ['Português', 'Inglês', 'Francês'],
      phone: '(21) 96666-3456',
      email: 'pedro.oliveira@email.com',
      education: ['Educação Física - UFF (2018)', 'Curso de Cuidador de Idosos - SENAI (2019)'],
      certifications: ['Personal Trainer', 'Recreação para Idosos'],
      personalInfo: {
        age: 28,
        gender: 'Masculino',
        smoker: false,
        hasTransport: true,
        petFriendly: true
      }
    }
  ];

  const specialtyOptions = [
    'Cuidados Gerais',
    'Alzheimer',
    'Mobilidade',
    'Fisioterapia',
    'Enfermagem',
    'Companhia',
    'Medicação',
    'Reabilitação'
  ];

  const filteredCaregivers = caregivers.filter(caregiver => {
    const matchesSearch = caregiver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         caregiver.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = location === '' || caregiver.location.toLowerCase().includes(location.toLowerCase());
    const matchesSpecialty = specialty === '' || caregiver.specialties.includes(specialty);
    
    return matchesSearch && matchesLocation && matchesSpecialty;
  });

  const handleViewProfile = (caregiver: any) => {
    setSelectedCaregiver(caregiver);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Encontre o Cuidador Ideal
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Conecte-se com cuidadores qualificados e verificados próximos a você.
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Location Input */}
            <div className="relative flex-1">
              <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Localização..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full lg:w-48 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Todas as especialidades</option>
                {specialtyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Filter size={20} />
              Filtros
            </button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Disponibilidade
                  </label>
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Qualquer horário</option>
                    <option value="today">Disponível hoje</option>
                    <option value="tomorrow">Disponível amanhã</option>
                    <option value="week">Esta semana</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Faixa de Preço
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="">Qualquer preço</option>
                    <option value="low">Até R$ 25/hora</option>
                    <option value="medium">R$ 25-35/hora</option>
                    <option value="high">Acima de R$ 35/hora</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Avaliação
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option value="">Qualquer avaliação</option>
                    <option value="high">4.5+ estrelas</option>
                    <option value="very-high">4.8+ estrelas</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            {filteredCaregivers.length} cuidadores encontrados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCaregivers.map(caregiver => (
            <div
              key={caregiver.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src={caregiver.avatar}
                      alt={caregiver.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {caregiver.name}
                        </h3>
                        {caregiver.verified && (
                          <Shield size={16} className="text-blue-500" />
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
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart size={20} />
                  </button>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <MapPin size={16} className="mr-2 text-gray-400" />
                    {caregiver.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    {caregiver.availability}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caregiver.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {caregiver.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {caregiver.experience} experiência
                    </span>
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {caregiver.hourlyRate}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm">
                      <MessageCircle size={16} />
                      Mensagem
                    </button>
                    <button 
                      onClick={() => handleViewProfile(caregiver)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Ver Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCaregivers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Nenhum cuidador encontrado
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Tente ajustar seus filtros ou expandir sua área de busca.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setLocation('');
                setSpecialty('');
                setAvailability('');
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>

      {/* Profile Modal */}
      {selectedCaregiver && (
        <CaregiverProfileModal
          caregiver={selectedCaregiver}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCaregiver(null);
          }}
        />
      )}
    </div>
  );
};

export default SearchPage;
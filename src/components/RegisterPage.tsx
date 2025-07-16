import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Eye, 
  EyeOff, 
  Heart, 
  Mail, 
  Lock, 
  User, 
  MapPin, 
  AlertCircle, 
  CheckCircle,
  Phone,
  Calendar,
  FileText,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

interface RegisterPageProps {
  setCurrentPage: (page: string) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    // Dados básicos
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'family' as 'caregiver' | 'family',
    phone: '',
    location: '',
    
    // Dados específicos do cuidador
    specialties: [] as string[],
    experience: '',
    education: '',
    certifications: [] as string[],
    hourlyRate: '',
    availability: [] as string[],
    hasTransport: false,
    acceptsPets: false,
    languages: [] as string[],
    workHistory: '',
    personalDescription: '',
    
    // Dados específicos da família/idoso
    elderName: '',
    elderAge: '',
    elderGender: '',
    elderConditions: [] as string[],
    careNeeds: [] as string[],
    preferredSchedule: [] as string[],
    budget: '',
    urgency: '',
    additionalInfo: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const { register, isLoading } = useAuth();

  const specialtyOptions = [
    'Cuidados Gerais',
    'Alzheimer/Demência',
    'Mobilidade Reduzida',
    'Fisioterapia',
    'Enfermagem',
    'Companhia',
    'Administração de Medicamentos',
    'Reabilitação',
    'Cuidados Paliativos',
    'Atividades Físicas',
    'Nutrição',
    'Higiene Pessoal'
  ];

  const conditionOptions = [
    'Alzheimer',
    'Demência',
    'Parkinson',
    'Diabetes',
    'Hipertensão',
    'Mobilidade Reduzida',
    'Deficiência Visual',
    'Deficiência Auditiva',
    'Depressão',
    'Ansiedade',
    'Problemas Cardíacos',
    'Artrite/Artrose'
  ];

  const careNeedsOptions = [
    'Higiene Pessoal',
    'Alimentação',
    'Medicamentos',
    'Mobilidade',
    'Companhia',
    'Atividades Recreativas',
    'Fisioterapia',
    'Transporte',
    'Cuidados Médicos',
    'Limpeza Doméstica'
  ];

  const availabilityOptions = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
    'Manhã (6h-12h)',
    'Tarde (12h-18h)',
    'Noite (18h-24h)',
    'Madrugada (0h-6h)'
  ];

  const languageOptions = [
    'Português',
    'Inglês',
    'Espanhol',
    'Italiano',
    'Francês',
    'Alemão',
    'Japonês',
    'Mandarim'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return false;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Por favor, insira um email válido.');
      return false;
    }

    setError('');
    return true;
  };

  const validateStep2 = () => {
    if (!formData.location) {
      setError('Por favor, informe sua localização.');
      return false;
    }

    if (formData.userType === 'caregiver') {
      if (formData.specialties.length === 0) {
        setError('Por favor, selecione pelo menos uma especialidade.');
        return false;
      }
      if (!formData.experience || !formData.education || !formData.hourlyRate) {
        setError('Por favor, preencha todos os campos obrigatórios do cuidador.');
        return false;
      }
    } else {
      if (!formData.elderName || !formData.elderAge || !formData.elderGender) {
        setError('Por favor, preencha as informações básicas do idoso.');
        return false;
      }
      if (formData.careNeeds.length === 0) {
        setError('Por favor, selecione pelo menos uma necessidade de cuidado.');
        return false;
      }
    }

    setError('');
    return true;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        type: formData.userType,
        location: formData.location,
        specialties: formData.userType === 'caregiver' ? formData.specialties : undefined,
      });
      setCurrentPage('home');
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
    }
  };

  const renderStep1 = () => (
    <>
      {/* User Type Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Tipo de Usuário *
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'family' }))}
            className={`p-4 rounded-lg border-2 transition-colors ${
              formData.userType === 'family'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-sm font-medium">Família</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Procurando cuidador
            </div>
          </button>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, userType: 'caregiver' }))}
            className={`p-4 rounded-lg border-2 transition-colors ${
              formData.userType === 'caregiver'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-sm font-medium">Cuidador</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Oferecer serviços
            </div>
          </button>
        </div>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nome Completo *
          </label>
          <div className="relative">
            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Seu nome completo"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Telefone *
          </label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email *
        </label>
        <div className="relative">
          <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Senha *
          </label>
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Mínimo 6 caracteres"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Confirmar Senha *
          </label>
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Confirme sua senha"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderStep2 = () => (
    <>
      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Localização *
        </label>
        <div className="relative">
          <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Ex: São Paulo, SP"
          />
        </div>
      </div>

      {formData.userType === 'caregiver' ? (
        <>
          {/* Caregiver specific fields */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Especialidades * (selecione pelo menos uma)
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
              {specialtyOptions.map(specialty => (
                <label key={specialty} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.specialties.includes(specialty)}
                    onChange={() => handleArrayChange('specialties', specialty)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {specialty}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Experiência *
              </label>
              <select
                id="experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Selecione sua experiência</option>
                <option value="1-2">1-2 anos</option>
                <option value="3-5">3-5 anos</option>
                <option value="5-10">5-10 anos</option>
                <option value="10+">Mais de 10 anos</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Valor por Hora *
              </label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="hourlyRate"
                  name="hourlyRate"
                  type="text"
                  required
                  value={formData.hourlyRate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Ex: R$ 25"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Formação *
            </label>
            <input
              id="education"
              name="education"
              type="text"
              required
              value={formData.education}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Ex: Técnico em Enfermagem"
            />
          </div>
        </>
      ) : (
        <>
          {/* Family specific fields */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
              Informações do Idoso
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <label htmlFor="elderName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nome *
                </label>
                <input
                  id="elderName"
                  name="elderName"
                  type="text"
                  required
                  value={formData.elderName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Nome do idoso"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="elderAge" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Idade *
                </label>
                <input
                  id="elderAge"
                  name="elderAge"
                  type="number"
                  required
                  value={formData.elderAge}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Idade"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="elderGender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Gênero *
                </label>
                <select
                  id="elderGender"
                  name="elderGender"
                  required
                  value={formData.elderGender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Condições de Saúde (se houver)
              </label>
              <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                {conditionOptions.map(condition => (
                  <label key={condition} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.elderConditions.includes(condition)}
                      onChange={() => handleArrayChange('elderConditions', condition)}
                      className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      {condition}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Necessidades de Cuidado * (selecione pelo menos uma)
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
              {careNeedsOptions.map(need => (
                <label key={need} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.careNeeds.includes(need)}
                    onChange={() => handleArrayChange('careNeeds', need)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {need}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Orçamento Mensal
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Selecione uma faixa</option>
                <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                <option value="2000-3000">R$ 2.000 - R$ 3.000</option>
                <option value="3000-5000">R$ 3.000 - R$ 5.000</option>
                <option value="5000+">Acima de R$ 5.000</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Urgência
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Selecione</option>
                <option value="imediata">Imediata (hoje)</option>
                <option value="esta-semana">Esta semana</option>
                <option value="este-mes">Este mês</option>
                <option value="planejando">Apenas planejando</option>
              </select>
            </div>
          </div>
        </>
      )}
    </>
  );

  const renderStep3 = () => (
    <>
      {formData.userType === 'caregiver' ? (
        <>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Disponibilidade
            </label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
              {availabilityOptions.map(option => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.availability.includes(option)}
                    onChange={() => handleArrayChange('availability', option)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Idiomas
            </label>
            <div className="grid grid-cols-2 gap-2">
              {languageOptions.map(language => (
                <label key={language} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.languages.includes(language)}
                    onChange={() => handleArrayChange('languages', language)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {language}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="hasTransport"
                checked={formData.hasTransport}
                onChange={handleInputChange}
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Possui transporte próprio
              </span>
            </label>

            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="acceptsPets"
                checked={formData.acceptsPets}
                onChange={handleInputChange}
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Aceita animais de estimação
              </span>
            </label>
          </div>

          <div className="space-y-2">
            <label htmlFor="personalDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Descrição Pessoal
            </label>
            <textarea
              id="personalDescription"
              name="personalDescription"
              rows={4}
              value={formData.personalDescription}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Conte um pouco sobre você, sua experiência e abordagem no cuidado..."
            />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Horário Preferido
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Manhã (6h-12h)', 'Tarde (12h-18h)', 'Noite (18h-24h)', 'Período Integral'].map(schedule => (
                <label key={schedule} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.preferredSchedule.includes(schedule)}
                    onChange={() => handleArrayChange('preferredSchedule', schedule)}
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {schedule}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Informações Adicionais
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Descreva qualquer informação adicional relevante sobre as necessidades de cuidado..."
            />
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart size={48} className="text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Crie sua conta
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Junte-se à nossa comunidade de cuidado
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[1, 2, 3].map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
              }`}>
                {step > stepNumber ? <CheckCircle size={20} /> : stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-16 h-1 ${
                  step > stepNumber ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <form className="space-y-6" onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNextStep(); }}>
          <div className="space-y-6">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <AlertCircle size={20} className="text-red-500" />
              <span className="text-sm text-red-700 dark:text-red-300">{error}</span>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Voltar
              </button>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Processando...' : step === 3 ? 'Criar Conta' : 'Próximo'}
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Já tem uma conta?{' '}
              <button
                type="button"
                onClick={() => setCurrentPage('login')}
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Entrar aqui
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Heart } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NovaSenhaModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl w-full max-w-md shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-gray-800">✖</button>
        
        <div className="text-center mb-6">
          <Heart size={32} className="mx-auto text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Crie uma nova senha</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Crie uma nova senha com no mínimo 6 letras e números.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Digite sua nova senha"
              />
              <button
                type="button"
                onClick={() => setShowSenha(!showSenha)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar senha</label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirmar ? 'text' : 'password'}
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                className="w-full pl-10 pr-12 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Confirme sua nova senha"
              />
              <button
                type="button"
                onClick={() => setShowConfirmar(!showConfirmar)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showConfirmar ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NovaSenhaModal;

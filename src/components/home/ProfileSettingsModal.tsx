import React, { useState } from 'react';
import { 
  X, User, Mail, School, Bell, 
  CheckCircle2, LogOut, BookOpen
} from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';
import { MOCK_TEACHER_PROFILE } from '../../data/mockData';
import type { TeacherProfile } from '../../types';

interface ProfileSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const ProfileSettingsModal: React.FC<ProfileSettingsModalProps> = ({
  isOpen,
  onClose,
  onLogout,
}) => {
  const [profile, setProfile] = useState<TeacherProfile>(MOCK_TEACHER_PROFILE);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'pedagogical' | 'notifications'>('profile');

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl shadow-2xl border-2 overflow-hidden flex flex-col max-h-[90vh]"
        style={{ 
          backgroundColor: '#EAE3E1', 
          borderColor: THEME_COLORS.borderLight 
        }}
      >
        {/* Top Decorative Line */}
        <div className="h-2 w-full" style={{ backgroundColor: THEME_COLORS.primary }} />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-center justify-between border-b" style={{ borderColor: THEME_COLORS.borderLight }}>
          <div className="flex items-center gap-4">
            <img 
              src={profile.avatar} 
              alt={profile.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 shadow-sm"
              style={{ borderColor: THEME_COLORS.primary }}
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-black" style={{ color: THEME_COLORS.textDark }}>
                {profile.name}
              </h3>
              <p className="text-xs font-semibold" style={{ color: THEME_COLORS.gray }}>
                {profile.email} • {profile.role}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 sm:px-8 pt-4 flex gap-2 border-b" style={{ borderColor: THEME_COLORS.borderLight }}>
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-[#b55b43] text-[#b55b43]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Dados Pessoais
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pedagogical')}
            className={`pb-3 px-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'pedagogical'
                ? 'border-[#b55b43] text-[#b55b43]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Preferências Pedagógicas
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notifications')}
            className={`pb-3 px-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'notifications'
                ? 'border-[#b55b43] text-[#b55b43]'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Notificações
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          
          {savedSuccess && (
            <div className="p-4 bg-emerald-100/80 border border-emerald-300 rounded-2xl flex items-center gap-3 text-emerald-900 text-xs font-bold animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Configurações do professor atualizadas com sucesso!</span>
            </div>
          )}

          {activeTab === 'profile' && (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none"
                      style={{ 
                        backgroundColor: THEME_COLORS.bgLight, 
                        borderColor: THEME_COLORS.borderLight,
                        color: THEME_COLORS.textDark 
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
                    E-mail Institucional
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none"
                      style={{ 
                        backgroundColor: THEME_COLORS.bgLight, 
                        borderColor: THEME_COLORS.borderLight,
                        color: THEME_COLORS.textDark 
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
                  Escolas / Instituições de Ensino
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={profile.school}
                    onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                    placeholder="Ex: E.E. Cecília Meireles"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none"
                    style={{ 
                      backgroundColor: THEME_COLORS.bgLight, 
                      borderColor: THEME_COLORS.borderLight,
                      color: THEME_COLORS.textDark 
                    }}
                  />
                </div>
              </div>

              {/* Stats Overview */}
              <div className="pt-2 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
                  <span className="text-xl font-black" style={{ color: THEME_COLORS.primary }}>{profile.activeClassesCount}</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: THEME_COLORS.gray }}>Turmas Ativas</p>
                </div>
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
                  <span className="text-xl font-black" style={{ color: THEME_COLORS.secondary }}>{profile.createdPlansCount}</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: THEME_COLORS.gray }}>Planos Criados</p>
                </div>
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
                  <span className="text-xl font-black" style={{ color: THEME_COLORS.accent }}>{profile.generatedMaterialsCount}</span>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5" style={{ color: THEME_COLORS.gray }}>Materiais</p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  style={{ backgroundColor: THEME_COLORS.primary }}
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          )}

          {activeTab === 'pedagogical' && (
            <div className="space-y-4 text-xs font-medium" style={{ color: THEME_COLORS.textDark }}>
              <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
                <h4 className="font-bold text-sm flex items-center gap-2" style={{ color: THEME_COLORS.primary }}>
                  <BookOpen className="w-4 h-4" />
                  <span>Diretrizes Pedagógicas Padrão</span>
                </h4>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-orange-600" />
                  <span>Sempre incluir matriz de identificação de falácias nos roteiros de debate</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-orange-600" />
                  <span>Alinhar automaticamente planos gerados às competências 7 e 10 da BNCC</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-orange-600" />
                  <span>Incluir repertório filosófico pluralista (clássico e contemporâneo)</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-3 text-xs font-medium" style={{ color: THEME_COLORS.textDark }}>
              <div className="p-4 rounded-2xl border space-y-3" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
                <h4 className="font-bold text-sm flex items-center gap-2" style={{ color: THEME_COLORS.secondary }}>
                  <Bell className="w-4 h-4" />
                  <span>Alertas e Lembretes</span>
                </h4>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                  <span>Receber sugestões semanais de temas de debate em alta nas notícias</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                  <span>Lembrar de planos em andamento antes do início da semana letiva</span>
                </label>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Logout Action */}
        <div className="p-4 sm:p-6 border-t flex items-center justify-between" style={{ borderColor: THEME_COLORS.borderLight, backgroundColor: 'rgba(234, 227, 225, 0.5)' }}>
          <button
            type="button"
            onClick={() => {
              onClose();
              onLogout();
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sair da Conta (Logout)</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer"
            style={{ 
              backgroundColor: THEME_COLORS.bgLight, 
              borderColor: THEME_COLORS.borderLight,
              color: THEME_COLORS.textDark 
            }}
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

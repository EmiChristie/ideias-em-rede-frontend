import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import type { SidebarMenuId } from './Sidebar';
import { HomePage } from './HomePage';
import { ProfileSettingsModal } from './ProfileSettingsModal';
import { THEME_COLORS } from '../../constants/colors';
import { 
  Plus, ArrowRight, BookOpen 
} from 'lucide-react';

export const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<SidebarMenuId>('criar');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div 
      className="min-h-screen flex font-sans antialiased relative"
      style={{ 
        backgroundColor: THEME_COLORS.bgLight, 
        color: THEME_COLORS.textDark 
      }}
    >
      {/* 1. Canva-style Sidebar */}
      <Sidebar
        activeMenu={activeMenu}
        onSelectMenu={(menu) => setActiveMenu(menu)}
        onOpenNewIdea={() => {
          setActiveMenu('criar');
          const searchInput = document.querySelector('input[type="text"]');
          if (searchInput) (searchInput as HTMLInputElement).focus();
        }}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* 2. Main Content Canvas */}
      <main
            style={{
        background: `linear-gradient(
          to bottom,
          ${THEME_COLORS.lightAccent} -15%,
          ${THEME_COLORS.bgLight} 10%,
          #faf9f8 60%
        )`,
      }}
      className="flex-grow flex flex-col min-w-0 overflow-x-hidden">
        
        
        {/* Main View Router */}
        {activeMenu === 'criar' && <HomePage />}

        {activeMenu === 'turmas' && (
          <div className="p-8 lg:p-12 space-y-6 max-w-7xl mx-auto w-full animate-in fade-in">
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: THEME_COLORS.borderLight }}>
              <div>
                <h1 className="text-3xl font-black tracking-tight" style={{ color: THEME_COLORS.textDark }}>
                  <span className="text-outline-dark">Gestão de </span>
                  <span>Turmas</span>
                </h1>
                <p className="text-xs font-semibold text-stone-500 mt-1">Salas cadastradas, níveis escolares e histórico de debates</p>
              </div>
              <button 
                className="px-5 py-2.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                style={{ backgroundColor: THEME_COLORS.primary }}
              >
                <Plus className="w-4 h-4" /> Nova Turma
              </button>
            </div>
            
            {/* Turmas Grid Mock */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['3º Ano A - Ensino Médio', '2º Ano B - Ensino Médio', '9º Ano C - Fundamental II'].map((turma, idx) => (
                <div key={idx} className="p-6 rounded-3xl border-2 space-y-4 shadow-sm" style={{ backgroundColor: '#ffffff', borderColor: THEME_COLORS.borderLight }}>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase text-white" style={{ backgroundColor: THEME_COLORS.secondary }}>Ativa</span>
                    <span className="text-xs font-bold text-stone-500">32 Alunos</span>
                  </div>
                  <h3 className="text-lg font-black text-stone-900">{turma}</h3>
                  <p className="text-xs text-stone-600">Última atividade: Debate sobre Inteligência Artificial e Democracia.</p>
                  <div className="pt-2 flex justify-between items-center text-xs font-bold text-[#b55b43]">
                    <span>Ver Planejamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMenu === 'templates' && (
          <div className="p-8 lg:p-12 space-y-6 max-w-7xl mx-auto w-full animate-in fade-in">
            <div className="border-b pb-4" style={{ borderColor: THEME_COLORS.borderLight }}>
              <h1 className="text-3xl font-black tracking-tight" style={{ color: THEME_COLORS.textDark }}>
                <span className="text-outline-dark">Templates de </span>
                <span>Plano de Aula</span>
              </h1>
              <p className="text-xs font-semibold text-stone-500 mt-1">Estruturas didáticas prontas alinhadas à BNCC e metodologias ativas</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Modelo Debate Regrado (ONU/Câmara)', time: '2 a 4 aulas', tag: 'Simulação' },
                { title: 'Sequência Filosófica Contratualista', time: '3 aulas', tag: 'Teoria Política' },
                { title: 'Laboratório de Redação Cidadã', time: '2 aulas', tag: 'Escrita ENEM' },
              ].map((tmpl, idx) => (
                <div key={idx} className="p-6 rounded-3xl border-2 space-y-3" style={{ backgroundColor: '#ffffff', borderColor: THEME_COLORS.borderLight }}>
                  <span className="text-[10px] font-black uppercase text-white px-2.5 py-1 rounded-md" style={{ backgroundColor: THEME_COLORS.primary }}>{tmpl.tag}</span>
                  <h3 className="text-base font-black">{tmpl.title}</h3>
                  <p className="text-xs text-stone-500">Duração estimada: {tmpl.time}</p>
                  <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white uppercase tracking-wider" style={{ backgroundColor: THEME_COLORS.secondary }}>
                    Usar este Template
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeMenu === 'materiais' && (
          <div className="p-8 lg:p-12 space-y-6 max-w-7xl mx-auto w-full animate-in fade-in">
            <div className="border-b pb-4" style={{ borderColor: THEME_COLORS.borderLight }}>
              <h1 className="text-3xl font-black tracking-tight" style={{ color: THEME_COLORS.textDark }}>
                <span className="text-outline-dark">Materiais </span>
                <span>Didáticos</span>
              </h1>
              <p className="text-xs font-semibold text-stone-500 mt-1">Textos de apoio, cartões de falácias e propostas de intervenção</p>
            </div>
            <div className="p-12 text-center rounded-3xl border-2 border-dashed" style={{ borderColor: THEME_COLORS.borderLight }}>
              <BookOpen className="w-12 h-12 mx-auto text-stone-400 mb-3" />
              <h3 className="text-sm font-bold text-stone-800">Biblioteca Pedagógica de Materiais</h3>
              <p className="text-xs text-stone-500 mt-1">Selecione ou gere novos textos de apoio pela área "Criar".</p>
            </div>
          </div>
        )}

      </main>

      {/* 3. Settings / Profile Modal */}
      <ProfileSettingsModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onLogout={() => navigate('/login')}
      />
    </div>
  );
};

import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

export const TurmasTab: React.FC = () => {
  return (
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
  );
};

export default TurmasTab;

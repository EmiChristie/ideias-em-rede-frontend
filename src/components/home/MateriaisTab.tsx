import React from 'react';
import { BookOpen } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

export const MateriaisTab: React.FC = () => {
  return (
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
  );
};

export default MateriaisTab;

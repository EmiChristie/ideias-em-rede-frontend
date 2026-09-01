import React, { useState } from 'react';
import { Bell, CheckCircle2 } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

const OPTIONS = [
  {
    label: 'Receber sugestões semanais de temas de debate em alta nas notícias',
    defaultChecked: true,
  },
  {
    label: 'Lembrar de planos em andamento antes do início da semana letiva',
    defaultChecked: true,
  },
];

export const NotificationsTab: React.FC = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <form onSubmit={handleSave} className="space-y-5 text-xs font-medium" style={{ color: THEME_COLORS.textDark }}>
      {savedSuccess && (
        <div className="p-4 bg-emerald-100/80 border border-emerald-300 rounded-2xl flex items-center gap-3 text-emerald-900 text-xs font-bold animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>Preferências de notificação atualizadas com sucesso!</span>
        </div>
      )}

      <div className="p-5 rounded-2xl border space-y-3" style={{ backgroundColor: THEME_COLORS.bgLight, borderColor: THEME_COLORS.borderLight }}>
        <h4 className="font-bold text-sm flex items-center gap-2 mb-1" style={{ color: THEME_COLORS.secondary }}>
          <Bell className="w-4 h-4" />
          <span>Alertas e Lembretes</span>
        </h4>
        {OPTIONS.map((option) => (
          <label key={option.label} className="flex items-start gap-2.5 cursor-pointer py-0.5">
            <input type="checkbox" defaultChecked={option.defaultChecked} className="mt-0.5 w-4 h-4 rounded" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      <div className="pt-1 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-sm transition-all hover:scale-105 cursor-pointer"
          style={{ backgroundColor: THEME_COLORS.primary }}
        >
          Salvar Alterações
        </button>
      </div>
    </form>
  );
};

export default NotificationsTab;

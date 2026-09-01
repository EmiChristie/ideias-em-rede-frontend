import React from 'react';
import { THEME_COLORS } from '../../constants/colors';
import { MOCK_TEACHER_PROFILE } from '../../data/mockData';

interface SettingsHeaderProps {
  title?: string;
  subtitle?: string;
}

export const SettingsHeader: React.FC<SettingsHeaderProps> = ({
  title = 'Configurações',
  subtitle = 'Gerencie seus dados pessoais e notificações',
}) => {
  return (
    <div className="border-b pb-6" style={{ borderColor: THEME_COLORS.borderLight }}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <img
          src={MOCK_TEACHER_PROFILE.avatar}
          alt={MOCK_TEACHER_PROFILE.name}
          className="w-22 h-22 rounded-full object-cover border-2 shadow-sm shrink-0"
          style={{ borderColor: THEME_COLORS.primary }}
        />
        <div>
          <h1
            className="text-3xl xl:text-4xl font-black tracking-tight"
            style={{ color: THEME_COLORS.textDark }}
          >
            {title}
          </h1>
          <p className="mt-2 text-xs font-medium text-stone-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsHeader;

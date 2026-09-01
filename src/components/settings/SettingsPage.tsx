import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { SettingsHeader } from './SettingsHeader';
import { PersonalDataTab } from './PersonalDataTab';
import { NotificationsTab } from './NotificationsTab';
import type { SettingsTabId } from './types';
import { THEME_COLORS } from '../../constants/colors';

interface SettingsPageProps {
  onLogout: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout }) => {
  const [activeTab] = useState<SettingsTabId>('profile');

  return (
    <div
      className="
        mt-12
        p-8
        lg:px-20
        lg:py-6
        space-y-6
        max-w-7xl
        mx-auto
        w-full
        template-page-in
      "
    >
      <SettingsHeader />

      <div className="pt-2">
        {activeTab === 'profile' && <PersonalDataTab />}
        {activeTab === 'notifications' && <NotificationsTab />}
      </div>

      <div
        className=""
        style={{ borderColor: THEME_COLORS.borderLight }}
      >
        <button
          type="button"
          onClick={onLogout}
          className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 mx-2" />
          <span>Sair da Conta (Logout)</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
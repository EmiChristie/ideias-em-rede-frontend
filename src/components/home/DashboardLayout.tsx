import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import type { SidebarMenuId } from './Sidebar';
import { HomePage } from './HomePage';
import { TurmasTab } from './TurmasTab';
import { TemplatesTab } from './TemplatesTab';
import { MateriaisTab } from './MateriaisTab';
import { ProfileSettingsModal } from './ProfileSettingsModal';
import { THEME_COLORS } from '../../constants/colors';

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
        {(activeMenu === 'criar' || activeMenu === 'home') && <HomePage />}

        {activeMenu === 'turmas' && <TurmasTab />}

        {activeMenu === 'templates' && <TemplatesTab />}

        {activeMenu === 'materiais' && <MateriaisTab />}

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

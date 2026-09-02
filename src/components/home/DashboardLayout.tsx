import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import type { SidebarMenuId } from './Sidebar';
import { HomePage } from './HomePage';
import { TurmasTab } from './TurmasTab';
import { TemplatesTab } from './TemplatesTab';
import { MateriaisTab } from './MateriaisTab';
import { SettingsPage } from '../settings/SettingsPage';
import { THEME_COLORS } from '../../constants/colors';

export const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<SidebarMenuId>('criar');

  const isTurmaDetail = location.pathname.startsWith('/home/turmas/');

  const handleSelectMenu = (menu: SidebarMenuId) => {
    setActiveMenu(menu);
    navigate('/home');
  };

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
        onSelectMenu={handleSelectMenu}
        onOpenNewIdea={() => {
          setActiveMenu('criar');
          navigate('/home');
          const searchInput = document.querySelector('input[type="text"]');
          if (searchInput) (searchInput as HTMLInputElement).focus();
        }}
        onOpenSettings={() => {
          setActiveMenu('settings');
          navigate('/home');
        }}
      />

      {/* Rota de detalhe da turma: renderiza fora do <main> para ocupar a página cheia
          mantendo a Sidebar global do app */}
      {isTurmaDetail ? (
        <Outlet />
      ) : (
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

          {activeMenu === 'settings' && <SettingsPage onLogout={() => navigate('/login')} />}
        </main>
      )}
    </div>
  );
};

export default DashboardLayout;
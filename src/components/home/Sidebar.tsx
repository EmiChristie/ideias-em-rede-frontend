import React, { useState } from 'react';
import { 
  Lightbulb, Users, LayoutTemplate, BookOpen, 
  Plus, User, Bell, Palette, LogOut
} from 'lucide-react';
import { Logo } from '../general/Logo';
import { THEME_COLORS } from '../../constants/colors';
import { MOCK_TEACHER_PROFILE } from '../../data/mockData';

export type SidebarMenuId = 'criar' | 'turmas' | 'templates' | 'materiais';

interface SidebarProps {
  activeMenu: SidebarMenuId;
  onSelectMenu: (menu: SidebarMenuId) => void;
  onOpenNewIdea: () => void;
  onOpenProfile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeMenu,
  onSelectMenu,
  onOpenNewIdea,
}) => {
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);

  const menuItems = [
    {
      id: 'turmas' as SidebarMenuId,
      label: 'Turmas',
      icon: Users,
    },
    {
      id: 'templates' as SidebarMenuId,
      label: 'Templates',
      icon: LayoutTemplate,
    },
    {
      id: 'materiais' as SidebarMenuId,
      label: 'Materiais',
      icon: BookOpen,
    },
  ];

  const dialogItems = [
    { icon: User, label: 'Perfil & Conta' },
    { icon: Bell, label: 'Notificações' },
    { icon: Palette, label: 'Aparência' },
  ];

  return (
    <aside
      className="h-screen sticky top-0 w-20 border-r flex flex-col justify-center z-30 select-none relative"
      style={{
        backgroundColor: 'transparent',
        borderColor: THEME_COLORS.borderLight,
      }}
    >
      {/* Top Brand (symbol only) */}
      <div className="p-4 pb-2 flex justify-center">
        <Logo variant="icon-only" size="sm" />
      </div>

      {/* Create / New Action Button (fixed, same as the other items) */}
      <div className="px-3 pb-1 pt-3">
        <button
          type="button"
          onClick={onOpenNewIdea}
          className="w-full flex flex-col items-center gap-1.5 py-3 rounded-2xl transition-all cursor-pointer"
          title="Criar novo plano de aula ou debate"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md shadow-[#b55b43]/20 transition-transform hover:scale-105"
            style={{ backgroundColor: THEME_COLORS.primary }}
          >
            <Plus className="w-5 h-5 stroke-[3]" />
          </div>
          <span
            className="text-[10px] tracking-tight leading-tight"
            style={{ color: THEME_COLORS.textDark }}
          >
            Criar
          </span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-grow px-3  space-y-1.5 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectMenu(item.id)}
              className="w-full flex flex-col items-center gap-0.5 py-2 rounded-lg transition-all cursor-pointer hover:bg-black/[0.05]"
              title={item.label}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform ${
                  isActive ? 'scale-105' : ''
                }`}
                style={{
                  backgroundColor: isActive ? THEME_COLORS.primary : 'rgba(240, 235, 234, 0.0)',
                  color: isActive ? THEME_COLORS.textLight : THEME_COLORS.gray,
                }}
              >
                <Icon className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span
                className={`text-[10px] tracking-tight leading-tight text-center ${
                  isActive ? 'text-[#b55b43]' : ''
                }`}
                style={{ color: isActive ? THEME_COLORS.primary : THEME_COLORS.textDark }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Profile Trigger (round avatar) + inline dialog */}
      <div className="p-4 flex justify-center relative" style={{ borderColor: THEME_COLORS.borderLight }}>
        <button
          type="button"
          onClick={() => setIsProfileDialogOpen((open) => !open)}
          className="relative rounded-full transition-transform hover:scale-105 cursor-pointer"
          title={MOCK_TEACHER_PROFILE.name}
        >
          <img
            src={MOCK_TEACHER_PROFILE.avatar}
            alt={MOCK_TEACHER_PROFILE.name}
            className="w-10 h-10 rounded-full object-cover shadow-sm"
            style={{ borderColor: THEME_COLORS.primary }}
          />
        </button>

        {isProfileDialogOpen && (
          <div
            className="absolute bottom-4 left-[calc(100%+12px)] w-72 rounded-3xl border-2 bg-[#ffffff] shadow-xl overflow-hidden"
            style={{ borderColor: THEME_COLORS.borderLight }}
          >
            {/* Dialog header with profile */}
            <div className="py-5 mx-5 border-b flex items-center gap-3" style={{ borderColor: THEME_COLORS.borderLight }}>
              <img
                src={MOCK_TEACHER_PROFILE.avatar}
                alt={MOCK_TEACHER_PROFILE.name}
                className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0"
                style={{ borderColor: THEME_COLORS.primary }}
              />
              <div className="min-w-0">
                <p className="text-sm font-black truncate leading-tight" style={{ color: THEME_COLORS.textDark }}>
                  {MOCK_TEACHER_PROFILE.name}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 truncate mt-0.5">
                  {MOCK_TEACHER_PROFILE.email}
                </p>
              </div>
            </div>

            {/* Dialog menu items */}
            <div className="p-2">
              {dialogItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer hover:bg-black/[0.05]"
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    >
                      <Icon className="w-4 h-4 stroke-[2.5]" />
                    </span>
                    <span className="text-xs font-bold" style={{ color: THEME_COLORS.textDark }}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dialog footer with settings & logout */}
            <div className="p-2 border-t" style={{ borderColor: THEME_COLORS.borderLight }}>
              <button
                type="button"
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-xs font-bold text-red-600 hover:text-red-800 transition-all cursor-pointer hover:bg-red-50"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-red-50">
                  <LogOut className="w-4 h-4 stroke-[2.5] text-red-600" />
                </span>
                <span>Sair da Conta</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

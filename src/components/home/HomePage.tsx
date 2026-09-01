import React, { useState } from 'react';
import { 
  Search, Sparkles, MessageSquareQuote, LayoutTemplate, BookOpen, 
  FileText, Clock, ArrowRight, CheckCircle2,
  FolderOpen, Layers, Zap,
  PencilSparkles
} from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';
import { MOCK_RECENT_WORKS } from '../../data/mockData';
import type { RecentWorkItem } from '../../types';

interface HomePageProps {
  onOpenNewIdeaPrompt?: (prompt: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const [ideaPrompt, setIdeaPrompt] = useState('');
  const [works, setWorks] = useState<RecentWorkItem[]>(MOCK_RECENT_WORKS);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [generatedToast, setGeneratedToast] = useState<string | null>(null);

  // Quick Inspiration Prompts
  const inspirationChips = [
    'Debate sobre Regulação de Redes Sociais',
    'Simulação de Plenário: Uso de Celulares na Escola',
    'Matriz de Falácias no Discurso Público',
    'O Contrato Social no Século XXI',
    'Oficina de Redação: Participação e Voto Jovem',
  ];

  // Canva-style Category format badges
  const categoryShortcuts = [
    {
      id: 'debate',
      label: 'Roteiros de Debate',
      icon: MessageSquareQuote,
      color: THEME_COLORS.accent,
      badge: 'Tempo & Réplicas',
    },
    {
      id: 'plano',
      label: 'Planos de Aula BNCC',
      icon: LayoutTemplate,
      color: THEME_COLORS.primary,
      badge: 'Competências 7 e 10',
    },
    {
      id: 'redacao',
      label: 'Oficinas de Redação',
      icon: FileText,
      color: THEME_COLORS.secondary,
      badge: 'Intervenção Social',
    },
    {
      id: 'simulacao',
      label: 'Simulações',
      icon: Layers,
      color: THEME_COLORS.primary,
      badge: 'Role Play Cidadão',
    },
    {
      id: 'materiais',
      label: 'Matrizes & Falácias',
      icon: BookOpen,
      color: THEME_COLORS.secondary,
      badge: 'Letramento Midiático',
    },
    {
      id: 'brainstorm',
      label: 'Brainstorm Aberto',
      icon: Zap,
      color: THEME_COLORS.accent,
      badge: 'Ideação Livre',
    },
  ];

  const handleGenerateIdea = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaPrompt.trim()) return;

    setGeneratedToast(`Gerando rascunho pedagógico para: "${ideaPrompt}"...`);
    
    setTimeout(() => {
      const newItem: RecentWorkItem = {
        id: `work-${Date.now()}`,
        title: ideaPrompt,
        category: 'brainstorm',
        categoryLabel: 'Brainstorm Pedagógico',
        lastModified: 'Criado agora',
        tags: ['Educação Básica', 'Metodologias Ativas', 'Novo'],
        excerpt: 'Plano estruturado gerado a partir do brainstorm docente. Contém problematização inicial, textos motivadores e critérios de avaliação formativa.',
        status: 'Em andamento',
        accentColor: THEME_COLORS.accent,
        duration: 'A definir',
      };
      setWorks([newItem, ...works]);
      setIdeaPrompt('');
      setGeneratedToast('Novo plano adicionado ao seu painel!');
      setTimeout(() => setGeneratedToast(null), 3000);
    }, 1200);
  };

  const filteredWorks = works.filter((w) => {
    if (filterCategory === 'all') return true;
    return w.category === filterCategory;
  });

  return (
    <div 

    className="relative flex-grow p-6 lg:px-20 lg:py-6 overflow-y-auto max-w-7xl mx-auto w-full">
      <div className="relative z-10 space-y-4">
      {/* ========================================================================= */}
      {/* 1. CANVA-INSPIRED HERO BANNER: "O que você quer criar hoje?"               */}
      {/* ========================================================================= */}
      <section 
        className="rounded-3xl p-8 sm:p-12 relative overflow-hidden"
      >
        
        <div className="max-w-4xl mx-auto place-items-center space-y-8 relative z-10">
          
          {/* Main Title with Brand Outline & Solid Typography */}
          <svg
            viewBox="-6 0 774 100"
            className=" h-auto hero-title-in"
          >
            <defs>
              <linearGradient id="orangeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09a6a" />
                <stop offset="50%" stopColor="#d66a3f" />
                <stop offset="100%" stopColor="#8f3d24" />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="orangeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8f3d24" />
                <stop offset="50%" stopColor="#d66a3f" />
                <stop offset="100%" stopColor="#f09a6a" />
              </linearGradient>
            </defs>

            <text
              x="0"
              y="70"
              fontSize="56"
              fontWeight="900"
              fill="transparent"
              stroke="url(#orangeGradient1)"
              strokeWidth="2"
            >
              O que você quer
            </text>

            <text
              x="475"
              y="70"
              fontSize="56"
              fontWeight="900"
              fill="url(#orangeGradient2)"
            >
              criar hoje?
            </text>
          </svg>

          {/* Central Search / Idea Creation Input */}
          <form onSubmit={handleGenerateIdea} className="relative max-w-2xl mx-auto input-in"
                style={{
                  animationDelay: "180ms",
                }}
          >
            <div 
              className="flex items-center rounded-2xl border-2 p-2 shadow-md transition-all focus-within:border-[#b55b43]"
              style={{ 
                backgroundColor: THEME_COLORS.white, 
                borderColor: THEME_COLORS.lightAccent,
                boxShadow: '0 4px 6px #f1dbcb',
              }}
            >
              <div className="px-3 text-stone-400">
                <PencilSparkles className="w-5 h-5" />
              </div>

              <input
                type="text"
                value={ideaPrompt}
                onChange={(e) => setIdeaPrompt(e.target.value)}
                placeholder="Descreva uma ideia..."
                className="w-full h-10 bg-transparent border-0 text-sm font-semibold focus:outline-none placeholder-stone-400"
                style={{ color: THEME_COLORS.textDark }}
              />
            </div>
          </form>

          {/* Quick Idea Inspiration Chips */}
          <div  className="flex flex-wrap items-center justify-center gap-2 pt-1 chips-in"   
                style={{
                  animationDelay: "350ms",
                }}
          >
            <span className="text-xs font-bold text-stone-500 mr-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-600" /> Sugestões:
            </span>
              {inspirationChips.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setIdeaPrompt(chip)}
                  className="
                    chip-in
                    hover:bg-[#f7f5f4]/100
                    text-[11px]
                    font-bold
                    px-3
                    py-1.5
                    shadow-sm
                    border
                    rounded-full
                    transition-all
                    hover:border-[#b55b43]
                    hover:text-[#b55b43]
                    hover:-translate-y-0.5
                    cursor-pointer
                  "
                  style={{
                    borderColor: THEME_COLORS.borderLight,
                    color: THEME_COLORS.textDark,
                    animationDelay: `${450 + idx * 80}ms`,
                  }}
                >
                  {chip}
                </button>
              ))}
          </div>

          {/* Toast Notification */}
          {generatedToast && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-emerald-900 text-xs font-bold flex items-center justify-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{generatedToast}</span>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CANVA-STYLE CATEGORY SHORTCUTS CAROUSEL / GRID                         */}
      {/* ========================================================================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold" style={{ color: THEME_COLORS.textDark }}>
            Formatos & Ferramentas Rápidas
          </h2>
          {/* 
          <span className="text-xs font-bold text-stone-500">Selecione para estruturar</span>
          */}
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {categoryShortcuts.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id === filterCategory ? 'all' : cat.id)}
                className={`p-4 rounded-2xl border-r shadow-sm text-left transition-all hover:scale-[1.02] cursor-pointer flex flex-col justify-between min-h-[120px] shadow-sm
                }`}
                style={{
                  backgroundColor: '#ffffff40',
                  borderColor: THEME_COLORS.borderLight,
                }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                  style={{ backgroundColor: cat.color }}
                >
                  <Icon className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="mt-3">
                  <h3 className="text-xs font-black leading-tight" style={{ color: THEME_COLORS.textDark }}>
                    {cat.label}
                  </h3>
                  <span className="text-[10px] font-bold mt-1 block" style={{ color: THEME_COLORS.gray }}>
                    {cat.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. "CONTINUE DE ONDE PAROU" (Unarchived Works & Preview Cards)             */}
      {/* ========================================================================= */}
      <section className="space-y-6 pt-8">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 " style={{ borderColor: THEME_COLORS.borderLight }}>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: THEME_COLORS.textDark }}>
              Continue de onde parou
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">

            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all border cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#b55b43] text-white border-[#b55b43]'
                  : 'bg-white text-stone-700 border-[#f3ebea] hover:bg-black/[0.05]'
              }`}
            >
              Todos ({works.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('debate')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all border cursor-pointer ${
                filterCategory === 'debate'
                  ? 'bg-[#b55b43] text-white border-[#b55b43]'
                  : 'bg-white text-stone-700 border-[#f3ebea] hover:bg-black/[0.05]'
              }`}
            >
              Atividades
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('plano')}
              className={`px-3.5 py-1.5 rounded-full text-xs shadow-sm font-bold transition-all border cursor-pointer ${
                filterCategory === 'plano'
                  ? 'bg-[#b55b43] text-white border-[#b55b43]'
                  : 'bg-white text-stone-700 border-[#f3ebea] hover:bg-black/[0.05]'
              }`}
            >
              Planos de Aula
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('material')}
              className={`px-3.5 py-1.5 rounded-full text-xs shadow-sm font-bold transition-all border cursor-pointer ${
                filterCategory === 'material'
                  ? 'bg-[#b55b43] text-white border-[#b55b43]'
                  : 'bg-white text-stone-700 border-[#f3ebea] hover:bg-black/[0.05]'
              }`}
            >
              Materiais complementares
            </button>
          </div>
        </div>

        {/* Desktop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-3xl shadow-sm border-r overflow-hidden flex flex-col justify-between transition-all hover:shadow-md hover:-translate-y-1 group"
                style={{ 
                  backgroundColor: '#ffffff40', 
                  borderColor: THEME_COLORS.borderLight 
                }}
              >
                {/* Visual Thumbnail Header */}
                <div 
                  className="h-32 p-4 relative flex flex-col justify-between overflow-hidden"
                  style={{ backgroundColor: 'rgba(240, 235, 234, 0.4)' }}
                >
                  {/* Top Badges: Category + Status */}
                  <div className="flex items-center justify-between relative z-10">
                    <span 
                      className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${item.accentColor} 70%, transparent)`
                      }}
                    >
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  {item.duration && (
                    <div className="text-[11px] font-bold text-stone-500 relative z-10 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-black leading-snug group-hover:text-[#b55b43] transition-colors" style={{ color: THEME_COLORS.textDark }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-medium line-clamp-2" style={{ color: THEME_COLORS.gray }}>
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-bold border"
                        style={{ 
                          backgroundColor: THEME_COLORS.bgLight, 
                          borderColor: THEME_COLORS.borderLight, 
                          color: THEME_COLORS.textDark 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div 
                  className="p-4 px-6 border-t flex items-center justify-between text-xs"
                  style={{ borderColor: THEME_COLORS.borderLight, backgroundColor: 'rgba(0, 0, 0, 0.015)' }}
                >
                  <span className="text-[11px] font-semibold text-stone-500">
                    {item.lastModified}
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 font-bold transition-transform group-hover:translate-x-1 cursor-pointer"
                    style={{ color: item.accentColor }}
                  >
                    <span>Abrir</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredWorks.length === 0 && (
          <div className="p-12 mb-8 text-center rounded-3xl space-y-3">
            <FolderOpen className="w-10 h-10 mx-auto text-stone-400" />
            <h4 className="font-bold text-sm text-stone-700">Nenhum material encontrado nesta categoria</h4>
            <p className="text-xs text-stone-500">Utilize a barra de criação acima para iniciar um novo rascunho.</p>
          </div>
        )}

      </section>

      </div>
      <div className='h-12'></div>
    </div>
  );
};

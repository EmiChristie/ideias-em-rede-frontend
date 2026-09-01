import React, { useState } from 'react';
import { File, FileArchive, FileScan, Plus, PlusCircle, Sparkle, Sparkles } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

export const TemplatesTab: React.FC = () => {
  const templates = [
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 2},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 0},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 2},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 0},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 2},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 2},
          { title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa', qtd: 2},
        ];

  const [isAddTemplateDialogOpen, setIsAddTemplateDialogOpen] = useState(false);

  return (
    <div className="mt-12 p-8 lg:px-20 lg:py-6 space-y-6 max-w-7xl mx-auto w-full animate-in fade-in">
      <div
        className="border-b pb-4"
        style={{ borderColor: THEME_COLORS.borderLight }}
      >
        <h1
          className="text-4xl font-black tracking-tight"
          style={{ color: THEME_COLORS.textDark }}
        >
          <span className="text-outline-dark">Templates de </span>
          <span>Plano de Aula</span>
        </h1>

        <p className="mt-3 text-sm font-semibold text-stone-500">
          Adicione estruturas de planos de aula alinhadas à sua realidade
        </p>
      </div>

      {templates.length === 0 ? (
        <div className="p-12 mb-8 text-center rounded-3xl space-y-3">
          <File className="w-10 h-10 mx-auto text-stone-400" />

          <h4 className="font-bold text-sm text-stone-700">
            Nenhum template cadastrado
          </h4>

          <p className="text-xs text-stone-500">
            Carregue um arquivo ou configure um template para começar a
            estruturar suas aulas. <br />
            Um template pode ser um arquivo em branco que sua instituição
            precisa seguir, ou um arquivo que você próprio já utiliza para se
            organizar. <br />
            Se você não possui essas estruturas ainda, crie uma com a gente!
          </p>

          <button
            type="button"
            onClick={() =>
              setIsAddTemplateDialogOpen((open) => !open)
            }
            className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: THEME_COLORS.primary,
            }}
          >
            <Plus className="w-4 h-4" />
            Adicionar template
          </button>

          <div
            className="p-4 flex justify-center relative"
            style={{ borderColor: THEME_COLORS.borderLight }}
          >
            {isAddTemplateDialogOpen && (
              <div
                className="absolute -bottom-22 w-72 rounded-3xl border bg-[#ffffff] shadow-xl overflow-hidden"
                style={{ borderColor: THEME_COLORS.borderLight }}
              >

                <div className="p-2">
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer hover:bg-black/[0.05]"
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <FileScan className="w-4 h-4 stroke-[2.5]" />
                    </span>

                    <span
                      className="text-xs font-bold"
                      style={{ color: THEME_COLORS.textDark }}
                    >
                      Carregar template de arquivo
                    </span>
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer hover:bg-black/[0.05]"
                  >
                    <span className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </span>

                    <span
                      className="text-xs font-bold"
                      style={{ color: THEME_COLORS.textDark }}
                    >
                      Criar novo template
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Templates Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {templates.map((tmpl, idx) => (
            <div
              key={idx}
              className="cursor-pointer transition-all hover:scale-105 rounded-2xl border shadow-sm"
              style={{
                backgroundColor: '#ffffff60',
                borderColor: THEME_COLORS.borderLight,
              }}
            >
              <div
                className="h-36 relative flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundColor: 'rgba(240, 235, 234, 0.4)',
                }}
              />

              <div className="p-6 space-y-3">
                <h3 className="line-clamp-2 text-base font-bold">
                  {tmpl.title}
                </h3>

                <span
                  className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold border"
                  style={{
                    backgroundColor:
                      tmpl.qtd === 0
                        ? THEME_COLORS.lightSecondary
                        : THEME_COLORS.lightPrimary,
                    borderColor:
                      tmpl.qtd === 0
                        ? THEME_COLORS.lightSecondary
                        : THEME_COLORS.lightPrimary,
                    color:
                      tmpl.qtd === 0
                        ? THEME_COLORS.secondary
                        : THEME_COLORS.primary,
                  }}
                >
                  {tmpl.qtd} turmas associadas
                </span>
              </div>
            </div>
          ))}

            <div className='flex flex-col'>
                <span className="text-lg font-bold mb-2 pl-1">
                  Adicionar template
                </span>
              <div className="mt-2 flex flex-col gap-2">
                <button
                  type="button"
                  className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: THEME_COLORS.lightPrimary,
                    borderColor: THEME_COLORS.lightPrimary,
                    color: THEME_COLORS.primary,
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <File className="w-5 h-5" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-bold">
                      Carregar arquivo
                    </p>
                    <p className="text-[10px] font-medium opacity-70">
                      Use um template existente
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: THEME_COLORS.lightSecondary,
                    borderColor: THEME_COLORS.lightSecondary,
                    color: THEME_COLORS.secondary,
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-bold">
                      Criar template
                    </p>
                    <p className="text-[10px] font-medium opacity-70">
                      Crie uma nova estrutura
                    </p>
                  </div>
                </button>
              </div>
            </div>
            
        </div>
      )}
    </div>
  );
};

export default TemplatesTab;
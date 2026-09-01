import React, { useState } from 'react';
import { File, FileScan, Plus, UsersRound } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

export const TurmasTab: React.FC = () => {
  const templates = [
          { title: '6º Ano A', qtd: 32, school: 'Escola XYZ com nome bem longo pra testar o line clamp'},
          { title: '6º Ano B', qtd: 40, school: 'Escola XYZ com nome bem longo pra testar o line clamp'},
          { title: '1º Ano C', qtd: 28, school: 'Escola 123 Mariana Conta 4'},
          { title: '8º Ano D', qtd: 28, school: 'Escola ABC'},
        ];

  return (
    <div
      className="
        mt-12 p-8 lg:px-20 lg:py-6
        space-y-6
        max-w-7xl mx-auto w-full
        template-page-in
      "
    >
    <div
      className="border-b pb-4"
      style={{
        borderColor: THEME_COLORS.borderLight,
      }}
    >
      <h1
        className="text-4xl xl:text-5xl font-black tracking-tight template-page-in"
        style={{
          color: THEME_COLORS.textDark,
          animationDelay: "80ms",
        }}
      >
        <span className="text-outline-dark">Suas</span>
        <span> Turmas</span>
      </h1>

      <p
        className="mt-3 text-sm font-semibold text-stone-500 template-page-in"
        style={{
          animationDelay: "180ms",
        }}
      >
        Subtítulo
      </p>
    </div>

      {templates.length === 0 ? (
        <div className="p-12 mb-8 text-center rounded-3xl space-y-3">
          <UsersRound className="w-10 h-10 mx-auto text-stone-400" />

          <h4 className="font-bold text-sm text-stone-700">
            Nenhuma turma cadastrada
          </h4>

          <p className="text-xs text-stone-500">
            Adicione uma turma para começar a estruturar suas aulas de forma direcionada.
          </p>

          <button
            type="button"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 cursor-pointer"
            style={{
              backgroundColor: THEME_COLORS.primary,
            }}
          >
            <Plus className="w-4 h-4" />
            Adicionar turma
          </button>

        </div>
      ) : (
        /* Templates Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {templates.map((tmpl, idx) => (
            <div
              key={idx}
              className="
                template-card-in
                cursor-pointer
                transition-all
                hover:scale-105
                rounded-2xl
                border
                shadow-sm
                flex flex-col
              "
              style={{
                backgroundColor: '#ffffff60',
                borderColor: THEME_COLORS.borderLight,
                animationDelay: `${300 + idx * 90}ms`,
              }}
            >
              <div
                className="h-36 relative flex flex-col justify-between overflow-hidden shrink-0"
                style={{
                  backgroundColor: 'rgba(240, 235, 234, 0.4)',
                }}
              />

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="line-clamp-2 text-base font-bold">
                  {tmpl.title}
                </h3>

                <span
                  className="inline-flex items-center self-start mt-auto px-4 py-1 rounded-full text-[10px] font-bold border"
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

              <div
                className="flex flex-col template-action-in"
                style={{
                  animationDelay: `${300 + templates.length * 90}ms`,
                }}
              >
                <span className="text-lg font-bold mb-2 pl-1">
                  Adicionar turma
                </span>

                <button
                  type="button"
                  className="mt-2 flex items-center gap-3 p-3 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer"
                  style={{
                    backgroundColor: THEME_COLORS.lightPrimary,
                    borderColor: THEME_COLORS.lightPrimary,
                    color: THEME_COLORS.primary,
                  }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5" />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-bold">
                      Nova turma
                    </p>
                    <p className="text-[10px] font-medium opacity-70">
                      Subtítulo?
                    </p>
                  </div>
                </button>
            </div>
            
        </div>
      )}
    </div>
  );
};

export default TurmasTab;
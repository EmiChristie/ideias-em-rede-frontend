import React, { useMemo, useState } from 'react';
import {
  Plus,
  Search,
  ArrowDownAZ,
  UsersRound,
  Filter,
  ChevronDown,
} from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';
import { MOCK_TURMAS } from '../../data/mockData';
import type { Turma } from '../../types';
import { CriarTurmaModal } from '../criar/CriarTurmaModal';

const SERIES_ORDER = [
  '6º Ano',
  '7º Ano',
  '8º Ano',
  '9º Ano',
  '1º Ano EM',
  '2º Ano EM',
  '3º Ano EM',
];

type SortOption = 'alphabetical' | 'quantity';

type SortDirection = 'asc' | 'desc';

interface TurmasTabProps {}

export const TurmasTab: React.FC<TurmasTabProps> = () => {
  const [turmas, setTurmas] = useState<Turma[]>(MOCK_TURMAS);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const [search, setSearch] = useState('');

  const [seriesFilter, setSeriesFilter] = useState('all');

  const [sortOption, setSortOption] =
    useState<SortOption>('alphabetical');

  const [sortDirection, setSortDirection] =
    useState<SortDirection>('asc');

  const uniqueSeries = useMemo(
    () =>
      [...new Set(turmas.map((turma) => turma.series))].sort(
        (a, b) =>
          SERIES_ORDER.indexOf(a) - SERIES_ORDER.indexOf(b)
      ),
    [turmas]
  );

  const filteredTurmas = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();

    return [...turmas]
      // Pesquisa por escola ou série
      .filter((turma) => {
        const matchesSearch =
          turma.school.toLowerCase().includes(normalizedSearch) ||
          turma.series.toLowerCase().includes(normalizedSearch);

        const matchesSeries =
          seriesFilter === 'all' ||
          turma.series === seriesFilter;

        return matchesSearch && matchesSeries;
      })

      // Ordenação
      .sort((a, b) => {
        if (sortOption === 'alphabetical') {
          const comparison = a.school.localeCompare(
            b.school,
            'pt-BR',
            { sensitivity: 'base' }
          );

          return sortDirection === 'asc'
            ? comparison
            : -comparison;
        }

        const comparison = a.qtd - b.qtd;

        return sortDirection === 'asc'
          ? comparison
          : -comparison;
      });
  }, [search, seriesFilter, sortOption, sortDirection, turmas]);

  const hasActiveFilters =
    search.trim() !== '' || seriesFilter !== 'all';

  const handleAlphabeticalSort = () => {
    if (sortOption === 'alphabetical') {
      setSortDirection((current) =>
        current === 'asc' ? 'desc' : 'asc'
      );
      return;
    }

    setSortOption('alphabetical');
    setSortDirection('asc');
  };

  const handleQuantitySort = () => {
    if (sortOption === 'quantity') {
      setSortDirection((current) =>
        current === 'asc' ? 'desc' : 'asc'
      );
      return;
    }

    setSortOption('quantity');
    setSortDirection('desc');
  };

  const clearFilters = () => {
    setSearch('');
    setSeriesFilter('all');
  };

  return (
    <div
      className="
        mt-12 p-8 lg:px-20 lg:py-6
        space-y-6
        max-w-7xl mx-auto w-full
        template-page-in
      "
    >
      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

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
            animationDelay: '80ms',
          }}
        >
          <span className="text-outline-dark">Suas</span>
          <span> Turmas</span>
        </h1>

        <p
          className="mt-3 text-sm font-semibold text-stone-500 template-page-in"
          style={{
            animationDelay: '180ms',
          }}
        >
          Pesquise, filtre por série e organize as turmas
          das suas escolas
        </p>
      </div>

      {turmas.length === 0 ? (
        <div className="p-12 mb-8 text-center rounded-3xl space-y-3">
          <UsersRound className="w-10 h-10 mx-auto text-stone-400" />

          <h4 className="font-bold text-sm text-stone-700">
            Nenhuma turma cadastrada
          </h4>

          <p className="text-xs text-stone-500">
            Adicione uma turma para começar a estruturar
            suas aulas de forma direcionada.
          </p>

          <button
            type="button"
            onClick={() => setIsCreateOpen(true)}
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
        <>
          {/* ===================================================== */}
          {/* SEARCH + FILTER + SORT */}
          {/* ===================================================== */}

          <div
            className="flex flex-col gap-3 template-page-in"
            style={{ animationDelay: '250ms' }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-stone-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar por escola ou série..."
                  className="
                    w-full
                    h-10
                    pl-10
                    pr-4
                    rounded-xl
                    border
                    bg-white/60
                    text-sm
                    font-semibold
                    outline-none
                    transition-all
                    focus:border-[#b55b43]
                    focus:ring-2
                    focus:ring-[#b55b43]/10
                  "
                  style={{
                    borderColor: THEME_COLORS.borderLight,
                    color: THEME_COLORS.textDark,
                  }}
                />
              </div>

              {/* Filtro por série */}
              <div className="relative sm:w-48">
                <Filter
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-stone-400
                    pointer-events-none
                  "
                />

                <select
                  value={seriesFilter}
                  onChange={(e) =>
                    setSeriesFilter(e.target.value)
                  }
                  className="
                    w-full
                    h-10
                    pl-10
                    pr-9
                    rounded-xl
                    border
                    bg-white/60
                    text-sm
                    font-semibold
                    outline-none
                    transition-all
                    appearance-none
                    cursor-pointer
                    focus:border-[#b55b43]
                    focus:ring-2
                    focus:ring-[#b55b43]/10
                  "
                  style={{
                    borderColor: THEME_COLORS.borderLight,
                    color: THEME_COLORS.textDark,
                  }}
                >
                  <option value="all">Todas as séries</option>
                  {uniqueSeries.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-stone-400
                    pointer-events-none
                  "
                />
              </div>

              {/* Ordenação alfabética */}
              <button
                type="button"
                onClick={handleAlphabeticalSort}
                className={`
                  h-10
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  rounded-xl
                  border
                  text-xs
                  font-bold
                  transition-all
                  cursor-pointer
                  hover:-translate-y-0.5
                  ${
                    sortOption === 'alphabetical'
                      ? 'bg-[#b55b43] text-white border-[#b55b43]'
                      : 'bg-white/60 text-stone-600 hover:border-[#b55b43]'
                  }
                `}
                style={
                  sortOption === 'alphabetical'
                    ? undefined
                    : {
                        borderColor:
                          THEME_COLORS.borderLight,
                      }
                }
              >
                <ArrowDownAZ className="w-4 h-4" />

                {sortOption === 'alphabetical' && (
                  <span className="text-[10px]">
                    {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
                  </span>
                )}
              </button>

              {/* Ordenação por quantidade de alunos */}
              <button
                type="button"
                onClick={handleQuantitySort}
                className={`
                  h-10
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-4
                  rounded-xl
                  border
                  text-xs
                  font-bold
                  transition-all
                  cursor-pointer
                  hover:-translate-y-0.5
                  ${
                    sortOption === 'quantity'
                      ? 'bg-[#b55b43] text-white border-[#b55b43]'
                      : 'bg-white/60 text-stone-600 hover:border-[#b55b43]'
                  }
                `}
                style={
                  sortOption === 'quantity'
                    ? undefined
                    : {
                        borderColor:
                          THEME_COLORS.borderLight,
                      }
                }
              >
                <UsersRound className="w-4 h-4" />

                <span>Alunos</span>

                {sortOption === 'quantity' && (
                  <span className="text-[10px]">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RESULT COUNT */}
          {/* ===================================================== */}

          {hasActiveFilters && (
            <p className="text-xs font-semibold text-stone-500">
              {filteredTurmas.length}{' '}
              {filteredTurmas.length === 1
                ? 'turma encontrada'
                : 'turmas encontradas'}
            </p>
          )}

          {/* ===================================================== */}
          {/* NO RESULTS */}
          {/* ===================================================== */}

          {filteredTurmas.length === 0 ? (
            <div
              className="
                p-12
                text-center
                rounded-3xl
                template-card-in
              "
              style={{
                borderColor: THEME_COLORS.borderLight,
              }}
            >
              <Search
                className="w-10 h-10 mx-auto text-stone-400 mb-3"
              />

              <h4 className="font-bold text-sm text-stone-700">
                Nenhuma turma encontrada
              </h4>

              <p className="text-xs text-stone-500 mt-1">
                Tente alterar o termo da pesquisa ou o filtro
                de série.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-4
                  px-4
                  py-2
                  rounded-xl
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  hover:scale-105
                  cursor-pointer
                "
                style={{
                  backgroundColor: THEME_COLORS.primary,
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            /* =================================================== */
            /* TURMAS GRID */
            /* =================================================== */

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {filteredTurmas.map((turma, idx) => (
                <div
                  key={`${turma.school}-${turma.series}`}
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
                  className="h-36 relative rounded-t-2xl flex items-center justify-center overflow-hidden shrink-0"
                  style={{
                    backgroundColor:
                      turma.color ?? 'rgba(240, 235, 234, 0.4)',
                  }}
                >
                  {turma.image ? (
                    <img
                      src={turma.image}
                      alt={`${turma.series} ${turma.idSeries}`}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  ) : (
                    <></>
                  )}
                </div>

                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    <div>
                      <h3 className="line-clamp-1 text-base font-bold">
                        {turma.series} {turma.idSeries}
                      </h3>
                      <p className="line-clamp-1 text-xs font-bold">
                        {turma.school}
                      </p>
                    </div>

                    <span
                      className="inline-flex items-center self-start mt-auto px-4 py-1 rounded-full text-[10px] font-bold border"
                      style={{
                        backgroundColor:
                          turma.qtd === 0
                            ? THEME_COLORS.lightSecondary
                            : THEME_COLORS.lightPrimary,
                        borderColor:
                          turma.qtd === 0
                            ? THEME_COLORS.lightSecondary
                            : THEME_COLORS.lightPrimary,
                        color:
                          turma.qtd === 0
                            ? THEME_COLORS.secondary
                            : THEME_COLORS.primary,
                      }}
                    >
                      {turma.qtd}{' '}
                      {turma.qtd === 1
                        ? 'aluno'
                        : 'alunos'}
                    </span>
                  </div>
                </div>
              ))}

              {/* ================================================= */}
              {/* ADD TURMA */}
              {/* ================================================= */}

              <div
                className="flex flex-col template-action-in"
                style={{
                  animationDelay: `${
                    300 + filteredTurmas.length * 90
                  }ms`,
                }}
              >
                <span className="text-lg font-bold mb-2 pl-1">
                  Adicionar turma
                </span>

                <button
                  type="button"
                  onClick={() => setIsCreateOpen(true)}
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-xl
                    border
                    transition-all
                    hover:scale-[1.02]
                    cursor-pointer
                  "
                  style={{
                    backgroundColor:
                      THEME_COLORS.lightPrimary,
                    borderColor:
                      THEME_COLORS.lightPrimary,
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
                      Associe alunos e série
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {isCreateOpen && (
        <CriarTurmaModal
          onClose={() => setIsCreateOpen(false)}
          onCreated={(turma) => {
            setTurmas((current) => [...current, turma]);
          }}
        />
      )}
    </div>
  );
};

export default TurmasTab;
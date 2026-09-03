import type { TeacherProfile, RecentWorkItem, Turma, PlanoDeAula, Atividade, MaterialTurma, Template, Material } from '../types';
import { THEME_COLORS } from '../constants/colors';

export const MOCK_TEACHER_PROFILE: TeacherProfile = {
  name: 'Prof. Henrique Ramos',
  email: 'henrique.ramos@educacao.gov.br',
  role: 'Educador da Educação Básica',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  schools: ['E.E. Cecília Meireles', 'Colégio Alvorada'],
  activeClassesCount: 6,
  createdPlansCount: 24,
  generatedMaterialsCount: 58,
  createdWorksCount: 13,
};

export const MOCK_TURMAS: Turma[] = [
  { id: 'turma-001', school: 'E.E. Cecília Meireles', series: '6º Ano', idSeries: 'A', qtd: 32, name: 'Turma A - Manhã', color: '#b55b43' },
  { id: 'turma-002', school: 'Colégio Alvorada', series: '6º Ano', idSeries: 'A', qtd: 40, name: 'Turma A - Tarde', color: '#c98a5e' },
  { id: 'turma-003', school: 'E.E. Maria Aparecida', series: '6º Ano', idSeries: 'A', qtd: 18, color: '#7d9465' },
  { id: 'turma-004', school: 'Colégio São Bento', series: '7º Ano', idSeries: 'A', qtd: 29, color: '#5b8fa3' },
  { id: 'turma-005', school: 'E.E. Cecília Meireles', series: '7º Ano', idSeries: 'A', qtd: 27, name: 'Turma A - Manhã', color: '#d5b657' },
  { id: 'turma-006', school: 'Instituto Alpha', series: '7º Ano', idSeries: 'A', qtd: 35, color: '#9b6fa3' },
  { id: 'turma-007', school: 'Colégio Alvorada', series: '8º Ano', idSeries: 'A', qtd: 22, color: '#e07b7b' },
  { id: 'turma-008', school: 'E.E. Fernando Pessoa', series: '8º Ano', idSeries: 'A', qtd: 31, color: '#6f8691' },
  { id: 'turma-009', school: 'Escola Nova Esperança', series: '8º Ano', idSeries: 'A', qtd: 0, color: '#b55b43' },
  { id: 'turma-010', school: 'Instituto Alpha', series: '9º Ano', idSeries: 'A', qtd: 38, color: '#5b8fa3' },
  { id: 'turma-011', school: 'E.E. Cecília Meireles', series: '1º Ano EM', idSeries: 'A', qtd: 36, color: '#9b6fa3' },
  { id: 'turma-012', school: 'Colégio Alvorada', series: '2º Ano EM', idSeries: 'A', qtd: 24, color: '#7d9465' },
  { id: 'turma-013', school: 'Instituto Alpha', series: '3º Ano EM', idSeries: 'A', qtd: 26, color: '#e07b7b' },
];

export const MOCK_RECENT_WORKS: RecentWorkItem[] = [
  {
    id: 'work-1',
    title: 'Debate: Liberdade de Expressão vs. Regulação de Plataformas',
    category: 'debate',
    categoryLabel: 'Roteiro de Debate',
    lastModified: 'Editado há 2 horas',
    tags: ['Ensino Médio', 'Redes Sociais', 'Direito'],
    excerpt: 'Dinâmica com 4 bancadas: Defesa da autorregulação, defensores do marco civil, moderadores da corte simulada e fact-checkers.',
    status: 'Criando',
    accentColor: THEME_COLORS.accent,
    duration: '2 aulas (100 min)',
  },
  {
    id: 'work-2',
    title: 'Plano de Aula: O Contrato Social de Hobbes a Rousseau',
    category: 'brainstorm',
    categoryLabel: 'Plano de Aula',
    lastModified: 'Editado ontem às 18:40',
    tags: ['Filosofia Política', '1º e 2º Ano EM', 'BNCC EM13CHS101'],
    excerpt: 'Comparativo visual entre o estado de natureza, pacto social e soberania popular com estudos de casos do cotidiano escolar.',
    status: 'Pronto para aula',
    accentColor: THEME_COLORS.primary,
    duration: '3 aulas',
  },
  {
    id: 'work-3',
    title: 'Oficina de Redação: Proposta de Intervenção para o Voto Jovem',
    category: 'redacao',
    categoryLabel: 'Escrita Argumentativa',
    lastModified: 'Editado há 3 dias',
    tags: ['Redação ENEM', 'Cidadania', 'Participação Política'],
    excerpt: 'Matriz com 5 eixos de repertório sociocultural e modelos de propostas com Agente, Ação, Modo e Efeito.',
    status: 'Rascunho',
    accentColor: THEME_COLORS.secondary,
    duration: '1 aula (50 min)',
  },
  {
    id: 'work-4',
    title: 'Simulação Parlamentar: Projeto de Lei sobre Uso de Telas na Escola',
    category: 'simulacao',
    categoryLabel: 'Simulação de Plenário',
    lastModified: 'Editado semana passada',
    tags: ['Fundamental II', 'Poder Legislativo', 'Oratória'],
    excerpt: 'Roteiro para divisão em comissões temáticas (Educação, Saúde, Tecnologia) e votação em plenário aberto.',
    status: 'Criando',
    accentColor: THEME_COLORS.accent,
    duration: '4 aulas',
  },
  {
    id: 'work-5',
    title: 'Matriz de Detecção de Falácias no Discurso Público',
    category: 'brainstorm',
    categoryLabel: 'Material Didático',
    lastModified: 'Editado em 14/08',
    tags: ['Letramento Midiático', 'Lógica', 'Debate'],
    excerpt: 'Cartões ilustrados de falácias: Ad Hominem, Espantalho, Falsa Dicotomia e Apelo à Autoridade com exemplos práticos.',
    status: 'Pronto para aula',
    accentColor: THEME_COLORS.primary,
    duration: 'Material Contínuo',
  },
  {
    id: 'work-6',
    title: 'Hannah Arendt: A Banalidade do Mal e a Ação Política',
    category: 'brainstorm',
    categoryLabel: 'Sequência Didática',
    lastModified: 'Editado em 08/08',
    tags: ['Sociologia/Filosofia', '3º Ano EM', 'Ética'],
    excerpt: 'Análise de trechos de "Eichmann em Jerusalém" e dinâmica sobre conformismo social e coragem civil.',
    status: 'Rascunho',
    accentColor: THEME_COLORS.secondary,
    duration: '2 aulas',
  },
];

export const MOCK_PLANOS_DE_AULA: PlanoDeAula[] = [
  { id: 'plano-001', title: 'Introdução à Equação do 2º Grau', description: 'Aula expositiva com exercícios práticos sobre discriminante e fórmula de Bhaskara.', duration: '2 aulas', status: 'Pronto para usar', turmaId: 'turma-001' },
  { id: 'plano-002', title: 'Revolução Francesa: Causas e Consequências', description: 'Análise de fontes primárias e debate sobre o iluminismo.', duration: '3 aulas', status: 'Criando', turmaId: 'turma-001' },
  { id: 'plano-003', title: 'Leitura Crítica de Textos Narrativos', description: 'Identificação de narrador, tempo e espaço em contos brasileiros.', duration: '1 aula', status: 'Criando', turmaId: 'turma-002' },
  { id: 'plano-004', title: 'Sistema Solar e Movimento dos Planetas', description: 'Simulação digital do sistema heliocêntrico.', duration: '2 aulas', status: 'Pronto para usar', turmaId: 'turma-004' },
  { id: 'plano-005', title: 'Funções do 1º Grau', description: 'Gráficos, inclinação e interceptação no plano cartesiano.', duration: '2 aulas', status: 'Criando', turmaId: 'turma-005' },
  { id: 'plano-006', title: 'O Brasil Colônia: Capitanias Hereditárias', description: 'Mapa interativo e análise de contrato de sesmaria.', duration: '3 aulas', status: 'Pronto para usar', turmaId: 'turma-006' },
  { id: 'plano-007', title: 'Proporção e Escala em Mapas', description: 'Atividade prática de leitura e construção de escalas.', duration: '1 aula', status: 'Criando', turmaId: 'turma-010' },
];

export const MOCK_ATIVIDADES: Atividade[] = [
  { id: 'atv-001', title: 'Prova Bimestral - Álgebra', type: 'prova', description: 'Avaliação com questões de equações do 2º grau e interpretação gráfica.', status: 'Pronto para usar', turmaId: 'turma-001' },
  { id: 'atv-002', title: 'Trabalho em Grupo: Mapa Mental sobre Revolução Francesa', type: 'trabalho', description: 'Produção coletá com uso de ferramentas digitais.', status: 'Criando', turmaId: 'turma-001' },
  { id: 'atv-003', title: 'Exercício: Interpretação de Texto Narrativo', type: 'exercicio', description: 'Folha de exercícios com questões de compreensão leitora.', status: 'Criando', turmaId: 'turma-002' },
  { id: 'atv-004', title: 'Oficina de Escrita: Crônica Escolar', type: 'oficina', description: 'Oficina prática de escrita criativa com roteiro e revisão entre pares.', status: 'Pronto para usar', turmaId: 'turma-004' },
  { id: 'atv-005', title: 'Lista de Exercícios: Funções', type: 'exercicio', description: '30 questões progressivas sobre funções do 1º grau.', status: 'Pronto para usar', turmaId: 'turma-005' },
  { id: 'atv-006', title: 'Prova de História: Brasil Colônia', type: 'prova', description: 'Avaliação objetiva e discursiva sobre o período colonial.', status: 'Criando', turmaId: 'turma-006' },
  { id: 'atv-007', title: 'Trabalho: Análise de Quadro Pintoresco', type: 'trabalho', description: 'Análise formal e contextual de uma obra do Barroco brasileiro.', status: 'Pronto para usar', turmaId: 'turma-010' },
];

export const MOCK_MATERIAIS_TURMA: MaterialTurma[] = [
  { id: 'mat-t-001', title: 'Apostila de Matemática Vol. 3', type: 'source', status: 'Pronto para usar', turmaId: 'turma-001' },
  { id: 'mat-t-002', title: 'Slide: Equação do 2º Grau', type: 'slide', status: 'Criando', turmaId: 'turma-001' },
  { id: 'mat-t-003', title: 'Atividade: Equações - Nível Básico', type: 'atv', status: 'Pronto para usar', turmaId: 'turma-001' },
  { id: 'mat-t-004', title: 'Slides: Revolução Francesa', type: 'slide', status: 'Criando', turmaId: 'turma-001' },
  { id: 'mat-t-005', title: 'Livro didático de Português - 6º Ano', type: 'source', status: 'Pronto para usar', turmaId: 'turma-002' },
  { id: 'mat-t-006', title: 'Atividade: Leitura de Crônicas', type: 'atv', status: 'Criando', turmaId: 'turma-002' },
  { id: 'mat-t-007', title: 'Slide: Sistema Solar', type: 'slide', status: 'Pronto para usar', turmaId: 'turma-004' },
  { id: 'mat-t-008', title: 'Apostila de Ciências - Astronomia', type: 'source', status: 'Criando', turmaId: 'turma-004' },
  { id: 'mat-t-009', title: 'Atividade: Gráficos de Funções', type: 'atv', status: 'Pronto para usar', turmaId: 'turma-005' },
  { id: 'mat-t-010', title: 'Slides: Brasil Colônia', type: 'slide', status: 'Criando', turmaId: 'turma-006' },
];

export const buildTemplateHtml = (title: string): string => `
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #333; margin: 32px; line-height: 1.6; }
  h1 { font-size: 22px; color: #b55b43; border-bottom: 3px solid #b55b43; padding-bottom: 8px; }
  h2 { font-size: 16px; color: #5b8fa3; margin-top: 24px; }
  table { width: 100%; border-collapse: collapse; margin-top: 12px; }
  th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
  th { background: #f5f0ee; }
  .label { font-weight: 700; color: #7d9465; }
</style>
  <h1>${title}</h1>
  <p><span class="label">Disciplina:</span> ______________ &nbsp;&nbsp; <span class="label">Série:</span> ______________</p>
  <p><span class="label">Duração:</span> __ aulas &nbsp;&nbsp; <span class="label">Data:</span> __/__/____</p>

  <h2>Objetivos da aula</h2>
  <ul>
    <li>Objetivo de aprendizagem 1</li>
    <li>Objetivo de aprendizagem 2</li>
    <li>Objetivo de aprendizagem 3</li>
  </ul>

  <h2>Desenvolvimento</h2>
  <table>
    <tr><th>Momento</th><th>Atividade</th><th>Tempo</th></tr>
    <tr><td>Abertura</td><td>Contextualização e levantamento de conhecimentos prévios</td><td>10 min</td></tr>
    <tr><td>Desenvolvimento</td><td>Exposição e atividade prática</td><td>30 min</td></tr>
    <tr><td>Fechamento</td><td>Síntese e avaliação formativa</td><td>10 min</td></tr>
  </table>

  <h2>Avaliação</h2>
  <p>Observação da participação e produção dos estudantes durante as atividades.</p>

  <h2>Recursos</h2>
  <ul>
    <li>Quadro / projetor</li>
    <li>Material impresso / digital</li>
  </ul>
`;

export const MOCK_TEMPLATES: Template[] = [
  {
    id: 'template-001',
    title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa',
    qtd: 1,
    description: 'Estrutura padrão de plano de aula com objetivos, desenvolvimento por momentos e avaliação.',
    htmlContent: buildTemplateHtml('Plano de Aula Padrão'),
    turmaIds: ['turma-001'],
  },
  {
    id: 'template-002',
    title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa',
    qtd: 0,
    description: 'Template em branco para preenchimento livre.',
    htmlContent: buildTemplateHtml('Plano de Aula em Branco'),
    turmaIds: [],
  },
  {
    id: 'template-003',
    title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa',
    qtd: 2,
    description: 'Modelo direcionado às aulas de leitura e interpretação.',
    htmlContent: buildTemplateHtml('Plano de Aula de Leitura'),
    turmaIds: ['turma-002', 'turma-011'],
  },
  {
    id: 'template-004',
    title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa',
    qtd: 0,
    description: 'Estrutura com etapas de laboratório e experimentação.',
    htmlContent: buildTemplateHtml('Plano de Aula de Ciências'),
    turmaIds: [],
  },
  {
    id: 'template-005',
    title: 'Escola XYZ',
    qtd: 2,
    description: 'Modelo para oficinas e atividades práticas.',
    htmlContent: buildTemplateHtml('Plano de Oficina'),
    turmaIds: ['turma-004', 'turma-008'],
  },
  {
    id: 'template-006',
    title: 'Escola XYZ Nome Maior Pra Comer Espaço Grande Aaaaaa',
    qtd: 2,
    description: 'Template focado em avaliações e provas.',
    htmlContent: buildTemplateHtml('Plano de Avaliação'),
    turmaIds: ['turma-005', 'turma-010'],
  },
  {
    id: 'template-007',
    title: 'Escola XYZ Nome Pequeno',
    qtd: 2,
    description: 'Modelo compacto para revisão rápida de conteúdo.',
    htmlContent: buildTemplateHtml('Plano de Revisão'),
    turmaIds: ['turma-006', 'turma-012'],
  },
];

let _allTemplates: Template[] = [...MOCK_TEMPLATES];

export function getAllTemplates(): Template[] {
  return _allTemplates;
}

export function getTemplateById(id: string): Template | undefined {
  return _allTemplates.find((t) => t.id === id);
}

export function addTemplate(template: Template): void {
  _allTemplates = [..._allTemplates, template];
}

export function updateTemplate(updated: Template): void {
  _allTemplates = _allTemplates.map((t) => (t.id === updated.id ? updated : t));
}

export function removeTemplate(id: string): void {
  _allTemplates = _allTemplates.filter((t) => t.id !== id);
}

export function getTurmasByTemplateId(templateId: string): Turma[] {
  const template = _allTemplates.find((t) => t.id === templateId);
  const ids = template?.turmaIds ?? [];
  return MOCK_TURMAS.filter((turma) => ids.includes(turma.id));
}

/* ========================================================= */
/* MATERIAIS                                                */
/* ========================================================= */

export const materialHtml = (title: string): string => `
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #333; margin: 24px; line-height: 1.6; }
  h1 { font-size: 17px; color: #b55b43; border-bottom: 2px solid #b55b43; padding-bottom: 6px; }
  p { font-size: 12px; }
</style>
  <h1>${title}</h1>
  <p>Este material foi estruturado para apoiar o planejamento das aulas.</p>
  <p>Conteúdo de referência, exemplos e atividades serão exibidos aqui.</p>
`;

export const MATERIAL_COLORS = [
  '#b55b43',
  '#5b8fa3',
  '#7d9465',
  '#c98a3d',
  '#8a6fb0',
  '#4f7490',
  '#b0765a',
  '#6f8f7f',
];

export const MOCK_MATERIAIS: Material[] = [
  { id: 'material-001', title: 'Livro de Português Ensino Médio Vol. 1', autoral: false, orientation: 'V', type: 'source', fileType: 'pdf', qtd: 4, htmlContent: materialHtml('Livro de Português Vol. 1'), turmaIds: ['turma-001', 'turma-002'] },
  { id: 'material-002', title: 'Livro de Português Ensino Médio Vol. 2', autoral: false, orientation: 'V', type: 'source', fileType: 'pdf', qtd: 2, htmlContent: materialHtml('Livro de Português Vol. 2'), turmaIds: ['turma-003'] },
  { id: 'material-003', title: 'Escrita Argumentativa', autoral: true, orientation: 'H', type: 'slide', fileType: 'html', qtd: 5, htmlContent: materialHtml('Escrita Argumentativa'), turmaIds: ['turma-004', 'turma-005'] },
  { id: 'material-004', title: 'Português Ensino Médio Vol. 3', autoral: false, orientation: 'V', type: 'source', fileType: 'pdf', qtd: 0, htmlContent: materialHtml('Português Vol. 3'), turmaIds: [] },
  { id: 'material-005', title: 'Redação', autoral: true, orientation: 'H', type: 'slide', fileType: 'html', qtd: 3, htmlContent: materialHtml('Redação'), turmaIds: ['turma-006'] },
  { id: 'material-006', title: 'Atividade de redação', autoral: true, orientation: 'V', type: 'atv', fileType: 'html', qtd: 6, htmlContent: materialHtml('Atividade de redação'), turmaIds: ['turma-001', 'turma-007'] },
  { id: 'material-007', title: 'Planejamento de Atividade assíncrona', autoral: true, orientation: 'V', type: 'atv', fileType: 'html', qtd: 1, htmlContent: materialHtml('Planejamento de Atividade assíncrona'), turmaIds: ['turma-008'] },
];

let _allMateriais: Material[] = [...MOCK_MATERIAIS];

export function getAllMateriais(): Material[] {
  return _allMateriais;
}

export function getMaterialById(id: string): Material | undefined {
  return _allMateriais.find((m) => m.id === id);
}

export function addMaterial(material: Material): void {
  _allMateriais = [..._allMateriais, material];
}

export function updateMaterial(updated: Material): void {
  _allMateriais = _allMateriais.map((m) => (m.id === updated.id ? updated : m));
}

export function removeMaterial(id: string): void {
  _allMateriais = _allMateriais.filter((m) => m.id !== id);
}

export function getTurmasByMaterialId(materialId: string): Turma[] {
  const material = _allMateriais.find((m) => m.id === materialId);
  const ids = material?.turmaIds ?? [];
  return MOCK_TURMAS.filter((turma) => ids.includes(turma.id));
}

let _allTurmas: Turma[] = [...MOCK_TURMAS];

export function getAllTurmas(): Turma[] {
  return _allTurmas;
}

export function getTurmaById(id: string): Turma | undefined {
  return _allTurmas.find((t) => t.id === id);
}

export function addTurma(turma: Turma): void {
  _allTurmas = [..._allTurmas, turma];
}

export function updateTurma(updated: Turma): void {
  _allTurmas = _allTurmas.map((t) => (t.id === updated.id ? updated : t));
}

export function removeTurma(id: string): void {
  _allTurmas = _allTurmas.filter((t) => t.id !== id);
  _allTemplates = _allTemplates.map((t) => {
    if (!t.turmaIds?.includes(id)) return t;
    const turmaIds = t.turmaIds.filter((tid) => tid !== id);
    return { ...t, turmaIds, qtd: turmaIds.length };
  });
  _allMateriais = _allMateriais.map((m) => {
    if (!m.turmaIds?.includes(id)) return m;
    const turmaIds = m.turmaIds.filter((tid) => tid !== id);
    return { ...m, turmaIds, qtd: turmaIds.length };
  });
}

export function getPlanosByTurmaId(turmaId: string): PlanoDeAula[] {
  return MOCK_PLANOS_DE_AULA.filter((p) => p.turmaId === turmaId);
}

export function getAtividadesByTurmaId(turmaId: string): Atividade[] {
  return MOCK_ATIVIDADES.filter((a) => a.turmaId === turmaId);
}

export function getMateriaisByTurmaId(turmaId: string): MaterialTurma[] {
  return MOCK_MATERIAIS_TURMA.filter((m) => m.turmaId === turmaId);
}

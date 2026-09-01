import React, { useEffect, useRef, useState } from 'react';
import {
  CheckCircle2,
  LayoutTemplate,
  Upload,
} from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';
import type { Turma } from '../../types';
import { BaseModal } from './BaseModal';

interface CriarTemplateModalProps {
  turmas: Turma[];
  onClose: () => void;
  onCreated: (template: {
    title: string;
    description?: string;
    qtd: number;
  }) => void;
}

const inputClassName =
  'w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#b55b43]/10';
const textareaClassName =
  'w-full px-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-[#b55b43]/10 resize-none';

const turmaKey = (turma: Turma) =>
  `${turma.school}||${turma.series}||${turma.idSeries}`;

export const CriarTemplateModal: React.FC<CriarTemplateModalProps> = ({
  turmas,
  onClose,
  onCreated,
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [fileName, setFileName] = useState('');
  const [saved, setSaved] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const toggleTurma = (key: string) => {
    setSelectedKeys((current) =>
      current.includes(key)
        ? current.filter((k) => k !== key)
        : [...current, key]
    );
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name ?? '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSaved(true);

    timerRef.current = setTimeout(() => {
      onCreated({
        title: name.trim(),
        description: description.trim() || undefined,
        qtd: selectedKeys.length,
      });
      onClose();
    }, 850);
  };

  const groupedBySchool = React.useMemo(() => {
    const groups = new Map<string, Turma[]>();
    turmas.forEach((turma) => {
      const list = groups.get(turma.school) ?? [];
      list.push(turma);
      groups.set(turma.school, list);
    });
    return groups;
  }, [turmas]);

  return (
    <BaseModal onClose={onClose}>
      {saved ? (
        <div className="py-10 text-center space-y-3">
          <CheckCircle2 className="w-14 h-14 mx-auto text-emerald-600" />

          <h3
            className="text-lg font-bold"
            style={{ color: THEME_COLORS.textDark }}
          >
            Template criado com sucesso!
          </h3>

          <p className="text-xs font-semibold text-stone-500">
            {name}
            {selectedKeys.length > 0
              ? ` • ${selectedKeys.length} ${
                  selectedKeys.length === 1
                    ? 'turma associada'
                    : 'turmas associadas'
                }`
              : ''}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Header */}
          <div className="mb-6">
            <h2
              className="text-2xl font-black tracking-tight"
              style={{ color: THEME_COLORS.textDark }}
            >
              Novo Template
            </h2>

            <p className="mt-1 text-xs font-semibold text-stone-500">
              Associe uma ou mais turmas ao template de
              plano de aula
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
              Nome do Template
            </label>
            <div className="relative">
              <LayoutTemplate className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Plano de Aula Padrão - Escola XYZ"
                className={inputClassName}
                style={{
                  backgroundColor: THEME_COLORS.bgLight,
                  borderColor: THEME_COLORS.borderLight,
                  color: THEME_COLORS.textDark,
                }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Descreva a estrutura do template e seus componentes..."
              className={textareaClassName}
              style={{
                backgroundColor: THEME_COLORS.bgLight,
                borderColor: THEME_COLORS.borderLight,
                color: THEME_COLORS.textDark,
              }}
            />
          </div>

          {/* Turmas associadas */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
              Turmas associadas
            </label>

            <div
              className="border rounded-xl overflow-y-auto max-h-44 p-2 space-y-1"
              style={{
                borderColor: THEME_COLORS.borderLight,
                backgroundColor: THEME_COLORS.bgLight,
              }}
            >
              {turmas.length === 0 && (
                <p className="text-xs font-semibold text-stone-500 px-2 py-3 text-center">
                  Nenhuma turma cadastrada.
                </p>
              )}

              {[...groupedBySchool.entries()].map(
                ([school, schoolTurmas]) => (
                  <div key={school}>
                    <div className="flex items-center gap-2 mt-1 first:mt-0">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: THEME_COLORS.primary }} />
                      <span className="text-[10px] font-black uppercase tracking-wider text-stone-500">
                        {school}
                      </span>
                    </div>

                    {schoolTurmas.map((turma) => {
                      const key = turmaKey(turma);
                      const isChecked = selectedKeys.includes(key);
                      return (
                        <label
                          key={key}
                          className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer transition-colors hover:bg-black/[0.04]"
                          style={{ color: THEME_COLORS.textDark }}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleTurma(key)}
                            className="w-4 h-4 rounded text-orange-600 shrink-0"
                          />
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: turma.color ?? THEME_COLORS.primary }} />
                          <span className="text-xs font-semibold truncate">
                            {turma.series} {turma.idSeries}
                          </span>
                          <span className="text-[10px] font-medium text-stone-400 truncate">
                            {turma.qtd} {turma.qtd === 1 ? 'aluno' : 'alunos'}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )
              )}
            </div>

            {selectedKeys.length > 0 && (
              <p className="mt-1 text-[11px] font-bold" style={{ color: THEME_COLORS.primary }}>
                {selectedKeys.length} {selectedKeys.length === 1 ? 'turma selecionada' : 'turmas selecionadas'}
              </p>
            )}
          </div>

          {/* Arquivo */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: THEME_COLORS.textDark }}>
              Arquivo (opcional)
            </label>
            <label
              className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: THEME_COLORS.lightPrimary,
                borderColor: THEME_COLORS.lightPrimary,
                color: THEME_COLORS.primary,
              }}
            >
              <span className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/60">
                <Upload className="w-5 h-5" />
              </span>
              <span className="text-left min-w-0">
                <span className="block text-sm font-bold truncate">
                  {fileName || 'Carregar arquivo'}
                </span>
                <span className="block text-[10px] font-medium opacity-70">
                  DOCX, PDF ou texto
                </span>
              </span>
              <input type="file" className="hidden" onChange={handleFile} />
            </label>
          </div>

          {/* Footer */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"
              style={{
                backgroundColor: THEME_COLORS.bgLight,
                borderColor: THEME_COLORS.borderLight,
                color: THEME_COLORS.textDark,
              }}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm transition-all hover:scale-105 cursor-pointer"
              style={{ backgroundColor: THEME_COLORS.primary }}
            >
              Criar Template
            </button>
          </div>
        </form>
      )}
    </BaseModal>
  );
};

export default CriarTemplateModal;
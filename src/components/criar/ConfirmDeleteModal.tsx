import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';
import { BaseModal } from './BaseModal';

interface ConfirmDeleteModalProps {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  return (
    <BaseModal onClose={onCancel}>
      <div className="py-6 flex flex-col items-center text-center space-y-4">
        <span
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(220, 38, 38, 0.12)', color: '#dc2626' }}
        >
          <AlertTriangle className="w-8 h-8" />
        </span>

        <h3
          className="text-xl font-black tracking-tight"
          style={{ color: THEME_COLORS.textDark }}
        >
          {title}
        </h3>

        <p className="text-sm font-semibold text-stone-500">{message}</p>

        <div className="pt-2 flex justify-center gap-3 w-full">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer"
            style={{
              backgroundColor: THEME_COLORS.bgLight,
              borderColor: THEME_COLORS.borderLight,
              color: THEME_COLORS.textDark,
            }}
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm transition-all hover:scale-105 cursor-pointer"
            style={{ backgroundColor: '#dc2626' }}
          >
            Excluir
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default ConfirmDeleteModal;

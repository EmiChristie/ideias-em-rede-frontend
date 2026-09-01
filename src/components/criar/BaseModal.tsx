import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { THEME_COLORS } from '../../constants/colors';

interface BaseModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="
          relative
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          shadow-2xl
          p-6
          sm:p-8
          modal-in
        "
        style={{
          backgroundColor: THEME_COLORS.bgLight,
          borderColor: THEME_COLORS.borderLight,
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-2"
          style={{ backgroundColor: THEME_COLORS.primary }}
        />

        <button
          onClick={onClose}
          aria-label="Fechar"
          className="
            absolute
            top-6
            right-6
            p-2
            text-stone-400
            hover:text-stone-700
            hover:bg-stone-200/60
            rounded-full
            transition-colors
            cursor-pointer
          "
        >
          <X className="w-5 h-5" />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default BaseModal;
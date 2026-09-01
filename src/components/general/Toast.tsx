import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 2500 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 z-[60] animate-in fade-in duration-300">
      <div className="flex items-center gap-3 pl-4 pr-2 py-3 rounded-2xl shadow-2xl bg-emerald-600 text-white text-xs font-bold">
        <CheckCircle2 className="w-5 h-5 shrink-0" />
        <span>{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-1 p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Fechar notificação"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
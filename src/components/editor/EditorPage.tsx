import React from 'react';
import { THEME_COLORS } from '../../constants/colors';

export const EditorPage: React.FC = () => {
  return (
    <div
      className="flex-grow flex flex-col min-w-0 overflow-x-hidden"
      style={{
        background: `linear-gradient(
          to bottom,
          ${THEME_COLORS.lightPrimary} -15%,
          ${THEME_COLORS.bgLight} 10%,
          #EBE8F3 60%
        )`,
        color: THEME_COLORS.textDark,
      }}
    >
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <p className="text-lg" style={{ color: THEME_COLORS.gray }}>
          Seu editor de conteúdo aparecerá aqui.
        </p>
      </div>
    </div>
  );
};

export default EditorPage;

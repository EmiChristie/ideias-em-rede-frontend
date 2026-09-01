import React from 'react';
import { Users, Sparkles, GraduationCap } from 'lucide-react';
import type { TeamMember } from '../../types';
import { THEME_COLORS } from '../../constants/colors';

export const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: 'Profa. Dra. Clara Medeiros',
      role: 'Coordenação Pedagógica & Ensino de Sociologia',
      bio: 'Doutora em Educação (USP) e professora da rede pública há mais de 15 anos. Pesquisa metodologias ativas no ensino de ciências humanas.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      badges: ['Mediação de Debates', 'BNCC', 'Didática'],
    },
    {
      name: 'Prof. Me. Lucas Fontes',
      role: 'Especialista em Filosofia Política & Ética',
      bio: 'Mestre em Filosofia Política (Unicamp). Criador de olimpíadas escolares de debate e oficinas de retórica para o Ensino Médio.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      badges: ['Teoria Política', 'Retórica', 'Simulações'],
    },
    {
      name: 'Dr. Rodrigo Tavares',
      role: 'Cientista Político & Letramento Midiático',
      bio: 'Pesquisador em análise de discurso público e combate à desinformação eleitoral. Consultor para projetos de cidadania digital.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      badges: ['Fact-checking', 'Instituições', 'Democracia'],
    },
    {
      name: 'Beatriz Vasconcelos',
      role: 'Design Instrucional & EdTech',
      bio: 'Especialista em UX para ambientes educacionais e desenvolvimento de recursos interativos para engajamento de jovens em sala de aula.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
      badges: ['Gamificação', 'Front-end EdTech', 'Acessibilidade'],
    },
  ];

  return (
    <section id="sobre-time" className="py-24 border-t relative overflow-hidden" style={{ borderColor: THEME_COLORS.borderLight }}>
      
      {/* Background Abstract Geometric Shapes */}
      <div 
        className="absolute top-1/4 -right-16 w-72 h-72 rounded-full pointer-events-none opacity-20"
        style={{ backgroundColor: THEME_COLORS.accent }}
      />
      <div 
        className="absolute -bottom-10 left-10 w-64 h-64 rounded-tr-[100%] pointer-events-none opacity-20"
        style={{ backgroundColor: THEME_COLORS.secondary }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header with Mixed Outline and Solid Typography */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-sm"
            style={{ 
              backgroundColor: 'rgba(234, 227, 225, 0.7)',
              borderColor: THEME_COLORS.borderLight,
              color: THEME_COLORS.primary 
            }}
          >
            <Users className="w-3.5 h-3.5" style={{ color: THEME_COLORS.accent }} />
            <span>Quem Constrói o IdeiasEmRede</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="text-outline-dark">Sobre o </span>
            <span style={{ color: THEME_COLORS.textDark }}>Nosso Time</span>
          </h2>

          <p className="text-base sm:text-lg font-medium" style={{ color: THEME_COLORS.gray }}>
            Somos educadores, cientistas sociais e desenvolvedores dedicados a transformar a prática pedagógica.
          </p>
        </div>

        {/* Team Grid (No pure white) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl p-7 border-2 hover:shadow-md transition-all flex flex-col justify-between group backdrop-blur-xs"
              style={{ 
                backgroundColor: 'rgba(234, 227, 225, 0.6)', 
                borderColor: THEME_COLORS.borderLight 
              }}
            >
              <div>
                {/* Avatar */}
                <div 
                  className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300 border-4"
                  style={{ borderColor: THEME_COLORS.bgLight }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-black leading-tight" style={{ color: THEME_COLORS.textDark }}>
                    {member.name}
                  </h4>
                  <p className="text-xs font-bold mt-1.5 min-h-[32px] flex items-center justify-center" style={{ color: THEME_COLORS.primary }}>
                    {member.role}
                  </p>
                </div>

                <p className="text-xs mt-3 text-center leading-relaxed font-medium" style={{ color: THEME_COLORS.gray }}>
                  {member.bio}
                </p>
              </div>

              {/* Badges */}
              <div className="mt-6 pt-4 border-t" style={{ borderColor: THEME_COLORS.borderLight }}>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {member.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border"
                      style={{ 
                        backgroundColor: THEME_COLORS.bgLight,
                        borderColor: THEME_COLORS.borderLight,
                        color: THEME_COLORS.textDark 
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Collaborators Callout */}
        <div 
          className="mt-16 p-8 rounded-3xl text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm border-2"
          style={{ 
            backgroundColor: THEME_COLORS.primary,
            borderColor: THEME_COLORS.accent 
          }}
        >
          <div className="flex items-center gap-5 text-center lg:text-left">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto lg:mx-0 shadow-sm"
              style={{ backgroundColor: THEME_COLORS.bgLight, color: THEME_COLORS.primary }}
            >
              <GraduationCap className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div>
              <h4 className="font-black text-white text-xl flex items-center gap-2 justify-center lg:justify-start">
                <span>É professor e gostaria de contribuir com planos de aula?</span>
                <Sparkles className="w-5 h-5 text-amber-200 hidden sm:inline" />
              </h4>
              <p className="text-sm font-medium mt-1 text-white/90">
                Nossa rede é colaborativa e aberta a contribuições pedagógicas de todo o Brasil.
              </p>
            </div>
          </div>
          <a
            href="#contato"
            className="px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-sm shrink-0 hover:bg-black"
            style={{ backgroundColor: THEME_COLORS.bgDark, color: THEME_COLORS.textLight }}
          >
            Fazer Parceria Pedagógica
          </a>
        </div>

      </div>
    </section>
  );
};

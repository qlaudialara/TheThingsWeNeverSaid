import React, { useState } from 'react';

export default function EpisodeScreen() {
  // Estado inicial simulado para o episódio
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState('Inglês (A2)');
  
  // Exemplo de dados do episódio atual
  const episodeData = {
    title: "Episódio 2: Um Estranho Familiar",
    character: "Mateo",
    dialogue: "Não esperava ver-te a esta hora perto da livraria antiga. O tempo está a mudar...",
    choices: [
      { id: 1, text: "Estava apenas a explorar a nova zona da cidade.", effect: "Confiança neutra" },
      { id: 2, text: "Vim procurar-te. Precisamos de falar sobre a fotografia.", effect: "+ Confiança de Mateo / Desbloqueia pista" },
      { id: 3, text: "Prefiro não falar sobre isso agora.", effect: "- Confiança / Distância" }
    ]
  };

  const handleChoiceClick = (choice) => {
    alert(`Escolha registada: "${choice.text}" (${choice.effect})`);
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white font-sans max-w-md mx-auto shadow-2xl overflow-hidden border border-slate-800">
      
      {/* Barra superior: Idioma e Progresso do Episódio */}
      <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
        <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
          Língua: {selectedLanguage}
        </span>
        <div className="w-1/3 bg-slate-700 h-2 rounded-full overflow-hidden">
          <div className="bg-emerald-500 h-full w-2/5"></div> {/* Progresso de 5 min */}
        </div>
      </div>

      {/* Área da História / Cena Visual (Simulada) */}
      <div className="relative flex-1 bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col justify-end p-6">
        
        {/* Indicador do Capítulo / Episódio */}
        <div className="absolute top-4 left-6 right-6 text-center">
          <h2 className="text-sm text-slate-400 font-medium">{episodeData.title}</h2>
        </div>

        {/* Caixa de Diálogo do Personagem (Mateo) */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-5 border border-slate-700 shadow-xl mb-4">
          <div className="flex items-center mb-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
            <span className="font-bold text-indigo-300 text-sm">{episodeData.character}</span>
          </div>
          <p className="text-slate-100 text-base leading-relaxed">
            "{episodeData.dialogue}"
          </p>
        </div>

        {/* Botões de Escolhas do Jogador */}
        <div className="space-y-2 mb-2">
          <p className="text-xs text-slate-400 mb-1 font-medium">O que fazes?</p>
          {episodeData.choices.map((choice) => (
            <button
              key={choice.id}
              onClick={() => handleChoiceClick(choice)}
              className="w-full text-left bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/40 hover:border-indigo-400 transition-all p-3 rounded-xl text-sm font-medium text-indigo-100 shadow-sm"
            >
              {choice.text}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

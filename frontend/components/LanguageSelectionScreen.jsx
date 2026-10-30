import React, { useState } from 'react';

export default function LanguageSelectionScreen({ onComplete }) {
  const [sourceLang, setSourceLang] = useState('Português');
  const [targetLang, setTargetLang] = useState('Inglês');
  const [step, setStep] = useState('select'); // 'select' ou 'test'
  const [testLevel, setTestLevel] = useState('A2');

  const languages = ['Português', 'Inglês', 'Romeno', 'Francês', 'Italiano'];

  const handleStartTest = () => {
    setStep('test');
  };

  const handleFinish = (level) => {
    alert(`Configuração concluída! Língua: ${sourceLang} ➔ ${targetLang} | Nível Definido: ${level}`);
    if (onComplete) onComplete({ sourceLang, targetLang, level });
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white font-sans max-w-md mx-auto shadow-2xl p-6 justify-between border border-slate-800">
      
      {step === 'select' ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl font-bold mb-2 text-indigo-400">The Things We Never Said</h1>
            <p className="text-slate-400 text-sm mb-6">Escolha a sua língua de origem e o idioma que deseja aprender na história.</p>
            
            {/* Língua de Origem */}
            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-semibold">Língua de Origem</label>
              <select 
                value={sourceLang} 
                onChange={(e) => setSourceLang(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            {/* Língua a Aprender */}
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-emerald-400 mb-2 font-semibold">Língua a Aprender</label>
              <select 
                value={targetLang} 
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
              >
                {languages.filter(l => l !== sourceLang).map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>

          <button 
            onClick={handleStartTest}
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-all font-semibold py-3.5 rounded-xl shadow-lg text-white"
          >
            Avançar para Teste de Nível
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold mb-2 text-emerald-400">Teste Rápido de Proficiência</h2>
            <p className="text-slate-400 text-sm mb-6">Como avalia o seu nível atual em {targetLang}?</p>
            
            <div className="space-y-3">
              {['A1 (Iniciante)', 'A2 (Básico)', 'B1 (Intermédio)', 'B2+ (Avançado)'].map((lvl) => {
                const code = lvl.split(' ')[0];
                return (
                  <button
                    key={code}
                    onClick={() => setTestLevel(code)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${testLevel === code ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200' : 'bg-slate-800 border-slate-700 text-slate-300'}`}
                  >
                    <span className="font-bold">{code}</span> — {lvl.split('—')[1] || ''}
                  </button>
                );
              })}
            </div>
          </div>

          <button 
            onClick={() => handleFinish(testLevel)}
            className="w-full bg-emerald-600 hover:bg-emerald-500 transition-all font-semibold py-3.5 rounded-xl shadow-lg text-white"
          >
            Começar a História
          </button>
        </div>
      )}

    </div>
  );
}

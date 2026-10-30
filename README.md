The Things We Never Said 🌍📖

Uma plataforma de aprendizagem de línguas através de histórias interativas, cinematográficas e personalizadas.

🎯 Sobre o Projeto

The Things We Never Said combina o entretenimento de um romance interativo (mistério, romance e aventura) com a eficácia de uma aplicação de aprendizagem de línguas (estilo Duolingo). O utilizador não aprende apenas vocabulário isolado; ele vive uma história imersiva dividida em episódios curtos de 5 minutos, onde cada escolha importa e as personagens reagem de forma realista.

🏗️ Estrutura do Repositório (GitHub)

Para garantir que cada módulo faça o que tem a fazer de forma organizada, o projeto está estruturado da seguinte forma:

/the-things-we-never-said
│
├── /docs                     # Roteiros, capítulos, episódios e regras narrativas
├── /figma-assets             # Diretrizes de design, assets visuais e folhas de personagens
├── /backend                  # Lógica central, APIs e motores de IA
│   ├── /ai-engine            # Adaptação de proficiência (A1-C2) e motor de diálogos
│   ├── /elevenlabs-service   # Integração para geração de voz e áudio das personagens
│   └── /database             # Registo de progresso, escolhas e perfis de utilizadores
├── /frontend                 # Interface da Aplicação (App / Lovable)
│   ├── /components           # Elementos visuais (ecrãs de história, balões de diálogo)
│   ├── /learning-modules     # Exercícios práticos (tradução, completar frases, testes)
│   └── /screens              # Fluxo de episódios, selecção de línguas e definições
└── README.md                 # Este guia do projeto


🌐 Módulos e Tecnologias Integradas

Figma (Design & UI/UX):

Responsável pelo design visual das telas, fluxos de navegação, ecrãs de diálogo e componentes da interface imersiva.

Lovable (Front-end & Lógica de Interface):

Utilizado para implementar rapidamente o aspeto visual funcional, gestão de estados, testes de proficiência e ecrãs de aprendizagem.

ElevenLabs (Áudio & Voz):

Integração no backend para transformar falas e diálogos das personagens (como o Mateo) em áudio natural na língua de aprendizagem.

Motor de IA (Roteiro & Adaptação):

LLMs integradas via API para ajustar a complexidade do vocabulário em tempo real (do nível A1 ao C2) com base no desempenho do utilizador.

🗣️ Sistema de Línguas Suportadas

O sistema suporta combinações dinâmicas entre as seguintes línguas (origem $\leftrightarrow$ aprendizagem):

🇵🇹 Português

🇬🇧 Inglês

🇷🇴 Romeno

🇫🇷 Francês

🇮🇹 Italiano

🚀 Como Começar (Primeiros Passos)

Clonar o Repositório:

git clone https://github.com/o-seu-utilizador/the-things-we-never-said.git
cd the-things-we-never-said


Explorar a Documentação:

Consulte a pasta /docs para ver a estrutura dos episódios e o enredo central.

Desenvolvimento:

Utilize o Figma para atualizar protótipos visuais.

Utilize o Lovable para estruturar os componentes do front-end.

Configure as chaves de API para o ElevenLabs e motores de IA na pasta /backend.

📌 Estado Atual & Próximos Passos

[x] Definição do Conceito e PRD (Product Requirement Document)

[x] Estrutura de Pastas e Repositório GitHub

[ ] Prototipagem inicial no Figma

[ ] Desenvolvimento do primeiro episódio (Episódio 1: A Chegada)

[ ] Integração do teste de proficiência e motor de línguas

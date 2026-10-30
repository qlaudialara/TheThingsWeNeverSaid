import os
from typing import Dict, Any

class NarrativeAIEngine:
    """
    Motor de IA para gerir os diálogos, a personalidade dos personagens (como o Mateo)
    e a adaptação da proficiência (A1 até C2) para a app 'The Things We Never Said'.
    """
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("AI_API_KEY")
        
        # Definição das diretrizes de proficiência (QECR)
        self.proficiency_guidelines = {
            "A1": "Usa vocabulário básico e cotidiano, frases curtas e simples, tempo presente e passado simples. Evita expressões idiomáticas complexas.",
            "A2": "Usa frases simples ligadas por conectores básicos. Vocabulário centrado em rotinas, família, compras e ambiente imediato.",
            "B1": "Usa linguagem mais natural e descritiva. Capaz de expressar sentimentos, opiniões simples e descrever acontecimentos passados com mais detalhe.",
            "B2": "Usa vocabulário rico, estruturas complexas, expressões idiomáticas comuns e nuances emocionais mais profundas.",
            "C1": "Linguagem fluida, sofisticada e natural, com grande variedade de sinónimos e construções literárias subtis.",
            "C2": "Domínio completo da língua, incluindo subtilezas poéticas, ironia fina e registos altamente cultos."
        }
        
        # Definição da personalidade imutável do Mateo
        self.mateo_persona = (
            "Nome: Mateo. "
            "Personalidade: Reservado, emocional mas contido, observador, leal e vulnerável em momentos específicos. "
            "Regras: Tem a sua própria vida e opiniões. Não concorda cegamente com o jogador e demonstra sentimentos através de pequenos gestos e ações, e não com falas excessivamente melosas."
        )

    def generate_dialogue(self, scene_context: str, player_proficiency: str, user_choice: str = None) -> Dict[str, Any]:
        """
        Gera o diálogo adaptado ao nível do jogador e respeitando a personalidade do Mateo.
        """
        proficiency_rule = self.proficiency_guidelines.get(player_proficiency, self.proficiency_guidelines["A1"])
        
        # Construção do prompt que seria enviado para a API de IA (ex: OpenAI/Claude)
        prompt = f"""
        [CONTEXTO DA CENA]
        {scene_context}
        
        [PERSONALIDADE DO PERSONAGEM]
        {self.mateo_persona}
        
        [NÍVEL DE PROFICIÊNCIA DO JOGADOR]
        Nível: {player_proficiency}
        Regra de escrita: {proficiency_rule}
        
        [ESCOLHA ANTERIOR DO JOGADOR]
        {user_choice if user_choice else "Início da cena"}
        
        Gera a resposta do Mateo adaptada rigorosamente ao nível {player_proficiency} e às regras de personalidade.
        """
        
        # Simulação de retorno da IA (num ambiente real, aqui faria a chamada à API da OpenAI/Claude)
        simulated_response = {
            "character": "Mateo",
            "proficiency_level": player_proficiency,
            "dialogue": f"[Texto simulado para o nível {player_proficiency}] — Olá. Não esperava ver-te por aqui a esta hora...",
            "learning_tip": "Nota gramatical ou vocabulário chave adaptado a este nível."
        }
        
        return simulated_response

# Exemplo de uso:
if __name__ == "__main__":
    engine = NarrativeAIEngine()
    
    # Teste de adaptação para um jogador nível A1
    cena = "O jogador chega a uma nova cidade e cruza-se com Mateo junto a uma antiga livraria."
    resultado = engine.generate_dialogue(scene_context=cena, player_proficiency="A1", user_choice="Cumprimentar timidamente")
    
    print("--- Teste do Motor de IA ---")
    print(f"Personagem: {resultado['character']}")
    print(f"Nível Alvo: {resultado['proficiency_level']}")
    print(f"Fala gerada: {resultado['dialogue']}")

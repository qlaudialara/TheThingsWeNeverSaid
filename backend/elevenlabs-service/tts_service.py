import os
import requests

class ElevenLabsService:
    """
    Serviço para integrar a aplicação 'The Things We Never Said' com a API da ElevenLabs,
    permitindo gerar áudio para os diálogos dos personagens (como o Mateo) ou narração.
    """
    def __init__(self, api_key: str = None):
        self.api_key = api_key or os.getenv("ELEVENLABS_API_KEY")
        self.base_url = "https://api.elevenlabs.io/v1"
        
        # IDs de vozes padrão do ElevenLabs (pode alterar conforme preferir no painel)
        # Exemplo: Voz masculina/feminina para os diálogos
        self.default_voice_id = "21m00Tcm4TlvDq8ikWAM" # Rachel / Exemplo genérico
        
    def generate_audio(self, text: str, voice_id: str = None, output_path: str = "output.mp3") -> str:
        """
        Envia texto para a ElevenLabs e guarda o ficheiro de áudio resultante.
        """
        if not self.api_key:
            raise ValueError("API Key da ElevenLabs não encontrada. Defina a variável de ambiente ELEVENLABS_API_KEY.")
            
        v_id = voice_id or self.default_voice_id
        url = f"{self.base_url}/text-to-speech/{v_id}"
        
        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": self.api_key
        }
        
        payload = {
            "text": text,
            "model_id": "eleven_multilingual_v2", # Ideal para suportar várias línguas (PT, RO, EN, FR, IT)
            "voice_settings": {
                "stability": 0.5,
                "similarity_boost": 0.75
            }
        }
        
        response = requests.post(url, json=payload, headers=headers)
        
        if response.status_code == 200:
            with open(output_path, "wb") as f:
                f.write(response.content)
            print(f"Áudio gerado com sucesso e guardado em: {output_path}")
            return output_path
        else:
            raise Exception(f"Erro ao gerar áudio na ElevenLabs: {response.status_code} - {response.text}")

# Exemplo de uso:
if __name__ == "__main__":
    # Certifique-se de configurar a sua chave de API antes de testar
    # os.environ["ELEVENLABS_API_KEY"] = "a_sua_chave_aqui"
    
    print("Módulo ElevenLabs carregado para o projeto The Things We Never Said.")

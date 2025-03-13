import { useCallback, useState } from 'react';
function useClipboard() {
    const [message, setMessage] = useState<string>("Copiar link desta vaga");


  const copyToClipboard = useCallback(async (text:string) => {
    try {
      await navigator.clipboard.writeText(text);
      setMessage('Texto copiado para a área de transferência');
    } catch (err) {
        setMessage('Falha ao copiar o texto');
    }
  }, []);
  return {copyToClipboard, message};
}
export default useClipboard;
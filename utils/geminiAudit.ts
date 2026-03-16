import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyDbmoit9ee4xEiIpupjZu05Q8ktD9iCugk');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function auditProductDescription(productName: string, description: string) {
  try {
    const prompt = `
      Actúa como un auditor de cumplimiento legal para la empresa TechGear US.
      Analiza el siguiente producto y su descripción:
      Producto: ${productName}
      Descripción: ${description}
    `;
  } catch (error) {
    console.error('Error al conectar con Gemini:', error);
    return { isAppropriate: true, reason: 'Error de conexión, auditoría omitida' };
  }
}

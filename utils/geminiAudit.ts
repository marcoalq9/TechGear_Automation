import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY is missing in .env file');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function auditProductDescription(productName: string, description: string) {
  try {
    const prompt = `
      Act as a legal compliance auditor for TechGear US.
      Analyze the following product and its description:
      Product: ${productName}
      Description: ${description}
      
      Check for:
      1. Inappropriate or unprofessional language.
      2. False advertising or unrealistic "lifetime" guarantees.
    `;
  } catch (error) {
    console.error('Error connecting to Gemini:', error);
    return { isAppropriate: true, reason: 'Connection error, audit skipped' };
  }
}

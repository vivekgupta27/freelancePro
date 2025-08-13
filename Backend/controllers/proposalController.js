import { GoogleGenAI } from "@google/genai";
import PDFDocument from 'pdfkit';
import Client from "../models/clientSchema.js";
import User from "../models/userSchema.js";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generatePrompt = (freelancerName, client) => `
You are a professional freelancer named ${freelancerName}.
Generate a formal and well-structured business proposal for the following client:

Client Details:
- Name: ${client.name}
- Company: ${client.company || "N/A"}
- Industry: ${client.industry || "N/A"}
- Location: ${client.location || "N/A"}
- Notes: ${client.notes || "No additional notes"}

✅ Format the proposal using clear headings like:
- Introduction
- Problem Statement
- Proposed Solution
- Benefits
- Call to Action

Ensure the tone is friendly yet professional. Keep it between 300–500 words.
Output plain text only — no Markdown or HTML.
`;


export const generateProposal = async (req, res,next) => {
  const clientId = req.params.clientId;
  const userId = req.user.id;
  console.log(clientId,userId)


  try {
    const client = await Client.findOne({ _id: clientId, freelancerId: userId });
    if (!client) return res.status(404).json({ message: "Client not found" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash", // or gemini-1.5-pro for more advanced results
      contents: [
        {
          role: "user",
          parts: [{ text: generatePrompt(user.name, client) }],
        },
      ],
                    generationConfig: {
    temperature: 0.7,
    maxOutputTokens: 1024
  },
    });
      const proposalText = result.candidates[0].content.parts[0].text;

    req.proposalText = proposalText?.trim() || "Proposal generation failed.";
    next();
  } catch (error) {
    console.error("Proposal generation failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const downloadProposal = (req, res) => {
  const proposalText = req.proposalText;

  const doc = new PDFDocument();
  const filename = `proposal-${Date.now()}.pdf`;

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

  doc.pipe(res);
  doc.text(proposalText, {
    lineGap: 5,
    align: 'left'
  });
  doc.end();
};
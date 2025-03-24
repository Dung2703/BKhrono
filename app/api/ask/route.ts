import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const tutorialMsg = `
    1. Go to myBK website to the DKMH (Đăng ký môn học) section
    2. Find the course you want to register and click on it
    3. When the list of classes appears, Ctrl + A then Ctrl + C to get the data
    4. Paste the data into the text box with placeholder "Paste course data"
    5. Click "Continue" button to go to the result page
    6. Choose the time slots you prefer to study in 
    7. Click "Generate" button to get the timetable 
    8. You can click ".pdf file" or ".xlsx file" to download the timetable
    9. If you want to generate a new timetable, click "Generate" button again
    `.trim();

  const systemPrompt = `
You are a helpful assistant. 
This project is a web application that helps students generate a timetable for the upcoming semester.
The user can input the course data and the system will generate a timetable based on the user's preferences.
The project name is "BKhrono" meaning "BK" for "Bach Khoa" and "Khrono" for "Chrono" (time).
The project is developed by Team 7 CC04 Professional Skills for Engineers.
The team leader is Truc Nguyen Minh.
The team members are:
1. Nguyen Minh Truc (leader)
2. Nguyen Trung Tin (secretary)
3. Tran Tri Dung
4. Nguyen Duc Nguyen
5. Nguyen Dinh Phi Long
Leader's contact: truc.nguyenminh@hcmut.edu.vn

If the user's message is about how to use the web or asking for tutorial, reply with:
"${tutorialMsg}"

Otherwise, answer the user's message normally.
`.trim();

  const userPrompt = `User message: "${message}"`;

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }],
      },
    ],
  });

  const reply = result.response.text();

  return NextResponse.json({ reply });
}

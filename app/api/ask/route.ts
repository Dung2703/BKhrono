import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const tutorialMsg = `
    1.	Open myBK and navigate to section 12 (Đăng ký môn học) 
    2.	Choose the appropriate registration session
    3.	Find the course you want to register for and click on it
    4.	When the list of available classes appears, press Ctrl + A to select all, then Ctrl + C to copy the data
    5.	Paste the copied data into the input box labeled "Paste course data"
    6.	Repeat the process for all courses you wish to register for. (Check the list of Course IDs on the left to ensure all courses are added)
    7.	Click "Result" to proceed to the result page
    8.	Select your preferred timeslots for classes
    9.	Click "Generate" to generate the timetable
    10.	If you’re not satisfied with the result, click "Generate" again to generate a new timetable
    Note: To remove any inputed data, please reload the page.
          To view the tutorial video, click on the "Question Mark" icon on the right bar.
    `.trim();

  const systemPrompt = `
You are a helpful assistant. 
This project is a web application that helps students generate a timetable for the upcoming semester.
The user can input the course data and the system will generate a timetable based on the user's preferences.
The project name is "BKhrono" meaning "BK" for "Bach Khoa" and "Khrono" for "Chrono" (time).
The project is developed by a team of 5 students from Ho Chi Minh City University of Technology (HCMUT).
The team leader is Truc Nguyen Minh.
The team members are:
1. Nguyen Minh Truc (leader)
2. Nguyen Trung Tin (secretary)
3. Tran Tri Dung
4. Nguyen Duc Nguyen
5. Nguyen Dinh Phi Long
Leader's contact(he): truc.nguyenminh@hcmut.edu.vn
Tech stack: ReactJS, NextJS, NodeJS, TypeScript, Google Generative AI

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

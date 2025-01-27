import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCuU2ednowApPvEyzaEX94YN3--ZcbP6t0");

const generatePost = async function () {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Generate five posts where people post their coding, tech, or startup projects. The post should include:
    - meta: an object with "imgSrc", "username", and "time"
    - header.title: a unique project title
    - header.deadline: a percentage (0 to 100)
    - tags: strings "className" and "text" that tell the progress of a project
    - body: a brief description of the project
    - actions: an array of four action strings (follow this format: "⬆️ 123", "⬇️", "💬 21", "🔗")
    
    always ensure that your responses ARE RANDOM AND THAT THEY ARE DIFFERENT FROM YOUR PREVIOUS RESPONSE ALWAYS
    
    ENSURE THAT THE OUTPUT IS A VALID JSON 

    WHY DO YOU KEEP RESPONDING WITH AI-POWERED RECIPE GENERATOR? ALWAYS MAKE NEW PROJECTS DONT REPEAT ANYTHING

    Sample data format:
    [   
      {
        meta: {
          imgSrc: "https://example.com/images/user1.jpg",
          username: "" (you may change this as you like, try to avoid using Jane Doe or John Doe, try real usernames and make sure they vary greatly),
          time: "1 hour ago",
        },
        header: {
          title: "Project Alpha" (This can vary, make the projects creative and different each time the prompt is given),
          deadline: 50, // Represents 50% progress (make this vary greatly)
        },
        tags: { 
          text: "In Progress", 
          className: "in-progress-tag"
        } (there can only be four types of tags (In Progress, Started, Finished, and Deployed) THIS IS NOT AN ARRAY,
        body: "This is a detailed description of Project Alpha. It's currently in progress and requires urgent attention."
        (you can make the body longer, make it more interesting for each project you generate, you can use bullet points,
        when you use bullet points, don't do markdown but do something like:
        - Information1
        - Information2),
        actions: ["⬆️ 150", "⬇️", "💬 30", "🔗"],
      }
    ],
    [... then add more of the same kind of content]
  `;
  const result = await model.generateContent(prompt);

  let responseText = result.response.text();
  responseText = responseText
    .trim()
    .replace(/^```json/, "")
    .replace(/```$/, "");

  console.log("Cleaned response:", responseText);
  return JSON.parse(responseText); // Ensure it's returned as JSON
};

export { generatePost };

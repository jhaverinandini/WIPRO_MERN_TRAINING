import { writeFile, readFile } from "fs/promises";

async function demoFS() {
  try {
    // write to file
    await writeFile("demo.txt", "Hello from Node.js FS module!");
    console.log("File written successfully");

    // read from file
    const data = await readFile("demo.txt", "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

demoFS();  
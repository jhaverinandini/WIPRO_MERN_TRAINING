import path from "path";
import { fileURLToPath } from "url";

// Create __filename and __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Node Version:", process.version);
console.log("File Name:", __filename);
console.log("Directory Name:", __dirname);

const intervalId = setInterval(() => {
  console.log("Welcome to Node.js 🚀");
}, 3000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Timer stopped after 10 seconds");
}, 10000);
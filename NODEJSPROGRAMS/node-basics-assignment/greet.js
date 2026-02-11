const name = process.argv[2];

if (!name) {
  console.log("Please enter your name");
} else {
  const now = new Date();
  console.log(`Hello, ${name}! Today is ${now.toString()}`);
}
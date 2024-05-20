import { exec } from "child_process";

function runPythonScript(script: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(`python3 src/python/${script}.py`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script: ${stderr}`);
        reject(error);
      } else {
        console.log(`Script output: ${stdout}`);
        resolve();
      }
    });
  });
}

async function main() {
  try {
    // await runPythonScript('summarize-news');
    // await runPythonScript('text-to-speech');
    console.log("Python scripts executed successfully");
  } catch (error) {
    console.error("Error running Python scripts", error);
  }
}

main().catch(console.error);

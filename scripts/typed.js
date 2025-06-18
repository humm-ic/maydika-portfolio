// Install typed.js for typing animation
import { exec } from "child_process"

console.log("Installing typed.js...")

exec("npm install typed.js", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`)
    return
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`)
    return
  }
  console.log(`Stdout: ${stdout}`)
  console.log("typed.js installed successfully!")
})

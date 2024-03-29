const core = require("@actions/core");
const alltasks = require("./tasks/main");
const { parseInput } = require("./utils/utils");

async function run() {
  try {
    const tasks = parseInput();
    console.log(`Requested tasks: ${tasks}`);
    for (const task of tasks) {
      await alltasks[task]();
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "BaekJoon/example.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map((command) => command.split(" "));

input.shift();

let set = new Set();

const setCommand = (command, value) => {
  switch (command) {
    case "add":
      set.add(value);
      break;
    case "remove":
      set.delete(value);
      break;
    case "check":
      set.has(value) ? console.log("1") : console.log("0");
      break;
    case "toggle":
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      break;
    case "all":
      for (let i = 1; i <= 20; i++) {
        set.add(i);
      }
      break;
    case "empty":
      set = new Set();
    default:
      break;
  }
};

input.forEach((element) => {
  const comm = element[0].trim();
  const value = parseInt(element[1]);

  setCommand(comm, value);
});

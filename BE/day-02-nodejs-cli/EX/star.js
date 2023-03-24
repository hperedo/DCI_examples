const arguments = process.argv.slice(2);

const rows = Number(arguments[0]);
const cols = Number(arguments[1]);
const char = arguments[2];

for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < cols; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
            line += "\u001b[31m" + char + "\u001b[0m\t";
        } else {
            line += char + "\t";
        }
    }
    console.log(line);
}

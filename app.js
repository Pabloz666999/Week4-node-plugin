import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";

const name = "M. Bayu Aji";
const nim = "F1D02310144";

console.log(chalk.blue.bold("Nama : ") + chalk.green(name));
console.log(chalk.blue.bold("NIM  : ") + chalk.gray(nim));
console.log("\n");

console.log(
  cowsay.say({
    text: "Bismillah Web lanjut! ",
    e: "^^",
    T: "U ",
    f: "dragon",
  })
);

figlet(name, (err, data) => {
  if (err) {
    console.log("Something went wrong with figlet...");
    console.dir(err);
    return;
  }
  console.log(chalk.red(data));
});

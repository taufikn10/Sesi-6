"use strict";

const ps = require("prompt-sync");
const prompt = ps();

const phi = 3.14;
var luas;
var keliling;

// Menu
console.log("\x1B[2J\x1B[0;0H");
console.log("=== Silahkan Menghitung luas dan keliling lingkaran ===");
console.log("1. Menghitung Luas");
console.log("2. Menghitung Keliling");
console.log("3. Menghitung Luas & Keliling");
console.log("=======================================================");
let pil = prompt("Masukkan pilihan : ");
console.log("========================");
// output
switch (pil) {
  case "1":
    console.log("Menghitung Luas Lingkaran");
    let r = prompt("Jari jari : ");
    luas = phi * Math.pow(r, 2);
    console.log("Luas Lingkaran: " + luas.toFixed(2));
    break;
  case "2":
    console.log("Menghitung Keliling Lingkaran");
    let r2 = prompt("Jari jari : ");
    keliling = 2 * phi * r2;
    console.log("Keliling Lingkaran: " + keliling.toFixed(2));
    break;
  case "3":
    console.log("Menghitung Keliling Lingkaran");
    let r3 = prompt("Jari jari : ");
    luas = phi * Math.pow(r3, 2);
    keliling = 2 * phi * r3;
    console.log("Luas Lingkaran: " + luas.toFixed(2));
    console.log("Keliling Lingkaran: " + keliling.toFixed(2));
    break;
  default:
    console.log("ERROR: Silahkan Masukkan Input Dengan Benar");
    break;
}

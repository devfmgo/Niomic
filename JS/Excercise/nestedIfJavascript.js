/**
 * membuat kondisi if didalam if
 */
var x = 10;
var y = 20;
var z = 30;

if (x > y) {
  if (x > z) {
    console.log("x adalah yang paling besar");
  } else {
    console.log("Nilai x adalah yang terbesar kedua");
  }
} else {
  if (x < z) {
    console.log("x adalah yang terkecil");
  } else {
    console.log("Nilai x adalan yang terkecil yang kedua");
  }
}

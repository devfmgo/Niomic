var x = 180;
var y = 185;
var z = 170;
 function maxTinggiSiswa(){
     if (x > y && x > z) {
        console.log("siswa x lebih tinggi");
     }else if(y > x && y > z){
        console.log("siswa y lebih tinggi");
     }else{
        console.log("siswa z lebih tinggi");
     }
 }
function sortUrutanTinggi() {
    if (x > y && x > z) {
      if (y > z) {
        console.log(x + ", " + y + ", " + z);
      } else {
        console.log(x + ", " + z + ", " + y);
      }
    } else if (y > x && y > z) {
      if (x > z) {
        console.log(y + ", " + x + ", " + z);
      } else {
        console.log(y + ", " + z + ", " + x);
      }
    } else if (z > x && z > y) {
      if (x > y) {
        console.log(z + ", " + x + ", " + y);
      } else {
        console.log(z + ", " + y + ", " + x);
      }
    }
}
 maxTinggiSiswa();
 sortUrutanTinggi();
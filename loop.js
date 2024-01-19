//soal 1
var j = 0;

while (j < 8) {
  if (j % 2 === 0) {
    console.log("Bilangan genap: " + j);
  } else {
    console.log("Bilangan ganjil: " + j);
  }
  j += 2; 
}

// soal 2

var deret = 20;
var jumlah = 0;
while(deret > 0) { 
  jumlah += deret; 
  deret--; 
  console.log('no: ' + jumlah)
}

console.log(jumlah);
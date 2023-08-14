//! toString() method

let names = ["Hamza","Okan","Efe","Memo"]

let stringNames = names.toString();  //? dizi verilerini string'e çevirme işlemi yapıldı.
console.log(stringNames);


//! join() method

let nameswithjoin = names.join(" ve "); //? Hamza ve Okan ve Efe ve Memo görüntüsünü oluşturur.
console.log(nameswithjoin);


//! concat() method

let phone = ["Redmi","Samsung","Honor","Iphone"]
let phone2 = ["Venüs","Casper","LG","HUAWEI"]

let joined = phone.concat(phone2);  //? concat metodu ile dizilerimizi birleştirdik. Birden çok diziyi birleştirebiliriz.
console.log(joined)

//! splice() methods

let fruits = ["orange","apple","banana","watermelon"]

fruits.splice(1,3); //?  1.indeksden başla 3.indeks dahil kes demek olur ve consolde göreceğimiz değer orange olacaktır.
console.log(fruits);

let sports = ["Football","Basketball","Tennis","Hiking"]
sports.splice(1,2, 'Skydiving','Formula1'); //? basketball ve tennis değerleri yerine yeni spor isimlerimizi koyduk
console.log(sports)

//! info ...array

let cars = ["fiat","bugatti","ford","volvo"]
let copycars =[...cars] //? cars içindeki bütün değerleri artık copycars'a verdik

console.log(copycars);

//! slice method
let names2 = ["ahmet","mehmet","ali","şeyma"];
let slice = names2.slice(1) //? dilimlemek gibi örnek olarak 1 yazdığımızda 1.indeksden itibaren gösterir 0.indeksi göstermez
console.log(slice); // mehmet ali şeyma gibi


//! indexOf() method
let index = names2.indexOf("ali"); //names.LastIndexOf kullanırsak da dizinin sonunda geriye doğru döner yani ali 2.indeks ise lastIndexOf ile 1.indeks konumu alır
console.log(index)

//! flat() method

let nums = [1,2,3,4,[5,6, [7,8]],9 ]
let flat = nums.flat(2);
console.log(nums);
console.log(flat); //? flat sayesinde dizi içindeki dizileri birleştirip sanki tek bir dizi gibi gösterdik. dizi içi dizilerde artık tek dizi gibi görünecek.
//todo = 1,2,3,4,5,6,7,8,9 gibi görünür.

//! forEach

let names3 = ["ahmet","mehmet","ali","şeyma"];
let count = 0
names3.forEach(n =>{ //--> callback function
  count++; // dizideki her değer döndüğünde count 1 artsın diyoruz.
})

console.log(count);

//! filter() method

let posts = [

    {title : "post 1", author :"Hamza"},
    {title : "post 2", author :"Neşe"},
    {title : "post 3", author :"Faruk"},
    {title : "post 4", author :"Neşe"}
];

let dansPosts = posts.filter(p => p.author === 'Neşe'); //? Neşe olanları filtreledik.
console.log(dansPosts); //? 2 adet neşe buldu ve bize bunları gösterdi.


//! Reduce() method
//? anlaşılması zor olabilir ancak mantığı şudur;
//? bir adet reduce başlangıc değerimiz oluyor genelde "arr" diye belirtilir bunun default değeri 0'dır
//? bir adet de currentValue yani anlık diziden gelen değer. Reduce ile dizimiz her döndüğünde bir önceki işlemi tutar ve yeni işlemi üstüne koyar yani toplama çıkarma çarpma gibi işlemlerde çok iyi bir şekilde anlaşılır olabiliyor.


let nums2 = [1,2,3,4,6,7,8,9];

let total = nums2.reduce((total, currentValue) => total + currentValue, 10); //? 10 dan başla demiş oluruz işlem 10 dan başlar yani total değerimizi 10 olarak kabul eder.
console.log(total);  



//! some() method

let nums3 = [1,2,3,4,6,7,8,9];

let someexample = nums3.some((n) => n > 9);  //? true-false döndürme işlemi yaptırdık 9 dan büyük değer olmadığından bu örnek de false dönecektir.
//TODO :     let nums3 = [1,2,3,4,12,6,7,8,9]; olsaydı  yukarda ki arrow function true değer gönderirdi çünkü nums dizimizde 9 dan büyük bir sayı var.
console.log(someexample);



//! every() method
let nums4 = [1,2,3,4,6,7,8,9];

let everyexample = nums4.every((n) => n > 5) // dizideki her değer 5 den büyük mü "every"/"her" hepsi koşulu karşılıyorsa true döner 1 tanesi bile sağlamazsa false değer alırız.

console.log(everyexample); //? her değer 5 den büyük olmadığından  false değer aldık.


//! find() method

let stock = [
    {item:"mouse", price:500},
    {item:"keyboard", price:300},
    {item:"vga", price:1300},
    {item:"psu", price:500}
]
let finditem = stock.find(f => f.item ==='vga');
let finditemIndex = stock.findIndex(f => f.item ==='vga');

console.log(`${finditemIndex} : ${finditem.item} ${finditem.price} TL`);


//! sort() method 
//? sıralama metodu > Alfabetik veya sayı sırası

let names4 = ["Efe","Yusuf","Nazlı","Dilara","Burak"]

let alfabetiksirala = names4.sort();
console.log(alfabetiksirala);

//---------------------------------

let nums5 = [3,1,7,2,8,4,5]

let sayi= nums5.sort();
console.log(sayi);



//! By Hamza Dogan 
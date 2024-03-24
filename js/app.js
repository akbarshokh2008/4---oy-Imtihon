// 1 - MASALA
// function sozniYoqotish(text, soz) {
//   const result = text.indexOf(soz);
//   if (result !== -1) {
//     return text.slice(0, result) + text.slice(result + soz.length);
//   }
//   return text;
// }
// console.log(sozniYoqotish("man coder uy ish non salom", "ish"));

// 2 - MASALA
// let harf = "<div>";
// function olibTashlash(n) {
//   const result = n.slice(1, -1);
//   return result;
// }
// console.log(olibTashlash(harf));

// 3 - MASALA
// let son = +prompt("son kiriting");
// function tubSon(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// if (tubSon(son)) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//  4 - MASALA
// function group(array, x, y) {
//   return array.reduce((result, item) => {
//     const key = x(item);
//     const value = y(item);
//     result[key] = result[key] || [];
//     result[key].push(value);
//     return result;
//   }, {});
// }
// let data = [
//   { country: "Uzbekistan", city: "Margilan" },
//   { country: "Qozoqiston", city: "Almata" },
//   { country: "Uzbekistan", city: "Fergan" },
//   { country: "Qozoqiston", city: "Nursulton" },
//   { country: "Uzbekistan", city: "Tashkent" },
//   { country: "Tojikiston", city: "Dushanbe" },
// ];
// let result = group(
//   data,
//   function (item) {
//     return item.country;
//   },
//   function (item) {
//     return item.city;
//   }
// );
// console.log(result);

//  5 - MASALA
// let son1 = +prompt("birinchi sonni kiriting");
// let son2 = +prompt("ikkinchi sonni kiriting");

// function jamiQoshish(n1, n2) {
//   let result = 0;
//   for (let i = n1; i <= n2; i++) {
//     result += i;
//   }
//   return result;
// }
// console.log(jamiQoshish(son1, son2));

//  6 - MASALA
// let massiv = [1, 5, 6, 1, 5, 7, 2];
// function birxilTop(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] === element) {
//         count++;
//       }
//     }
//     if (count === 1) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// console.log(birxilTop(massiv));

//  7 - MASALA
// let arr = [1, 2, 3, 5, 8, 5, 5, 5, 8, 2];
// function tekshirish(n) {
//   let count = {};
//   let result = [];
//   for (let i = 0; i < n.length; i++) {
//     let element = n[i];
//     if (!count[element]) {
//       result.push(element);
//       count[element] = true;
//     }
//   }
//   return result;
// }

// console.log(tekshirish(arr));

//  9 - MASALA
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: true,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: true,
//   },
// ];
// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   if (book.alreadyRead) {
//     console.log(`${book.author}ning "${book.title}" kitobi o'qilgan;`);
//   } else {
//     console.log(`${book.author}ning "${book.title}" kitobi o'qilmagan;`);
//   }
// }

//  10 - MASALA
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let jamiSumma = 0;

// for (let i = 0; i < products.length; i++) {
//   const chegirma = products[i].price * (1 - products[i].discount / 100);
//   const Narx = chegirma * products[i].quantity;
//   jamiSumma += Narx;
// }

// console.log("jami summa:", jamiSumma);

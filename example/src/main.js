var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

const paragraph = document.createElement("p");

// books.forEach((book) => {
//   const paragraphDescripton = document.createTextNode(
//     ` Book ${book.title} by ${book.author}
//      `
//   );
//   paragraph.appendChild(paragraphDescripton);
//   document.body.appendChild(paragraph);
//   console.log(paragraph.textContent);
// });

// for (let i = 0; i < books.length; i++) {
//   const paragraphDescription = document.createTextNode(
//     `Book ${books[i].title} by ${books[i].author}
//     `
//   );
//   console.log(paragraphDescription);
//   paragraph.appendChild(paragraphDescription);
//   console.log(paragraph.textContent);
//   document.body.appendChild(paragraph);
// }

// ====================Bonus====================

var books = [
  {
    title: "The Design of EveryDay Things",
    img: "http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    img: "http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

var bookList = document.createElement("ul");

for (let i = 0; i < books.length; i++) {
  let bookItem = document.createElement("li");
  let bookImg = document.createElement("img");
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);
  const paragraphDescription = document.createTextNode(
    `Book ${books[i].title} by ${books[i].author}`
  );
  bookItem.appendChild(paragraphDescription);
  if (books[i].alreadyRead) {
    bookItem.style.color = "grey";
  }
  bookList.appendChild(bookItem);
}
document.body.appendChild(bookList);

const addBook = function (books) {
  books.forEach((book) => {
    const newColonna = document.createElement("div");
    newColonna.classList.add("col", "col-3", "sm-col-2");

    const nuovaCard = document.createElement("div");
    nuovaCard.classList.add("card");
    nuovaCard.style.height = "700px";
    nuovaCard.innerHTML = `
        <img src="${book.img}" class="card-img-top" alt="${book.title}">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.price}</p>
            <button class="btn btn-primary">Scarta</button>
            <button class="btn btn-success">Add to cart</button>
        </div>
    `;

    newColonna.appendChild(nuovaCard);
    const row = document.getElementById("books-wall");
    row.appendChild(newColonna);
  });
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Problema contattando il server :(");
    }
  })
  .then((data) => {
    console.log(data);
    addBook(data);
  })
  .catch((err) => {
    console.log("ERRORE!", err);
  });

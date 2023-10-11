fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 404) {
        throw new Error("404 - Not Found");
      } else if (res.status === 500) {
        throw new Error("500 - Internal Server Error");
      } else {
        throw new Error("Errore generico");
      }
    }
  })
  .then((bookStores) => {
    console.log("bookStores", bookStores);
    const imgUno = document.getElementById("carduno");
    const newImguno = document.createElement("img");
    newImguno.setAttribute("src", bookStores[1].img);
    newImguno.classList.add("img-fluid", "w-100");
    imgUno.appendChild(newImguno);

    const imgDue = document.getElementById("carddue");
    const newImgdue = document.createElement("img");
    newImgdue.setAttribute("src", bookStores[1].img);
    newImgdue.classList.add("img-fluid", "w-100");
    imgDue.appendChild(newImguno);
  })
  .catch((err) => {
    console.log("error", err);
  });

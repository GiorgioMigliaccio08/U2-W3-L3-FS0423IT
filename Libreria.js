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
    newImguno.setAttribute("src", bookStores[0].img);
    card - body.appendChild(newImguno);
  })
  .catch((err) => {
    console.log("error", err);
  });

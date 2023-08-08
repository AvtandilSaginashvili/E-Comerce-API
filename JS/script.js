
var cards = {};

var row = document.getElementById("rowId");
axios.get("https://fakestoreapi.com/products").then(function(response){
    
    cards = response.data;

    console.log(cards);

    response.data.forEach(function(data) {
        
    
    var col3 = document.createElement("div");
    col3.classList.add("col-3");

    var box = document.createElement("div");
    box.classList.add("w-100");

    var link = document.createElement("a");
    link.href = "#";
    link.classList.add("a-link");

    var imgElement = document.createElement("img");
    imgElement.src = data.image;
    imgElement.alt = "card image";
    imgElement.classList.add("img-size");

    var title = document.createElement("h6");
    title.innerText = data.title;
    title.classList.add("nike");

    var price = document.createElement("p");
    price.innerText = data.price
    price.classList.add("price");

    col3.appendChild(link);
    link.appendChild(box);
    box.appendChild(imgElement);
    box.appendChild(title);
    box.appendChild(price);

    row.appendChild(col3);
    });
});
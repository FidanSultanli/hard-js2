// var ModelTdTeqi = document.getElementById("model")
// var PriceTeqi = document.getElementById("price")
// var StorageTeqi = document.getElementById("storage")
// var StockTeqi = document.getElementById("stock")

// console.log(ModelTdTeqi)


// ModelTdTeqi.innerText = "ASUS"
// PriceTeqi.innerText = "3000  AZN"
// StorageTeqi.innerText = "256GB"
// StockTeqi.innerText = "Stokda Movcuddur"







var computers = [
  { model: "ASUS", price: "3000 AZN", storage: "256GB", stock: "Stokda Mövcuddur" },
  { model: "HP", price: "2500 AZN", storage: "128GB", stock: "Stokda Mövcud deyil" },
  { model: "ACER", price: "2870 AZN", storage: "256GB", stock: "Stokda Mövcuddur" }
];

var tableBody = document.getElementById("tableBody");

computers.forEach((computer) => {
  var row = document.createElement("tr");

  var modelTd = document.createElement("td");
  modelTd.innerText = computer.model;
  row.appendChild(modelTd);

  var priceTd = document.createElement("td");
  priceTd.innerText = computer.price;
  row.appendChild(priceTd);

  var storageTd = document.createElement("td");
  storageTd.innerText = computer.storage;
  row.appendChild(storageTd);

  var stockTd = document.createElement("td");
  stockTd.innerText = computer.stock;
  row.appendChild(stockTd);

  tableBody.appendChild(row);
});

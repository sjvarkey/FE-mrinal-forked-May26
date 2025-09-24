import React from "react";

const Products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 },
  { id: 3, name: "Smartphone", price: 800 },
  { id: 4, name: "Smartwatch", price: 250 },
  { id: 5, name: "Tablet", price: 900 },
  { id: 6, name: "Keyboard", price: 50 },
  { id: 7, name: "Mouse", price: 30 },
  { id: 8, name: "Monitor", price: 400 },
  { id: 9, name: "Printer", price: 200 },
  { id: 10, name: "Projector", price: 600 },
];

function ProductList() {
  console.log('ProductList Rendered');
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <ul>
        {Products.map((product) => {
          return (
            <li>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;

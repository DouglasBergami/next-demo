import React, { useEffect, useState } from 'react';

interface Product {
  title: string
}

export default function fetchOnSideClient() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:3004/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <span>{product.title}</span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
import { GetStaticProps } from 'next';
import React from 'react';

interface Product {
  title: string
}

interface ServerSideRenderingProps {
  products: Product[]
}

export default function IncrementalStaticGeneration({products}: ServerSideRenderingProps) {

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

export const getStaticProps: GetStaticProps = async() => {
  const response = await fetch('http://localhost:3004/products')
  const products = await response.json()

  return {
    props: {
      products
    },
    revalidate: 10
  }
}
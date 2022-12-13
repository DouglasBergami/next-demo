import { GetServerSideProps } from 'next';
import React from 'react';
import Head from 'next/head'

interface Product {
  title: string
}

interface ServerSideRenderingProps {
  products: Product[]
}

export default function ServerSideRendering({products}: ServerSideRenderingProps) {

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

export const getServerSideProps: GetServerSideProps = async() => {
  const response = await fetch('http://localhost:3004/products')
  const products = await response.json()

  return {
    props: {
      products
    }
  }
}
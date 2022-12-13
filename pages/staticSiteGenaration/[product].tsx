import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring'

interface Product {
  title: string,
  price: number
}

interface ServerSideRenderingProps {
  product: Product
}

export default function StaticSiteGenerationDinamic({product}: ServerSideRenderingProps) {

  return (
    <>
      <h1>Product</h1>
      <p>{product?.title}</p>
      <p>{product?.price}</p>
    </>
  )
}

interface StaticProps extends ParsedUrlQuery {
  product: string
}

export const getStaticPaths: GetStaticPaths = async() => {
  return {
    paths: [
      {
        params: { product: '1' }
      },
      { 
        params: { product: '2' }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const { product: productId } = params as StaticProps
  const response = await fetch(`http://localhost:3004/products/${productId}`)
  const product = await response.json()

  return {
    props: {
      product
    }
  }
}
import { Card } from 'flowbite-react'
import React from 'react'

const CardProduct = (props) => {
  const defaultImage = "dsa";
  return (
    <>
      <h5 className="text-5xl font-bold leading-none text-blue-800 dark:text-white py-10">ALL</h5>
      <div className='mb-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto'>
        {props.products.map((product) => (
          <Card
            key={product.id}
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={product?.thumbnail || defaultImage}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product?.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore omnis dolorum iste excepturi, deserunt nostrum vero atque cupiditate, exercitationem id laborum ducimus obcaecati incidunt velit? Voluptatum expedita voluptatem quisquam tenetur!
            </p>
          </Card>
        ))}
      </div>
    </>
  )
}

export default CardProduct
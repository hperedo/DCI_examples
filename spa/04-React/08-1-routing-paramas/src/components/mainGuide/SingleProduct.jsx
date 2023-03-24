import { useParams } from "react-router-dom"

import data from "../../data.js"


const SingleProduct = () => {

    const {productId} = useParams()
   console.log(productId)
    const foundProduct = data.find(item => item.id === productId)


  return (
    <div>

        {foundProduct ?<div>
        
             <h1>Category : {foundProduct.category}</h1>
      <h2>Name of product : { foundProduct.name}</h2>

      <h4>price : {foundProduct.price}</h4>
        </div> : <h1> sorry product not Found 404</h1>}
        
     
        
    </div>
  )
}

export default SingleProduct
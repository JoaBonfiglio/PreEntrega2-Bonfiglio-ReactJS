import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMocks"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then( Response => {
                setProducts(Response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
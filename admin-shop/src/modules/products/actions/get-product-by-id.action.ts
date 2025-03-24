import { tesloApi } from "@/api/tesloApi"
import type { Product } from "./interfaces/product.interface"
import { getProductImageAction } from "./get-product-image.action"

export const getProductById = async( productId: string) => {
    
    //TODO pensar la creacion de un nuevo prodcuto
    
    try{

        const {data} = await tesloApi.get<Product>(`/products/${productId}`)

        return{
            ...data,
            images: data.images.map(getProductImageAction)
        }

    }catch(error){
        
        console.log(error)
        throw new Error(`Error getting by id  ${productId}`)
    }
}
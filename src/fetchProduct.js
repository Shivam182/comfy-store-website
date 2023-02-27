import { allProductsUrl } from "./util";

const fetchProducts = async () =>{
    const response = await fetch(allProductsUrl).catch((error)=>{console.log(error)});
    if (response) {
        return response.json();

    }

    return response;
};


export default fetchProducts;
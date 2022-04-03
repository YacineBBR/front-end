import React, {useState, useEffect} from 'react';

const Products = () => {

    const [data, setData] = useSate([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        
        getProducts();
    } ,[]);

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1>latest products</h1>
                    </div>
                </div>
            </div>            
        </div>
    )

}
export default Products;
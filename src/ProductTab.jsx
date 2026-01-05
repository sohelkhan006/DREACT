import './product.css'
import Product from './Product'

function ProductTab (){
   
    return (
        <>
        <Product title="LogitechmX Master" idx={0} />
        <Product title="Apple pencil (2nd gen)" idx={1}/>
        <Product title="Zebronics Zeb- Transformer" idx={2}/>
        <Product title="Portonics toad 23" idx={3}/>
        </>
    );
}

export default ProductTab;
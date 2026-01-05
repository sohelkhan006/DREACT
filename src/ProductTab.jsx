import './product.css'
import Product from './Product'

function ProductTab (){
    let options = [<li>fast</li>,<li>durable</li>];
    // let option = ["hi-tech","fast","durable"];
    return (
        <>
        <Product title="Phone" price={20000} features={options} />
        <Product title="Laptop" price={70000}/>
        <Product title="Tablet" price={35000}/>
        </>
    );
}

export default ProductTab;
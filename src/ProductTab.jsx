import './product.css'
import Product from './Product'

function ProductTab (){
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justfyContent : "center",
        alignItems : "center"
    }
   
    return (
        <div style={styles}>
           
        <Product title="LogitechmX Master" idx={0} />
        <Product title="Apple pencil (2nd gen)" idx={1}/>
        <Product title="Zebronics Transformer" idx={2}/>
        <Product title="Portonics toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;
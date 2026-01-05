import'./Product.css'

function Product ({title, price, features}){
    // const list = features.map((feature) => <li>{feature}</li>); --> Generally it is used(write logic directly inside the element)
    let isDiscount = price > 40000;
    let styles = {backgroundColor : isDiscount ? "pink" : "" };
    return (
        <div className='product-container' style={styles}>
        <h1>{title}</h1>
        <h5>Price: {price}</h5>
        <p>{features}</p>
        {isDiscount ? <p>Discout of 5%</p> : null}

        </div>
    );
}

export default Product;
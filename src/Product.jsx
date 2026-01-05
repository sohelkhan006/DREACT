import'./Product.css'
import Price from './Price';

function Product ({title, idx}){
    let oldPrices = ["12,500","11,900","1,599","599"];
    let newPrices = ["8,999","10,000","1,399","399"];
    let Description = ["8,000 DPI","intuitive surface","Designed for iPad pro","wireless"];
    return (
        <div className='product' >
        <h4>{title}</h4>
        <p>{Description[idx]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

        </div>
    );
}

export default Product;
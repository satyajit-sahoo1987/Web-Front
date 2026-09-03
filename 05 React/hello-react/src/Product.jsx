// export default function Product(props){
export default function Product({name,price,...others}){
    // console.log(".....",others)
    // const name=props.name
    // const price=props.price
    // const{name,price}=props
    return(
        <>
        <h3> Name:-{name}</h3>
        <p>₹{price}</p>
        {/* <p>{production}</p> */}
        {/* <p>{others.description}</p> */}
        {/* <p>Brand: {others.brand}</p> */}
        <p>{others.description?`description:- ${others.description}`: ''}</p>
        <p>{others.brand?`brand:- ${others.brand}`: ''}</p>
        <p>{others.production?`production:- ${others.production}`: ''}</p>
        </>
    )

}
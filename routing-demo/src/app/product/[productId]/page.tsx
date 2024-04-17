type Props = {
    params: {
        productId: String
    }
} 

export default function ProductDetails({ params }: Props){
    return(
        <h1>Details about Product{params.productId}</h1>
    )
}
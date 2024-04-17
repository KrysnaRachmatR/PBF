type Props = {
    params: {
        reviewId: String
    }
} 

export default function ReviewDetails({ params }: Props){
    return(
        <h1>Details about Review{params.reviewId}</h1>
    )
}
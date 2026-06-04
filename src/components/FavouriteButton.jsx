
const FavouriteButton = (props) => {
    return(
        <button onClick={() => props.setFavourited(!props.favourited)} className="favBtn"> {props.favourited ? "🩷" : "♡"} </button>
    )
}

export default FavouriteButton
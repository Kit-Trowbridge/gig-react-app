
const FavouriteButton = ({favourited, updateFavouritedOnGig}) => {
    return(
        <button onClick={() => updateFavouritedOnGig()} className="favBtn"> {favourited ? "🩷" : "♡"} </button>
    )
}

export default FavouriteButton

const FavouriteButton = ({favourited, setFavourited}) => {

    return(
        <button onClick={() => setFavourited(!favourited)} className="favBtn"> {favourited ? "🩷" : "♡"} </button>
    )

}

export default FavouriteButton
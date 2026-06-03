import { useState } from "react";

const FavouriteButton = () => {
    const [favourited, setFavourited] = useState(false);

    const Heart = () => {
        setFavourited(true);
    }

    const unHeart = () => {
        setFavourited(false);
    }

    return(
        <button onClick={favourited ? unHeart : Heart}> {favourited ? "❤️" : "♡"} </button>
    )

}

export default FavouriteButton
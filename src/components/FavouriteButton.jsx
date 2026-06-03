import { useState } from "react";

const FavouriteButton = () => {
    const [favourited, setFavourited] = useState(false);

    const changeHeartBasedOnCurrentState = () => {
        // if favourited is already true, set it to false and vice versa
        setFavourited(favourited ? false : true)
    }

    return(
        <button onClick={changeHeartBasedOnCurrentState}> {favourited ? "❤️" : "♡"} </button>
    )

}

export default FavouriteButton
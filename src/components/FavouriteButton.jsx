import { useState } from "react";

const FavouriteButton = () => {
    const [favourited, setFavourited] = useState(false);

    const Favourite = () => {
        setFavourited(true);
        console.log(favourited);
        console.log(typeof favourited);
    }

    return(
        <button onClick={Favourite}> {favourited ? "❤️" : "♡"} </button>
    )

}

export default FavouriteButton
import { useState } from "react";

const FavouriteButton = () => {
    const [favourited, setFavourited] = useState(false);

    return(
        <button onClick={() => setFavourited(!favourited)}> {favourited ? "❤️" : "♡"} </button>
    )

}

export default FavouriteButton
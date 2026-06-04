import FavouriteButton from "./FavouriteButton";
import { useState } from "react";


const Gig = (props) => {
    const [favourited, setFavourited] = useState(false);

    return(
        <div className="gig" style={{borderColor: favourited ? "#FF0090" : "black", backgroundColor: favourited ? "#faf2f7" : "white"}}>   
            <h3 className="name">{props.name}</h3>
            <img className="image" src={props.image} alt={`promo image for ${props.name}`} />
            <p className="description" data-testid="description">{props.description}</p>
            <p className="timeAndDate" data-testid="timeAndDate">{props.timeAndDate.toLocaleString([], {
                weekday: 'long',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
            })}</p>
            <p className="location" data-testid="location">{props.location}</p>
            <FavouriteButton favourited={favourited} setFavourited={setFavourited}/>
        </div>

    )
}

export default Gig
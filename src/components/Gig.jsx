import FavouriteButton from "./FavouriteButton";


const Gig = (props) => {
    return(
        <div className={`gig${props.favourited ? " favourited" : ""}`}>   
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
            <FavouriteButton favourited={props.favourited} updateFavouritedOnGig={props.updateFavouritedOnGig}/>
        </div>

    )
}

export default Gig
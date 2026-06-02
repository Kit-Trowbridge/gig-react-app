const Gig = (props) => {
    return(
        <div className="gig">   
            <h3 className="name">{props.name}</h3>
            <img className="image" src={props.image} alt={`promo image for ${props.name}`} />
            <p className="description">{props.description}</p>
            <p className="timeAndDate">{props.timeAndDate.toLocaleString([], {
                weekday: 'long',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
            })}</p>
            <p className="location">{props.location}</p>
        </div>

    )
}

export default Gig


// Create a component called Gig, which contains information about a gig on the website. It should contain:

// A h3 (heading) element listing the name of the band
// A img (image) element for an image of the band, using the src attribute to link to an image.
// A p (paragraph) element containing a description of the event
// A p element containing the time and date of the event
// A p element containing the location of the event
// You can come up with the event details yourself.

// Render this component as a child of the App component.

// Each element should have a descriptive className attached.
// The component should import a Gig.css file. Add some styling based on the class names you gave your elements to make it look nice.
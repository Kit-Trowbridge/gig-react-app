const timeAndDate = new Date("July 31, 2026 21:30:00")

const Gig = () => {
    return(
        <div className="gig">   
            <h3 className="name">Blood Orange</h3>
            <img className="image" src="https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg" alt="promo image for Blood Orange" />
            <p className="description">Alternative R&B</p>
            <p className="timeAndDate">{timeAndDate.toDateString()}</p>
            <p className="location">London, UK</p>
        </div>
    )
}

// const Gig = (props) => {
//     return(
//         <div className="gig">   
//             <h3 className="name">{props.name}</h3>
//             <img className="image" src={props.image} alt={`promo image for ${props.name}`} />
//             <p className="description">{props.description}</p>
//             <p className="timeAndDate">{props.timeAndDate.toString()}</p>
//             <p className="location">{props.location}</p>
//         </div>

//     )
// }

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
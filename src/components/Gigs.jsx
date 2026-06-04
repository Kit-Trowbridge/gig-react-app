import Gig from "./Gig"
import { useState } from "react";

const gigsArr = [
    {
        id: 1,
        name: "Blood Orange",
        image: "https://media.vogue.co.uk/photos/5f7af392a67cbe91f90e282b/2:3/w_2560%2Cc_limit/shutterstock_editorial_9930677ev.jpg",
        description: "Alternative R&B",
        timeAndDate: new Date("July 31, 2026 21:30:00"),
        location: "London, UK",
        favourited: false
    },
    {
        id: 2,
        name: "Niagara",
        image: "https://fastly-s3.allmusic.com/artist/mn0000330945/400/K-oL6-OtSnrgT2GAYq3wWz6KsMttLlyBmmVTZ6_CLs0=.jpg",
        description: "Synth-pop",
        timeAndDate: new Date("2026-06-10"),
        location: "Paris, FR",
        favourited: false
    },
    {
        id: 3,
        name: "Mark Knopfler",
        image: "https://cdn.mos.cms.futurecdn.net/ere6ccNj3Pf4pi99MWM2ec.jpg",
        description: "Roots Rock",
        timeAndDate: new Date("2026-11-30"),
        location: "Glasgow, UK",
        favourited: false
    },
    {
        id: 4,
        name: "Ryan Paris",
        image: "https://cdn-images.dzcdn.net/images/artist/d80185b76347931bcd9a851386e54549/1900x1900-000000-80-0-0.jpg",
        description: "Italo Disco",
        timeAndDate: new Date("February 3, 2027 19:00:00"),
        location: "Rome, IT",
        favourited: false
    }
];



const Gigs = () => {
    const [gigs, setGigs] = useState(gigsArr);

    return (
        <div className="gigs">
            { gigsArr.map((gig) => {
                // return <Gig {...gig}/>
                return (
                    <Gig
                        name={gig.name}
                        image={gig.image}
                        description={gig.description}
                        timeAndDate={gig.timeAndDate}
                        location={gig.location}
                        favourited={gig.favourited}
                    />
                )
            })}
        </div>
    )
}

export default Gigs
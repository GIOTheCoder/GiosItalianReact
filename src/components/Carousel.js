import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import pizza from "../assets/Pizza.jpg"
import lasaugna from "../assets/Las.jpg"
import spaghetti from "../assets/Spageti.jpg"

const Carousel =()=> {
    return (
        <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100 d-block img-fluid'
                    itemId={1}
                    src={pizza}
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src= {lasaugna}
                    alt='...'
                />
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src= {spaghetti}
                    alt='...'
                />
        </MDBCarousel>
    )
}

export default Carousel
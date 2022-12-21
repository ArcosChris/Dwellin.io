import CardCarousel from "../components/CardCarousel";
import Header from "../components/Header";
import Card from 'react-bootstrap/Card'
import '../css/CardCarousel.css'
import '../css/LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBuilding } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
    const rentalImages = [
        { id: 1, img: "/rentals/rental1.avif" },
        { id: 2, img: "/rentals/rental2.avif" },
        { id: 3, img: "/rentals/rental3.avif" },
        { id: 4, img: "/rentals/rental4.avif" },
        { id: 5, img: "/rentals/rental5.avif" },
        { id: 6, img: "/rentals/rental6.avif" },
    ]


    return (
        <div style={{ textAlign: 'center' }}>
            <Header />
            <div className="container-fluid mt-3 mb-5 px-5">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-xl-3">
                        <h2>Whether you are a property owner or a tenant looking for their next home.</h2>
                        <h3> We have everything you need.</h3>
                    </div>

                    <div className="col-12 col-xl-8 justify-content-start carouselParent">
                        <CardCarousel rentalImages={rentalImages} />
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row">
                    <Card className='col-9 col-lg-5 my-3 optionCard'>
                        <Card.Body className="landingPageCardBody">
                            <Card.Title><FontAwesomeIcon icon={faHouse} className="userLandingOption" /></Card.Title>
                            <Card.Subtitle className="my-2">
                                <span className="fw-bold">Are you someone looking for a new home to rent?</span>
                            </Card.Subtitle>
                            <Card.Text>
                                Dwellinn wants to help make your home search simple by looking for properties in your area that meet your expectations.
                            </Card.Text>
                            <Card.Link className="stretched-link" href="/register">Register Today</Card.Link>
                        </Card.Body>
                    </Card>


                    <Card className="col-9 col-lg-5 my-3 optionCard">
                        <Card.Body className="landingPageCardBody">
                            <Card.Title><FontAwesomeIcon icon={faBuilding} className="userLandingOption" /></Card.Title>
                            <Card.Subtitle className="my-2">
                                <span className="fw-bold">Are you a property owner looking for new tenants?</span>
                            </Card.Subtitle>
                            <Card.Text>
                                Dwellinn makes it simple for your keep track of rent payments, finding good tenants, and managing any service requests.
                            </Card.Text>
                            <Card.Link className="stretched-link" href="/register">Register Today</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
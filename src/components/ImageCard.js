import Card from 'react-bootstrap/Card';

const ImageCard = ({ item }) => {
    return (
        <Card className="bg-dark border-0">
            <Card.Img className='carouselImg' src={item.img} alt="Card image" />
        </Card>
    );
}

export default ImageCard;
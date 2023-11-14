import { SearchOutlined } from "@material-ui/icons"
import { Container, Image, Info, Title, Price, Button } from "../styles/product.styles.jsx";
import { Link } from "react-router-dom";
// This file is for handling the individual product items and how they
// will appear and their containers.

const Product = ({item}) => {

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title.split(',')[0]}</Title>
                <Title style={{fontSize: "16px"}}>{item.title.split(',')[1]}</Title>
                <Price>${item.price}</Price>
                <Link tabIndex={-1} to={`/products/${item._id}`}>
                    <Button aria-label={item.title + " page link"}>View Details</Button>
                </Link>
            </Info>
        </Container>
    )
}

export default Product
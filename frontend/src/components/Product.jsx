import { SearchOutlined } from "@material-ui/icons"
import {Info, Container, Image, IconButton, ProdInfo, Name, Price} from "../styles/product.styles.jsx";
import { Link } from "react-router-dom";
// This file is for handling the individual product items and how they
// will appear and their containers.

const Product = ({item}) => {

    return (
        <Container>
            <Image src={item.img}/>
            <Info aria-label={item.title + " link"}>
                <Link to={`/products/${item._id}`}>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                </Link>
            </Info>
            <ProdInfo aria-label={item.title + " link"}>
                <Name>{item.title.split(',')[0]}</Name>
                <Name style={Price}>${item.price}</Name>
            </ProdInfo>
        </Container>
    )
}

export default Product
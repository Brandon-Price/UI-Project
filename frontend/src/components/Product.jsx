import { SearchOutlined } from "@material-ui/icons"
import {Info, Container, Image, Button, IconButton} from "product.styles.jsx";

// This file is for handling the individual product items and how they
// will appear and their containers.

// Blue Color Code #497dc8
// Red Color Code #c04547
// Green Color Code #3fa24f



const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Button>Quick Add</Button>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
            </Info>
        </Container>
    )
}

export default Product
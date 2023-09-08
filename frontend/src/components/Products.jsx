import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";

// Focuses on handling and organzing the product display page

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 200px;
    justify-content: space-between;
    overflow:hidden;
`

const Products = () => {
    return (
        <Container>
            {products.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products
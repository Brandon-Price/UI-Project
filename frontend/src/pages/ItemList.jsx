import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {Container, Header, FilterContainer, Filter, FilterText, Select, Option} from "../styles/ItemList.styles";

// Will be handling the item filters and their containers

const ItemList = () => {
    return(
        <Container>
            <Navbar/>
            <SubHeader/>
            <Header>Mugs</Header>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Filter:</FilterText>
                    <Select>
                        <Option disable selected>Filter</Option>
                        <Option>Country</Option>
                        <Option>City</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select>
                        <Option selected>Price Ascending</Option>
                        <Option>Price Descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Footer/>
        </Container>
    )
}

export default ItemList
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";

// Will be handling the item filters and their containers

const Container = styled.div`
    
`

const Header = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border-radius: 20px;
`

const Option = styled.option``

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
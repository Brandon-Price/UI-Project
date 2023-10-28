import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer} from "../styles/ItemList.styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// Will be handling the item filters and their containers

const ItemList = ({user, setUser}) => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("Price Ascending");
    const page = 'prod';

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };

    return(
        <Container style={{ marginTop: "61px" }}>
            <Navbar user={user} page={page}/>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
                        <Option value="ascending">Price Ascending</Option>
                        <Option value="descending">Price Descending</Option>
                        <Option value="weightDesc">Weight Descending</Option>
                        <Option value="weightAsc">Weight Ascending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat = {cat} filters={filters} sort={sort}/>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default ItemList
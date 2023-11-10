import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import FilterInput from "../components/FilterInput";
import { Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer } from "../styles/ItemList.styles";
import { FilterShelfContainer, FilterLabelContainer, FilterLabel, FilterShelf, FilterType, FilterName, PriceInput } from "../styles/Products.styles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Will be handling the item filters and their containers

const ItemList = ({user, setUser}) => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("Price Ascending");
    const page = 'prod';

    // const handleFilter = (e) => {
    //     const value = e.target.value;
    //     setFilter({
    //         ...filters,
    //         [e.target.name]: value,
    //     });
    // };

    // Filter
    const filterNames = [
        "Apples",
        "Bananas",
        "Berries",
        "Citrus",
        "Grapes",
        "Melon",
        "Peaches",
        "Pears",
        "Plums",
        "Tropical"
    ]

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFilter((prevFilters) => ({
            ...prevFilters,
            [value]: checked,
        }))
        // console.log(filters);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <Container style={{ marginTop: "61px" }}>
            <Navbar user={user} page={page}/>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
                        <Option value="ascending">Price Ascending</Option>
                        <Option value="descending">Price Descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}>
                <FilterShelfContainer>
                <FilterLabelContainer>
                    <FilterLabel>Filter By</FilterLabel>
                </FilterLabelContainer>
                <FilterShelf>
                    <FilterType>Fruit Type</FilterType>
                    {filterNames.map((name) => (
                        <FilterInput value={name} onChange={handleCheckboxChange}/>
                    ))}
                    <br></br>
                    <FilterType>Price</FilterType>
                    <FilterName>
                    $ <input style={PriceInput} type="number" min="0.01" step="0.01" placeholder="MIN"/>
                    </FilterName>
                    <FilterName>
                    $ <input style={PriceInput} type="number" min="0.01" step="0.01" placeholder="MAX"/>
                    </FilterName>
                </FilterShelf>
                </FilterShelfContainer>
                <Products cat = {cat} filters={filters} sort={sort}/>
            </div>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default ItemList
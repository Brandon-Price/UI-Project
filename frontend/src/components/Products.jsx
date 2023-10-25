import styled from "styled-components";
import Product from "./Product";
//import { products } from "../data";
import axios from "axios";
import {useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FilterShelfContainer, FilterLabelContainer, FilterLabel, FilterShelf, FilterType, FilterName, PriceInput } from "../styles/Products.styles";


// Focuses on handling and organzing the product display page
const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 25px;
    margin-left: 15px;
    margin-right: 15px;
    justify-content: space-between;
    overflow:hidden;
    max-width: 1920px;
    border-top: 2px solid #d4d4d4;
    border-bottom: 2px solid #d4d4d4;
`

/* Added for formatting */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filterSelect, setFilters] = useState([]);
    // grab passed string from search bar, or "" if empty
    const [searchFilter, setSearchFilter] = useState(useLocation().state);

    // Grabs all products
    useEffect(() => {
        const getProducts = async () => {
          try {
            const res = await axios.get("http://localhost:5000/api/products");
            setProducts(res.data);
            console.log(res)
          } catch (err) {}
        };
        getProducts();
      }, []);

      

    // useEffect to handle item filter, so by country or city
    // this doesn't work properly
    // TODO
    useEffect(() => { 
        setFilters(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key] === value
              )
        )
        );
    }, [products, filters]);

    // Sorting by item prices ascending and descending
    useEffect(() => {
        if (sort === "ascending") {
          setFilters((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else if (sort === "descending"){
          setFilters((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
        // else if (sort === "quantity"){
        //   setFilters((prev) =>
        //     [...prev].sort((a, b) => b.quantity - a.quantity)
        //   );
        // }
      }, [sort]);

    return (
      <Wrapper>
        <FilterShelfContainer>
          <FilterLabelContainer>
            <FilterLabel>Filter By</FilterLabel>
          </FilterLabelContainer>
          <FilterShelf>
            <FilterType>Farming Practices</FilterType>
            <FilterName>
              <input type="checkbox"/> Organic
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Non-Organic
            </FilterName><br></br>
            <FilterType>Fruit Type</FilterType>
            <FilterName>
              <input type="checkbox"/> Berries
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Pits
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Cores
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Citrus
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Melons
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Tropical
            </FilterName><br></br>
            <FilterType>Weight</FilterType>
            <FilterName>
              <input type="checkbox"/> Small
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Medium
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Large
            </FilterName><br></br>
            <FilterType>Price</FilterType>
            <FilterName>
              $ <input style={PriceInput} type="number" min="0.01" step="0.01" placeholder="MIN"/>
            </FilterName>
            <FilterName>
              $ <input style={PriceInput} type="number" min="0.01" step="0.01" placeholder="MAX"/>
            </FilterName>
            <FilterType>MISC</FilterType>
            <FilterName>
              <input type="checkbox"/> Store Picks
            </FilterName>
            <FilterName>
              <input type="checkbox"/> Best Sellers
            </FilterName>
            <FilterName>
              <input type="checkbox"/> In-Season
            </FilterName>
            <FilterName>
              <input type="checkbox"/> On Sale
            </FilterName>
          </FilterShelf>
        </FilterShelfContainer>
        <Container>
                 {filters
                    ? filterSelect.map((item) => <Product item={item} key={item._id} />)
                    : products
                        .map((item) => <Product item={item} key={item._id} />)}
        </Container>
      </Wrapper>
    )
}

export default Products
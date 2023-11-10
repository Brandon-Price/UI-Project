import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import {useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton, SkeleCon } from "../styles/Products.styles";


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
    width: 100%;
    border-top: 2px solid #d4d4d4;
    border-bottom: 2px solid #d4d4d4;
`

/* Added for formatting */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1920px;
`

const Products = ({cat, filters, priceFilter, sort}) => {
    const [products, setProducts] = useState([]);
    const [filteredProds, setFilteredProds] = useState([]);
    // grab passed string from search bar, or "" if empty
    const searchFilter = useSelector(state => state.searchFilter.content)

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

    // Filtering items based on selected filters.
    useEffect(() => {
      const selectedCategoryFilters = Object.keys(filters).filter((key) => filters[key]);
      let newFilteredProds = products;

      if (selectedCategoryFilters.length > 0) {
        newFilteredProds = newFilteredProds.filter((product) =>
          selectedCategoryFilters.some((filterKey) => product.categories.toLowerCase() === filterKey.toLowerCase())
        );
      }

      if (priceFilter.min !== '' && priceFilter.max !== '') {
        newFilteredProds = newFilteredProds.filter((product) =>
          product.price >= parseFloat(priceFilter.min) && product.price <= parseFloat(priceFilter.max)
        );
      }

      setFilteredProds(newFilteredProds);
    }, [filters, products, priceFilter]);

    // Sorting by item prices ascending and descending
    useEffect(() => {
        if (sort === "ascending") {
          setFilteredProds((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else if (sort === "descending"){
          setFilteredProds((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);

    return (
      <Wrapper>
        <Container>
        {products.length > 0 ? (
          filteredProds.map((item) => <Product item={item} key={item._id} />)
        ) : (
          Array.from({ length: 50 }).map((_, index) => (
            <SkeleCon>
              <Skeleton></Skeleton>
            </SkeleCon>
          ))
        )}
        </Container>
      </Wrapper>
    )
}

export default Products
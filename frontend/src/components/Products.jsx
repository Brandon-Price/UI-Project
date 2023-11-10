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

const Products = ({cat, filters, sort}) => {
    const [products, setProducts] = useState([]);
    const [filterSelect, setFilters] = useState([]);
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
      }, [sort]);

    return (
      <Wrapper>
        <Container>
        {products.length > 0 ? (
          filters
          ? filterSelect.filter(filterSelect => filterSelect.title.toLowerCase()
          .includes(searchFilter.toLowerCase()))
          .map((item) => <Product item={item} key={item._id} />)
          : products.filter(filterSelect => filterSelect.title.toLowerCase()
          .includes(searchFilter.toLowerCase()))
              .map((item) => <Product item={item} key={item._id} />)
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
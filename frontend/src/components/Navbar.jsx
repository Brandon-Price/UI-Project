import {Close, Search, LocalMallOutlined} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice.js';
import { toRemoveAll } from '../redux/cartRedux.js';
import { updateFilter } from '../redux/searchFilter.js';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import {Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line, CartAnim, SubCon, Expand, ProductMenu, ProdButton, MenuButtons, MenuContainer, Logout} from "../styles/Navbar.styles.jsx"

// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = ({page}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.quantity);
    const searchFilter = useSelector(state => state.searchFilter)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // handle search routing
    let navigate = useNavigate();
    
    const handleProductRoute = (passedSearchFilter) => {
            dispatch(updateFilter(passedSearchFilter));
            let path = '/products/';
            navigate(path, {state: {searchFilter: passedSearchFilter}});
    };

    // When users logout their cart should be set to nothing
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
        dispatch(toRemoveAll(cartItems))
        // navigate("/"); uncomment to let user nav to home on logout rather than log in page.
    };

    // search bar enter key handler, passes searchFilter prop to products page
    const handleSearch = (e) => {
        if (e.key === "Enter") {
            // handle move to itemlist
            console.log("moving to products page, filter: " + e.target.value);
            handleProductRoute(e.target.value);
        }
    };

    /* Expanding Menu */
    const parentRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
        revertChild();
    }

    /* Product Menu */
    const childRef = useRef(null);
    const handleTransitionEnd = () => {
        if (isExpanded) {
            childRef.current.style.display = "block";
        }
    }
    const revertChild = () => {
        childRef.current.style.display = "none";
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                <Logo style={{color:"white"}}>TBD</Logo>
                <SubCon>
                    <Wrapper>
                        <Left>
                            <MenuLink to="/" onClick={isExpanded ? handleToggle : ""}>
                                <Menu aria-label={"Home Page Link"} style={{textDecoration: page === 'home' ? 'underline' : 'none'}}>Home</Menu>
                            </MenuLink>
                            <ProdButton onClick={handleToggle}>
                                <Menu aria-label={"Press Enter for Product Page Options"} style={{textDecoration: page === 'prod' ? 'underline' : 'none'}}>Products</Menu>
                            </ProdButton>
                            <MenuLink to="/about" onClick={isExpanded ? handleToggle : ""}>
                                <Menu aria-hidden="true" style={{textDecoration: page === 'about' ? 'underline' : 'none'}}>About</Menu>
                            </MenuLink>
                        </Left>
                    </Wrapper>
                </SubCon>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Input aria-label={"Search bar, to search type your item and press enter"} placeholder = "Search" onKeyDown={(e) => handleSearch(e)}/>
                        <Close style={{color:"gray"}} onClick={() => dispatch(updateFilter(""))}></Close>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (<Menu style={{alignItems: "center"}}><Title style={{
                        cursor: "default", 
                        color:"white", 
                        fontSize: "19px",
                        margin: "0"}}>
                            Hello {user.username}</Title><Logout aria-label={"Logout"} style={{color:"white", padding:'3px'}} onClick={handleLogout}/></Menu>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Login</Menu>
                    </MenuLink>)}
                    <Menu>
                        <MenuLink to="/cart">
                            <CartAnim>
                                <Badge aria-label={"Cart Page Link"} badgeContent={cartItems} color = "primary" overlap="rectangular" style={{ padding: '1px' }}>
                                    <LocalMallOutlined aria-label={"Cart Page Link"}/>
                                </Badge>
                            </CartAnim>
                        </MenuLink>
                    </Menu>
                </Right>
            </Wrapper>
            <Expand ref={parentRef} style={{height: isExpanded ? "450px" : "0"}} onTransitionEnd={handleTransitionEnd}>
                <ProductMenu ref={childRef} style={{display: "none"}} onMouseLeave={handleToggle}>
                    <MenuContainer>
                        <MenuLink to="/products/">
                            <MenuButtons aria-label={"All Products Page Link"}>All Products</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/store-picks">
                            <MenuButtons aria-label={"Store Picks Page Link"}>Store Picks</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/best-sellers">
                            <MenuButtons aria-label={"Best Sellers Page Link"}>Best Sellers</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/in-season">
                            <MenuButtons aria-label={"In-Season Page Link"}>In-Season</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/exotic-fruits">
                            <MenuButtons aria-label={"Exotic Fruits Page Link"}>Exotic Fruits</MenuButtons>
                        </MenuLink>
                    </MenuContainer>
                </ProductMenu>
            </Expand>
        </Container>
    )
}

export default Navbar
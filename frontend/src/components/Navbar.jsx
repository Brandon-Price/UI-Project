import {Close, Search, LocalMallOutlined, ExitToApp} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice.js';
import { toRemoveAll } from '../redux/cartRedux.js';
import { updateFilter } from '../redux/searchFilter.js';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import {Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line, CartAnim, SubCon, Expand, ProductMenu, ProdButton, MenuButtons, MenuContainer} from "../styles/Navbar.styles.jsx"

// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = ({page}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.quantity);
    const searchFilter = useSelector(state => state.searchFilter)

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
                <MenuLink to="/">
                    <Logo>TBD</Logo>
                </MenuLink>
                <SubCon>
                    <Wrapper>
                        <Left>
                            <MenuLink to="/" onClick={isExpanded ? handleToggle : ""}>
                                <Menu style={{textDecoration: page === 'home' ? 'underline' : 'none'}}>Home</Menu>
                            </MenuLink>
                            <ProdButton onClick={handleToggle}>
                                <Menu style={{textDecoration: page === 'prod' ? 'underline' : 'none'}}>Products</Menu>
                            </ProdButton>
                            <MenuLink to="/about" onClick={isExpanded ? handleToggle : ""}>
                                <Menu style={{textDecoration: page === 'about' ? 'underline' : 'none'}}>About</Menu>
                            </MenuLink>
                        </Left>
                    </Wrapper>
                </SubCon>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style ={{color: "gray", fontSize:20}}/>
                        <Line/>
                        <Input placeholder = "Search" onKeyDown={(e) => handleSearch(e)}/>
                        <Close style={{color:"gray"}} onClick={() => dispatch(updateFilter(""))}></Close>
                    </SearchContainer>
                </Center>
                <Right>
                    {user ? (<Menu><Title style={{cursor: "default", color:"white"}}>Hello {user.username}</Title><ExitToApp style={{color:"white", padding:'3px'}} onClick={handleLogout}/></Menu>) : (<MenuLink to="/account-log-in-sign-up">
                        <Menu>Login</Menu>
                    </MenuLink>)}
                    <Menu>
                        <MenuLink to="/cart">
                            <CartAnim>
                                <Badge badgeContent={cartItems} color = "primary" overlap="rectangular" style={{ padding: '1px' }}>
                                    <LocalMallOutlined/>
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
                            <MenuButtons>All Products</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/store-picks">
                            <MenuButtons>Store Picks</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/best-sellers">
                            <MenuButtons>Best Sellers</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/in-season">
                            <MenuButtons>In-Season</MenuButtons>
                        </MenuLink>
                        <MenuLink to="/exotic-fruits">
                            <MenuButtons>Exotic Fruits</MenuButtons>
                        </MenuLink>
                    </MenuContainer>
                </ProductMenu>
            </Expand>
        </Container>
    )
}

export default Navbar
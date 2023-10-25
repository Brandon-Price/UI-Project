import {Search, LocalMallOutlined, ExitToApp} from '@material-ui/icons';
import {Badge} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../redux/userSlice.js';
import { toRemoveAll } from '../redux/cartRedux.js';
import { useNavigate } from "react-router-dom";
import {Title, MenuLink, Container, Wrapper, Left, SearchContainer, Input, Center, Right, Logo, Menu, Line, CartAnim, SubCon} from "../styles/Navbar.styles.jsx"

// Its also a sticky navbar so when you scroll it follows

// Creating navigation bar
const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart.quantity);

    // handle search routing
    let navigate = useNavigate();
    
    const handleProductRoute = (passedSearchFilter) => {
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
                            <MenuLink to="/">
                                <Menu>Home</Menu>
                            </MenuLink>
                            <MenuLink to="/products/">
                                <Menu>Products</Menu>
                            </MenuLink>
                            <MenuLink to="/order-history/">
                                <Menu>About</Menu>
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
        </Container>
    )
}

export default Navbar
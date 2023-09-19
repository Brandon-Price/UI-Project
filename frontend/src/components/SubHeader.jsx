import {InfoOutlined} from '@material-ui/icons';
import {MenuLink, Container, Wrapper, Left, Right, Menu, Menu2} from "../styles/SubHeader.styles";


// The subheader contains the pages to go around the site


const SubHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuLink to="/">
                        <Menu>Home</Menu>
                    </MenuLink>
                    <MenuLink to="/products/">
                        <Menu>Products</Menu>
                    </MenuLink>
                    <MenuLink>
                        <Menu>Order History</Menu>
                    </MenuLink>
                </Left>
                <Right>
                    <InfoOutlined style ={{color: "black", fontSize:20}}/>
                    <MenuLink to="/help-center">
                        <Menu2>Help Center</Menu2>
                    </MenuLink>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default SubHeader
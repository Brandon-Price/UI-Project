import {InfoOutlined} from '@material-ui/icons';
import {Container, Wrapper, Left, Right, Menu, Menu2} from "../styles/SubHeader.styles";

// The subheader contains the pages to go around the site


const SubHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Menu>Home</Menu>
                    <Menu>Products</Menu>
                    <Menu>Order History</Menu>
                </Left>
                <Right>
                    <InfoOutlined style ={{color: "black", fontSize:20}}/>
                    <Menu2>Help Center</Menu2>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default SubHeader
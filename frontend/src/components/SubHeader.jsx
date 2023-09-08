import styled from "styled-components";
import {InfoOutlined} from '@material-ui/icons';

// The subheader contains the pages to go around the site

const Container = styled.div`
    height: 100px;
    width: 100%;
    background-color: white;
    position: relative;
`

const Wrapper = styled.div`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F5F5F5;
`

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    padding: 10px 0px;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 10px;
`

const Menu = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 20px;
`

const Menu2 = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 5px;
`

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
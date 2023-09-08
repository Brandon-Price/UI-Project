// File that will have the regristration and sign in
import styled from "styled-components";
import { Facebook, Twitter, Reddit, GitHub } from "@material-ui/icons";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;   
`

const Line = styled.div`
    background-color: gray;
    height: 34%;
    width: 1;
    color: gray;
`

const LeftContainer = styled.div`
    width: 50%;
    min-height: 300px;
    
`

const RightContainer = styled.div`
    width: 50%;
    min-height: 308px;
`

const Wrapper = styled.div`
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

const Form = styled.form`
    display: flex;
    margin: 7px 4px 0px 0px;
    padding: 7px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Button = styled.button`
    padding: 8px;
    font-size: 13px;
    background-color: white;
    border-color: #497dc8;
    cursor: pointer;
    color: #497dc8;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;
    margin-left: 5px;

    &:hover {
        transform: scale(1.1);
        background-color: #497dc8;
        color: white;
    }
`

const SignUpSignIn = () => {
    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder="First Name"/>
                    </Form>
                    <Form>
                        <Input placeholder="Last Name"/>
                    </Form>
                    <Form>
                        <Input placeholder="Email"/>
                    </Form>
                    <Form>
                        <Input placeholder="Password"/>
                    </Form>
                    <Form>
                        <Input placeholder="Confirm Password"/>
                    </Form>
                    <Button>Create Account</Button>
                </LeftContainer>
            </Wrapper>
            <Line>:</Line>
            <Wrapper>
            <RightContainer>
                    <Title>Already have an account?</Title>
                    <SocialContainer>
                        <SocialIcon>
                            <Facebook/>
                        </SocialIcon>
                        <SocialIcon>
                            <Twitter/>
                        </SocialIcon>
                        <SocialIcon>
                            <GitHub/>
                        </SocialIcon>
                        <SocialIcon>
                            <Reddit/>
                        </SocialIcon>
                    </SocialContainer>
                    <Form>
                        <Input placeholder="Email"/>
                    </Form>
                    <Form>
                        <Input placeholder="Password"/>
                    </Form>
                    <Button>Sign In</Button>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default SignUpSignIn
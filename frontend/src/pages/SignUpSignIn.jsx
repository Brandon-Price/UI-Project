// File that will have the regristration and sign in
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/apiFetch.js";
import {Container, Image, Line, LeftContainer, RightContainer, Wrapper, Title, Form, Input, Button, Error} from "../styles/SignUpSignIn.styles.jsx";
import { useState } from "react";

const SignUpSignIn = () => {
    // This is for the register account state
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Grabs user and sets user
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);
    const {isFetchingReg, error2} = useSelector((state) => state.user);
    // Registers user to redux state
    const handleRegister = (e) => {
        e.preventDefault();
        register(dispatch, {username, email, password})
    }
    // Sets the login of user to redux
    const handleSignIn = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    }

    // TODO
    // Need confirm password to actually check password and spit an error or make the box red
    return (
        <Container>
            <Image></Image>
            <Wrapper>
                <LeftContainer>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Input placeholder="Confirm Password" type="password"/>
                        {error2 && <Error>Error has occurred</Error>}
                        <Button onClick={handleRegister} disabled={isFetchingReg}>Create Account</Button>
                    </Form>
                </LeftContainer>
            </Wrapper>
            <Line>:</Line>
            
            <Wrapper>
            <RightContainer>
                    <Title>Already have an account?</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        {error && <Error>Error has occurred</Error>}
                        <Button onClick={handleSignIn} disabled={isFetching}>Sign In</Button>
                    </Form>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default SignUpSignIn
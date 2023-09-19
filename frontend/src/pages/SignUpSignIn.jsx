// File that will have the regristration and sign in
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/apiFetch.js";
import {Container, Line, LeftContainer, RightContainer, Wrapper, Title, Form, Input, Button, Error} from "../styles/SignUpSignIn.styles.jsx";
import { useState } from "react";

const SignUpSignIn = () => {
    // For register data
    const [email, setEmail] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regPassword, setRegPassword] = useState("");

    // For login data
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);
    const {isFetchingReg, error2} = useSelector((state) => state.user);

    const handleRegister = (e) => {
        e.preventDefault();
        register(dispatch, {regUsername, email, regPassword})
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    }


    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => setRegUsername(e.target.value)}/>
                        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setRegPassword(e.target.value)}/>
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
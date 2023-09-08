// File that will have the regristration and sign in
import { Facebook, Twitter, Reddit, GitHub } from "@material-ui/icons";
import {Container, Line, LeftContainer, RightContainer, Wrapper, Title, Form, Input, SocialContainer, SocialIcon, Button} from "../styles/SignUpSignIn.styles.jsx"

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
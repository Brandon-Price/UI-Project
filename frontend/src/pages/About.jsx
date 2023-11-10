import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, ImageContainer, InfoContainer, Title, Description, Header, RowHeader, Row, ThumbnailContainer, RightDescription, LeftDescription, Image, Biography} from "../styles/About.styles";


const About = () => {
    const page = 'about';
    const pageName = 'About Us';
    const imgUrl = "https://dailymedia.case.edu/wp-content/uploads/2018/09/17144905/apple-tree.jpg"

    return(
        <Container>
            <Navbar page={page}/>
                <ImageContainer style={{ backgroundImage: `url(${imgUrl})` }}>
                    <InfoContainer>
                        <Title style={{ fontSize: "150px" }}>{pageName}</Title>
                    </InfoContainer>
                </ImageContainer>
                <Description>
                        At <b>Fruits R US</b>, we're on a mission to bring the orchard to your doorstep, one delicious fruit at a time. 
                        <br></br>Our story is one of commitment to quality, ethical sourcing, and community empowerment.
                </Description>               
                <Container>
                    <Header>
                            Our History
                        </Header>
                        <Biography>
                        Rooted in a shared love for fresh, ethically sourced fruits, our online fruit store sprouted into existence as a collective vision of change. 
                        Established in 2005 by a group of friends passionate about making a positive impact, our journey has been marked by a commitment to ethical sourcing, sustainability, and community support. 
                        From the idyllic valleys where our founders first shared their dreams to the global tables we now serve, each fruit on our virtual shelves carries the essence of responsible farming and a dedication to uplift local communities.
                        Today, our online fruit store stands as a testament to the enduring values that have shaped our path, inviting customers to savor not just the flavors of our fruits but also the story of a conscious choice for a better, more sustainable world.
                        </Biography>
                    <Header>
                        Our Values
                    </Header>
                    <RowHeader>
                            Ethically and Locally Sourced
                    </RowHeader>
                    <Row>
                        <ThumbnailContainer>
                            <Image src="https://img.etimg.com/thumb/width-640,height-480,imgsize-758102,resizemode-75,msid-69025023/magazines/travel/wish-to-discover-a-new-culture-these-seasonal-fests-are-a-must-visit-for-you/durian-fruit.jpg" alt="Farmer"></Image>
                        </ThumbnailContainer>
                        <Container>
                            <RightDescription>
                            We take pride in the way we source our fruits.
                            Our dedicated team works closely with local farmers across the country who share our commitment to sustainable and ethical farming practices.
                            By supporting local growers, we not only ensure the freshest and most flavorful fruits but also help uplift communities and promote fair trade principles. 
                            From the lush orchards to your doorstep, our fruits share generational stories with each bite.
                            </RightDescription>
                        </Container>
                    </Row>

                    <RowHeader>
                            Guaranteed Freshness
                    </RowHeader>

                    <Row>
                        <Container>
                            <LeftDescription>
                            Our promise to you is simple - freshness guaranteed! 
                            From the moment the fruit is picked, to the careful packaging and swift delivery to your doorstep, we maintain the highest standards to ensure every bite is bursting with flavor and nutrients.
                            We know that the best fruits are the ones that have ripened naturally, under the sun, and we're committed to delivering that natural goodness to your table.
                            </LeftDescription>
                        </Container>
                        <ThumbnailContainer>
                            <Image src="https://fruitezy.com.au/cdn/shop/products/Fruit-box-square_6131w.jpg?v=1610341013" alt="Farmer"></Image>
                        </ThumbnailContainer>
                    </Row>
                    
                    <RowHeader>
                        Sowing the Seeds of Change
                    </RowHeader>

                    <Row>
                        <ThumbnailContainer>
                            <Image src="https://www.ollinfarms.com/family_web.jpg" alt="Farmer"></Image>
                        </ThumbnailContainer>
                        <Container>
                            
                            <RightDescription>
                            More than just a fruit seller, we're on a mission to make a difference. We believe in giving back and supporting the communities that make our fruits possible. 
                            With every purchase, you join us in this mission. 
                            A portion of our proceeds goes directly to initiatives that uplift the communities of our dedicated farmers across the country. 
                            We're proud to say that by choosing <b>Fruits R US</b>, you're leaving the world a little better than we found it, one fruit at a time.
                            </RightDescription>
                        </Container>
                    </Row>
                </Container>
                <Description>
                    <b>Taste the difference, make a difference.</b>
                </Description>
            <Footer/>
        </Container>
    )
}


export default About
export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;   
`

export const Line = styled.div`
    background-color: gray;
    height: 34%;
    width: 1;
    color: gray;
`

export const LeftContainer = styled.div`
    width: 50%;
    min-height: 300px;
    
`

export const RightContainer = styled.div`
    width: 50%;
    min-height: 308px;
`

export const Wrapper = styled.div`
    width: 300px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Form = styled.form`
    display: flex;
    margin: 7px 4px 0px 0px;
    padding: 7px;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
`

export const SocialContainer = styled.div`
    display: flex;
`

export const SocialIcon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 20%;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Button = styled.button`
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
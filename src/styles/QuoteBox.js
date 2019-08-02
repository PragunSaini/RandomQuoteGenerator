import styled from 'styled-components'

const QuoteBox = styled.div`
    min-width: 30vw;
    /* min-height: 40vh; */
    max-width: 50vw;
    background: white;
    border-radius: 1em;
    box-shadow: 7px 10px 21px -3px rgba(0,0,0,0.75),
                -7px -10px 21px -3px rgba(0,0,0,0.75);
    padding: 2em;
    text-align: center;
`;

const Text = styled.p`
    max-width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2em;
`;

const Author = styled.p`
    max-width: 90%;
    font-size: 1.2em;
    font-weight: bold;
    text-align: right;
`;

const FlexBox = styled.div`
    margin: 2em 0 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

const NewQuote = styled.button`
    width: 45%;
    font-size: 1.3em;
    border: none;
    background: rgb(110, 15, 145);
    color: white;
    padding: 10px;
    border-radius: 0.2em;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
    cursor: pointer;

    :hover {
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.75);
    }
`;

const Link = styled.a`
    width: 45%;
    display: block;
    font-size: 1.3em;
    font-weight: bold;
    border: none;
    border-radius: 0.2em;
    padding: 5px;
    background: rgb(61, 190, 255);
    color: black;
    text-decoration: none;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
    transition: all .2s ease;

    :active {
        color: white;
    }

    :hover {
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.75);
    }
`;

export default {
    QuoteBox,
    Text,
    Author,
    FlexBox,
    NewQuote,
    Link
}
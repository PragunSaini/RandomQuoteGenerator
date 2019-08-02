import React, {useState, useEffect} from 'react'
import quotes from '../quotes.json'
import gradients from '../gradients.json'
import QuoteBox from '../styles/QuoteBox'
import Main from '../styles/Main'

const Quote = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [gradient, setGradient] = useState('')

    useEffect(() => {
        generateRandomQuote()
    }, [])

    const generateRandomQuote = () => {
        const id = Math.floor(Math.random() * quotes.length)
        const gid = Math.floor(Math.random() * gradients.length)
        setQuote(quotes[id].quote)
        setAuthor(quotes[id].author)
        setGradient(gradients[gid])
    }

    return (
        <Main gradient={gradient}>
            <QuoteBox.QuoteBox id='quote-box'>
                <QuoteBox.Text id='text'>
                    {quote}
                </QuoteBox.Text>
                <QuoteBox.Author id='author'>
                    - {author}
                </QuoteBox.Author>
                <QuoteBox.FlexBox>
                    <QuoteBox.NewQuote id='new-quote' onClick={() => generateRandomQuote()}>
                        New Quote
                    </QuoteBox.NewQuote>
                    <QuoteBox.Link href={`https://twitter.com/intent/tweet?text=${quote.replace(';', ',')}`}
                        id='tweet-quote'
                        target='_blank'
                        rel='noopener noreferrer'>
                            Tweet Quote
                    </QuoteBox.Link>
                </QuoteBox.FlexBox>
            </QuoteBox.QuoteBox>
        </Main>
    )
}

export default Quote
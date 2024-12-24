import React, { useState, useEffect } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        try {
            console.log('Fetching quote...');
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Quote fetched:', data);
            setQuote(data.content);
            setAuthor(data.author);
            setError(null); // Clear any previous errors
        } catch (error) {
            console.error('Error fetching the quote:', error);
            setError('Failed to fetch quote. Please try again later.');
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div id="quote-box">
            {error ? (
                <div id="error" style={{ color: 'red' }}>{error}</div>
            ) : (
                <>
                    <div id="text">{quote}</div>
                    <div id="author">{author}</div>
                </>
            )}
            <button id="new-quote" onClick={fetchQuote}>New Quote</button>
            <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${quote} - ${author}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                Tweet Quote
            </a>
        </div>
    );
};

export default Quote;
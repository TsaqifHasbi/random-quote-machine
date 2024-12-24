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
        <div id="quote-box" className="container text-center">
            <div id="text" className="mb-3">{quote || 'Loading quote...'}</div>
            <div id="author" className="mb-3">{author || 'Loading author...'}</div>
            {error && <div className="error">{error}</div>}
            <button id="new-quote" className="btn btn-primary" onClick={fetchQuote}>New Quote</button>
            <a id="tweet-quote" className="btn btn-info" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`} target="_blank" rel="noopener">Tweet Quote</a>
        </div>
    );
};

export default Quote;
# Random Quote Machine

This is a Random Quote Machine built with React. It fetches random quotes from an API and displays them. Users can also tweet the current quote.

## User Stories

1. I can see a wrapper element with a corresponding id="quote-box".
2. Within #quote-box, I can see an element with a corresponding id="text".
3. Within #quote-box, I can see an element with a corresponding id="author".
4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
5. Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
6. On first load, my quote machine displays a random quote in the element with id="text".
7. On first load, my quote machine displays the random quote's author in the element with id="author".
8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
10. I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
11. The #quote-box wrapper element should be horizontally centered.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/random-quote-machine.git
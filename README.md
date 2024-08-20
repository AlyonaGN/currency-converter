## Currency Converter

An application consisting of two pages. The first page provides information on the current exchange rates for RUB, EUR, GBP, and USD, while the second page allows you to convert amounts into the specified currencies.

### Project Setup

To run the project locally, you need to:
1. Download the repository.
2. Navigate to the root folder of the repository using the terminal.
3. Install the necessary modules with the command `npm install`.
4. Start the project with the command `npm start`.
5. Tests can be run using the command `npm test`.

### Technologies Used

- **React** (functional and class components)
- **Redux** for state management
- Asynchronous requests (promises, async/await)
- "Live" validation of user input, providing results after each change in the input field
- Input handlers that minimize the likelihood of user errors due to minor formatting issues, such as forgetting the preposition 'in', inserting an extra character, or space
- Responsive design
- **Jest** for testing the input parsing functionality
- **localStorage** to save the user's currency selection from previous visits to the currency rates page
- **eslint-config-airbnb** to enforce code style
- Error constructor for basic error handling
- **React Router** for routing

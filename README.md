# Bank-of-flatiron
# Bank of Flatiron

## Introduction

This project is a mini web app to manage and display a list of recent bank transactions. It is built with React and fetches data from a local JSON server.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:WeddyNkatha265/Bank-of-flatiron.git
   cd Bank-of-flatiron
You will execute the commands in your terminal (either your PC's terminal or the integrated terminal in Visual Studio Code). Here’s the complete guide, including the file structure and necessary code comments.

### Project Setup Commands

Open your terminal and run these commands:

```bash
# Create a new React project
npx create-react-app bank-of-flatiron

# Navigate into the project directory
cd bank-of-flatiron

# Install necessary dependencies
npm install axios json-server
```

### File Structure

Here's the recommended file structure for your project:

```
bank-of-flatiron/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTransactionForm.js
│   │   ├── TransactionTable.js
│   ├── App.js
│   ├── index.js
│   ├── utils.js
├── db.json
├── package.json
```



### Running Your Project

1. Start the JSON server:
   ```bash
   json-server --watch db.json --port 8001
   ```

2. Start the React application:
   ```bash
   npm start
   ```

### Final Thoughts

Ensure that your GitHub repository is set up correctly, and regularly commit your changes. Here's a basic guide to get you started with Git:

1. Initialize your Git repository:
   ```bash
   git init
   git remote add origin git@github.com:WeddyNkatha265/Bank-of-flatiron.git
   ```

2. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin master
   ```

### README File

Don't forget to create a well-written `README.md` file in the root of your project to document the setup instructions, project goals, and any other relevant information. Here's a basic example:

```markdown
# Bank of Flatiron

## Introduction

This project is a mini web app to manage and display a list of recent bank transactions. It is built with React and fetches data from a local JSON server.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:WeddyNkatha265/Bank-of-flatiron.git
   cd Bank-of-flatiron
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server:
   ```bash
   json-server --watch db.json --port 8001
   ```

4. Start the React application:
   ```bash
   npm start
   ```

## Features

- Display a table of all transactions.
- Add a new transaction.
- Filter transactions by typing into the search bar.
- Sort transactions by category or description.
- Delete transactions from the table.

## Technologies Used

- React
- Axios
- JSON Server

## License

This project is licensed under the MIT License.
```

With this setup, you should be able to build the Bank of Flatiron project in React, fetching data from a local JSON server, displaying it in a table, and adding functionalities like filtering, sorting, and deleting transactions.
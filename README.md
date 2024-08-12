# SongCrew

## Description

This crowdfunding dApp allows artists to fund their projects by raising money directly from their fans and supporters. 
The platform is built with a robust backend using Foundry and Hardhat, and a modern frontend with Next.js.

[https://song-crew.vercel.app/](https://song-crew.vercel.app/)

## Prerequisites

- Node.js and npm
- Hardhat
- Foundry
- An Ethereum account to deploy contracts on a public blockchain (or a local test environment)

## Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:goumix/SongCrew.git
    cd SongCrew
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

## Running the Application

1. Start the backend to test and interact with the smart contracts:
    ```bash
    npx hardhat node
    ```

2. Start the frontend in development mode:
    ```bash
    npm run dev
    ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Testing

To run the smart contract tests with Hardhat, use the following command in the backend folder:

```bash
npx hardhat test
```

To run the smart contract tests with Foundry, use the following command in the backend folder:

```bash
forge test
```


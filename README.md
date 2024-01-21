# Ethereum Bank Interface

## Description

This Ethereum Bank Interface is a decentralized application (dApp) that allows users to interact with a smart contract on the Ethereum blockchain. Users can check their current balance, deposit Ether into the smart contract, withdraw Ether back to their wallet, and view deposit and withdraw event logs.

## Getting Started

### Prerequisites

- Node.js and npm (https://nodejs.org/)
- Git (https://git-scm.com/)

### Backend Setup

1. Clone the repository and install dependencies:

   ```
   git clone https://github.com/vascoII/Bank-wagmi-hooks
   cd Bank-wagmi-hooks/backend
   npm install
   ```

2. Start the local Hardhat node:

   ```
   npx hardhat node
   ```

3. Deploy the smart contract to the local node:

   ```
   npx hardhat run scripts/deploy.js --network localhost
   ```

4. Note down the deployed contract's address and ABI for the frontend configuration.

### Frontend Setup

1. Update the `/frontend/constants.index.js` file with the local smart contract address and ABI.

2. Install frontend dependencies and run the frontend server:

   ```
   cd frontend
   npm install
   npm run dev
   ```

3. Open your web browser and navigate to `http://localhost:3000`.

## Features

- **View Balance**: Check the Ether balance stored in the smart contract.
- **Deposit Ether**: Send Ether from your wallet to the smart contract.
- **Withdraw Ether**: Withdraw Ether from the smart contract back to your wallet.
- **Transaction Logs**: View the history of deposit and withdrawal events.

Enjoy interacting with your Ethereum Bank Interface!

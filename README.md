# Mela a Crowdfunding Web App

Welcome to the Crowdfunding Web App repository! This web application, built with Angular and Express.js, allows users to create and support crowdfunding campaigns for various causes.

## Features

- **Campaign Creation**: Users can create campaigns, providing details about their cause, funding goals, and campaign duration.
- **Donation Support**: Visitors can browse and support campaigns by making financial contributions.
- **User Authentication**: Secure user authentication and authorization for campaign creators and supporters.
- **Responsive Design**: The application provides a seamless experience across different devices and screen sizes.

## Technologies Used

- **Front End**: Angular
- **Back End**: Express.js
- **Database**: MongoDB
- **Authentication**: Jwt
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js and npm: Install Node.js and npm on your machine.
- MongoDB: Set up and configure the database.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/leulabay1/Mela.git
   ```

2. Install dependencies:

   ```bash
   # Navigate to the project folder
   cd crowdfunding-web-app

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the `backend` folder with necessary configurations.

4. Start the application:

   ```bash
   # Start the frontend application
   cd ../frontend
   ng serve

   # Start the backend server
   cd ../backend
   npm start
   ```

5. Open `http://localhost:4200` in your browser.

## Project Structure

```plaintext
crowdfunding-web-app/
│
├── frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
├── .env.example
├── LICENSE
├── README.md
└── CONTRIBUTING.md
```

## Configuration

Copy the example `.env` file in the `backend` folder and configure necessary variables.


## License

This project is licensed under the [MIT License](LICENSE).

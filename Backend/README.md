# MERN Backend Project

This is a simple MERN (MongoDB, Express, React, Node.js) backend application that provides user-related operations.

## Project Structure

```
mern-backend
├── src
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── user.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── app.js
│   └── config
│       └── db.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd mern-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5000` by default.

## API Endpoints

- **POST /api/users** - Create a new user
- **GET /api/users/:id** - Get user by ID
- **PUT /api/users/:id** - Update user by ID
- **DELETE /api/users/:id** - Delete user by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
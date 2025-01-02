# Employee Management System

## Overview
This is a full-stack Employee Management System developed using Spring Boot for the backend, React for the frontend, and MySQL for the database. The system allows administrators to manage employee details such as adding, updating, deleting, and viewing employee information. The application is built to provide an intuitive and user-friendly interface for both administrators and employees.

## Features
- **Employee CRUD Operations**: Add, update, delete, and view employee details.
- **Authentication & Authorization**: Admin-only access to certain functionalities.
- **Employee Dashboard**: A dashboard where employees can view their personal details.
- **MySQL Database**: A relational database that stores employee data securely.

## Technologies Used
- **Backend**: Spring Boot, Java
- **Frontend**: React.js
- **Database**: MySQL
- **Authentication**: Spring Security (JWT)
- **API**: RESTful API with Spring Boot
- **Other Tools**: Maven, Postman (for testing API)

## Requirements
- Java 8 or higher
- Node.js and npm
- MySQL
- Maven
- IDE (IntelliJ IDEA, Visual Studio Code, etc.)

## Project Structure

```
Employee-Management-System/
|-- backend/
|   |-- src/
|   |   |-- main/
|   |   |   |-- java/
|   |   |   |   |-- com/
|   |   |   |   |   |-- employee/
|   |   |   |   |   |   |-- controller/
|   |   |   |   |   |   |-- model/
|   |   |   |   |   |   |-- repository/
|   |   |   |   |   |   |-- service/
|   |-- application.properties
|-- frontend/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- services/
|   |   |-- App.js
|   |-- package.json
|-- README.md
```

## Setup Instructions

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-management-system.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Set up MySQL database:
   - Create a database called `employee_management`.
   - Update the `application.properties` file with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
     spring.datasource.username=root
     spring.datasource.password=yourpassword
     spring.jpa.hibernate.ddl-auto=update
     ```
4. Run the backend application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the required npm packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open your browser and go to `http://localhost:3000`.

### API Documentation
You can use Postman to test the following API endpoints:

- `POST /api/auth/login` - Login and get JWT token
- `GET /api/employees` - Get a list of all employees (admin only)
- `GET /api/employees/{id}` - Get a specific employee by ID
- `POST /api/employees` - Add a new employee (admin only)
- `PUT /api/employees/{id}` - Update employee details (admin only)
- `DELETE /api/employees/{id}` - Delete an employee (admin only)

### Database Schema
```sql
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure your changes follow the coding standards and add necessary test cases.

## License
This project is licensed under the MIT License.

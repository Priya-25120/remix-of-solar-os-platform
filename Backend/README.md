# Solar OS Backend

Node.js + Express + MongoDB API for Solar OS CRM.

## Setup

1. Install dependencies:
```bash
cd Backend
npm install
```

2. Install MongoDB locally or use MongoDB Atlas cloud database.

3. Update `.env` file with your settings:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/solar-os
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start the server:
```bash
# Development with auto-restart
npm run dev

# Production
npm start
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires token)

### Users
- `GET /api/users` - Get all users (admin only)
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (admin only)

### Leads
- `GET /api/leads` - Get all leads
- `GET /api/leads/:id` - Get single lead
- `POST /api/leads` - Create lead
- `PUT /api/leads/:id` - Update lead
- `DELETE /api/leads/:id` - Delete lead

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get single customer
- `POST /api/customers` - Create customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## Authentication

Include JWT token in request headers:
```
Authorization: Bearer <your-token>
```

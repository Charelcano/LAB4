## Lab 4 - Authentication API with Advanced JOIN Reports
A complete Node.js Express API with JWT authentication and advanced SQL JOIN operations for user management and reporting.

## Features
JWT Authentication (Register/Login/Protected Routes)

MySQL Database with relationships

## 7 Advanced JOIN Reports including:
INNER JOIN (Users with Roles)

LEFT JOIN (Users with Profiles)

RIGHT JOIN (All Roles including unassigned)

FULL OUTER JOIN (Profiles vs Users - emulated)

CROSS JOIN (All User-Role Combinations)

SELF JOIN (Referral Relationships)

SUBQUERY JOIN (Latest Login per User)


## API Endpoints
Authentication
POST /api/register - User registration

POST /api/login - User login (returns JWT token)

## Reports (Protected - Requires JWT)
GET /api/reports/users-with-roles - Users and their roles

GET /api/reports/users-with-profiles - Users with profile data

GET /api/reports/roles-right-join - All roles including unassigned

GET /api/reports/profiles-full-outer - Profiles vs Users comparison

GET /api/reports/user-role-combos - All user-role combinations

GET /api/reports/referrals - Referral relationships

GET /api/reports/latest-login - Latest login per user

### Health Check
GET /api/health - Server and database status

## Installation
Clone the repository

bash
git clone https://github.com/Charelcano/LAB4.git
cd lab-auth-joins
Install dependencies

bash
npm install
Set up environment variables

bash
cp .env.example .env
Edit .env with your database credentials:

## text
DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=lab_auth

DB_PORT=3306

JWT_SECRET=your_jwt_secret

# SERVER_PORT=3000

Start the server

bash
# Development mode (auto-restart)
npm run dev

# Production mode
npm start

Database Schema
Tables
users - User accounts with authentication

roles - Available roles (student, instructor, admin)

user_roles - Many-to-many relationship between users and roles

profiles - Optional user profile information (1:1 with users)

login_audit - Login history and IP tracking

referrals - Self-join table for user referrals

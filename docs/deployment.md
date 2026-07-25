# AEVORA Deployment Guide

## Prerequisites

- **Java 17+** (for Spring Boot backend)
- **Node.js 20+** and **npm** (for Next.js frontend)
- **Maven 3.9+** (or use the included `mvnw` wrapper)
- **MySQL 8+** (for production deployment)

---

## Development Mode (H2 In-Memory Database)

### 1. Start the Backend

The backend uses an in-memory **H2** database by default (no MySQL installation required).

```bash
cd backend
./mvnw spring-boot:run
```

- **API**: http://localhost:8080
- **H2 Console**: http://localhost:8080/h2-console
  - JDBC URL: `jdbc:h2:mem:aevoradb`
  - Username: `sa`
  - Password: `password`

A default admin user is created automatically:
- Email: `admin@aevora.com`
- Password: `admin123`

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

- **App**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

---

## Production Deployment (MySQL)

### 1. Configure MySQL

Create the database:
```sql
CREATE DATABASE aevoradb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Update `backend/src/main/resources/application.properties`:
```properties
spring.profiles.active=prod
```

Update `backend/src/main/resources/application-prod.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/aevoradb
spring.datasource.username=YOUR_DB_USER
spring.datasource.password=YOUR_DB_PASSWORD
```

### 2. Build & Deploy Backend

```bash
cd backend
./mvnw clean package -DskipTests
java -jar target/aevora-0.0.1-SNAPSHOT.jar
```

### 3. Build & Deploy Frontend

```bash
cd frontend
npm install
npm run build
npm start
```

Or deploy the `frontend/out/` directory to Vercel, Netlify, or any static hosting provider.

---

## Environment Variables

For production, consider externalizing these secrets:

| Variable | Description | Default |
|---|---|---|
| `aevora.jwt.secret` | JWT signing key (must be 32+ chars) | Set in `application.properties` |
| `aevora.jwt.expiration-ms` | JWT token lifespan in milliseconds | `864000000` (10 days) |
| `spring.datasource.password` | Database password | `""` (set in `application-prod.properties`) |

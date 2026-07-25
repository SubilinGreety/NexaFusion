# AEVORA - Intelligent Custom Software & AI Solutions

This workspace contains **AEVORA**, a premium tech consultancy application consisting of a Java Spring Boot backend and a Next.js 15 client dashboard.

---

## 📂 Project Structure

```
AEVORA/
├── backend/                                # Spring Boot REST Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/aevora/
│   │   │   │   ├── config/                 # Security configs, CORS, and Data Loaders
│   │   │   │   ├── controller/             # REST Endpoints for Auth, Blogs, Careers, Contacts
│   │   │   │   ├── dto/                    # Login Request/Response DTOs
│   │   │   │   ├── entity/                 # JPA database entities (User, BlogPost, Job, etc.)
│   │   │   │   ├── exception/              # Global Exception Mapping handlers
│   │   │   │   ├── repository/             # Spring Data JPA Repository definitions
│   │   │   │   ├── security/               # JWT authentication middleware and providers
│   │   │   │   ├── service/                # Business logic layer
│   │   │   │   ├── util/                   # Slug generation utilities
│   │   │   │   └── AevoraApplication.java  # Main execution class
│   │   │   └── resources/
│   │   │       ├── application.properties  # Profile orchestrations (dev vs. prod)
│   │   │       ├── application-dev.properties   # H2 database configurations
│   │   │       └── application-prod.properties  # MySQL database configurations
│   │   └── test/                           # JUnit context test suits
│   ├── pom.xml                             # Dependencies (Spring Boot Starter Web, JPA, Security, H2, JWT)
│   ├── mvnw & mvnw.cmd                     # Maven wrapper executables
│   └── HELP.md
│
├── frontend/                               # Next.js React client with Tailwind
│   ├── package.json                        # Dependencies (Next.js 15.1, React 19, Lucide, Axios)
│   ├── tailwind.config.ts & postcss.config.js
│   ├── tsconfig.json                       # TS options and path mappings
│   └── src/
│       ├── app/                            # Pages Routing (Home, About, Careers, Blog, Contact, Admin)
│       ├── components/                     # Core UI elements (Navbar, Footer, Hero, Services, Forms)
│       ├── services/                       # Axios endpoint clients
│       └── types/                          # TypeScript entity interfaces
```

---

## 🚀 Getting Started

### 1. Spring Boot Backend

The backend is configured to run using an in-memory **H2 database** (the `dev` profile) by default, requiring no database installation to boot. To toggle MySQL, switch the profile in `application.properties` to `prod`.

* **To Run the Backend**:
  ```bash
  # Navigate to the backend folder
  cd backend
  # Run application
  ./mvnw spring-boot:run
  ```
* **API base**: `http://localhost:8080`
* **H2 Console**: `http://localhost:8080/h2-console` (Username: `sa`, Password: `password`)
* **Default Admin Credentials**:
  * Email: `admin@aevora.com`
  * Password: `admin123`
  * *(Automatically initialized on startup if the database is empty)*

### 2. Next.js Frontend

The client utilizes a premium, responsive glassmorphism aesthetic built on Next.js, React, and Tailwind CSS. It communicates with the backend via Axios.

* **To Run the Frontend**:
  ```bash
  # Navigate to the frontend folder
  cd frontend
  # Install node packages
  npm install
  # Run local server
  npm run dev
  ```
* **Frontend port**: `http://localhost:3000`
* **Admin Dashboard**: `http://localhost:3000/admin` (Sign in using the default admin credentials above to manage contacts, applications, jobs, and blogs).

---

## 🛡️ API Endpoints Summary

| Action | Method | Path | Access |
| :--- | :--- | :--- | :--- |
| Login / Get Token | `POST` | `/api/auth/login` | Public |
| Submit Contact Inquiry | `POST` | `/api/contacts` | Public |
| List Open Careers | `GET` | `/api/jobs` | Public |
| Apply for Careers | `POST` | `/api/jobs/{jobId}/apply` | Public |
| List Published Blogs | `GET` | `/api/blogs` | Public |
| View Blog Details | `GET` | `/api/blogs/slug/{slug}` | Public |
| View Contact Inbox | `GET` | `/api/contacts` | Admin (JWT) |
| Manage Careers postings | `CRUD` | `/api/jobs/**` | Admin (JWT) |
| Manage Blog posts | `CRUD` | `/api/blogs/**` | Admin (JWT) |

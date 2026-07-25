# AEVORA System Architecture

## Overview

AEVORA follows a clean **client-server architecture** with a decoupled frontend and backend.

```
AEVORA/
├── backend/   → Spring Boot REST API (port 8080)
└── frontend/  → Next.js 15 App (port 3000)
```

## Backend Architecture

- **Framework**: Spring Boot 4.1.0 (Java 17)
- **Database**: H2 (dev) / MySQL 8 (prod)
- **ORM**: Spring Data JPA / Hibernate
- **Security**: Spring Security 6 + JWT (jjwt 0.11.5)
- **Validation**: Jakarta Bean Validation

### Package Structure (`com.aevora`)

| Package | Responsibility |
|---|---|
| `config` | CORS, Security filter chains, Data initialization |
| `controller` | REST endpoint handlers |
| `dto` | Request/Response transfer objects |
| `entity` | JPA entity models |
| `exception` | Global exception handling |
| `repository` | Spring Data JPA repositories |
| `security` | JWT provider, filter, entry point, UserDetailsService |
| `service` | Business logic layer |
| `util` | Helper utilities (slug generation) |

## Frontend Architecture

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + custom CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React

### Page Routes

| Route | Description |
|---|---|
| `/` | Home (Hero, About, Services, Testimonials, FAQ) |
| `/about` | Company story and team members |
| `/services` | Service offerings and tech stack |
| `/portfolio` | Filterable project showcase |
| `/industries` | Target industry sectors |
| `/careers` | Job openings with application modal |
| `/blog` | Published articles listing |
| `/blog/[slug]` | Individual blog article reader |
| `/contact` | Contact inquiry form |
| `/admin` | Admin dashboard (JWT protected) |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |

## Authentication Flow

```
Client → POST /api/auth/login → Spring Security AuthManager
       ← JWT Token (Bearer)
Client → GET /api/contacts (Authorization: Bearer <token>)
       → JwtAuthenticationFilter → validates token → grants access
```

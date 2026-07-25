# AEVORA REST API Reference

Base URL: `http://localhost:8080/api`

## Authentication

### POST `/auth/login`
Login with admin credentials. Returns a JWT token.

**Request Body:**
```json
{
  "email": "admin@aevora.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "token": "<JWT_TOKEN>",
  "type": "Bearer"
}
```

---

## Blog Posts

### GET `/blogs`
Returns all published blog posts. Optionally filter by category.

**Query Params:** `?category=Backend`

### GET `/blogs/slug/{slug}`
Get a single published blog post by slug.

### POST `/blogs` *(Admin)*
Create a new blog post.

**Request Body:**
```json
{
  "title": "Blog Title",
  "summary": "Short summary",
  "content": "<p>HTML content</p>",
  "category": "Backend",
  "author": "Author Name",
  "status": "PUBLISHED"
}
```

### PUT `/blogs/{id}` *(Admin)*
Update an existing blog post.

### DELETE `/blogs/{id}` *(Admin)*
Delete a blog post.

---

## Job Postings

### GET `/jobs`
Returns all active job postings.

### GET `/jobs/{id}`
Returns a specific job posting by ID.

### POST `/jobs/{jobId}/apply`
Submit a job application.

**Request Body:**
```json
{
  "candidateName": "John Doe",
  "candidateEmail": "john@example.com",
  "candidatePhone": "+1 555 0100",
  "resumeUrl": "https://drive.google.com/...",
  "coverLetter": "I am applying because..."
}
```

### POST `/jobs` *(Admin)*
Create a new job posting.

### PUT `/jobs/{id}` *(Admin)*
Update a job posting.

### DELETE `/jobs/{id}` *(Admin)*
Delete a job posting.

### GET `/jobs/applications` *(Admin)*
Get all job applications.

### DELETE `/jobs/applications/{id}` *(Admin)*
Delete a specific application.

---

## Contact Messages

### POST `/contacts`
Submit a contact inquiry.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@company.com",
  "phone": "+1 555 0200",
  "subject": "Custom Software Project",
  "message": "We need a custom ERP system..."
}
```

### GET `/contacts` *(Admin)*
Get all contact messages.

### PUT `/contacts/{id}/read` *(Admin)*
Mark a message as read.

### DELETE `/contacts/{id}` *(Admin)*
Delete a message.

---

## Portfolio

### GET `/portfolio`
Get all portfolio items. Optionally filter by category.

**Query Params:** `?category=AI+%26+ML`

### GET `/portfolio/{id}`
Get a single portfolio item.

### POST `/portfolio` *(Admin)*
Create a new portfolio item.

### PUT `/portfolio/{id}` *(Admin)*
Update a portfolio item.

### DELETE `/portfolio/{id}` *(Admin)*
Delete a portfolio item.

---

> **Note:** All endpoints marked *(Admin)* require a `Authorization: Bearer <JWT_TOKEN>` header.

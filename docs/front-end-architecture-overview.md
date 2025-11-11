# Front-End Architecture Overview

The RecruitIQ front-end is a Single Page Application (SPA) built with React.js or Vue.js. It emphasizes speed, responsiveness, and modularity while communicating with the RecruitIQ backend via RESTful APIs (or GraphQL if preferred). Secure API connectors handle the integration with third-party systems.

## 1. Front-End Components

### Applicant-Facing Experiences

| Feature | Description | Primary APIs |
| --- | --- | --- |
| **Job Board Page** | Displays active job listings with filters for location and role. | `GET /api/jobs?location=VIC&role=TrafficController` |
| **Application Form** | Multi-step application form capturing personal details, licences, and tickets. | `POST /api/applications` |
| **Applicant Dashboard** | Presents current application status and onboarding tasks. | `GET /api/applications/{id}` |

### Admin/Recruiter Experiences

| Feature | Description | Primary APIs |
| --- | --- | --- |
| **Admin Dashboard** | Enables job posting and application review workflows. | `POST /api/jobs`, `GET /api/applications` |
| **Compliance Dashboard** | Tracks ticket expiries and Assignar synchronization status. | `GET /api/compliance` |

## 2. Authentication & Security

- **Login & Session Management:** Uses JWT-based authentication with dedicated endpoints: `POST /api/auth/login` and `POST /api/auth/refresh`.
- **Role-Based Access Control:** Fetches user roles from `GET /api/users/roles` to tailor user permissions and feature access.

## 3. Connectors & APIs

### RecruitIQ Backend APIs

- **Jobs API:**
  - `GET /api/jobs` → Fetch job listings.
  - `POST /api/jobs` → Create a new job posting.
- **Applications API:**
  - `POST /api/applications` → Submit an application.
  - `GET /api/applications/{id}` → Retrieve application status.
- **Documents API:**
  - `POST /api/documents` → Upload licences or tickets.
- **Compliance API:**
  - `GET /api/compliance` → Retrieve ticket expiry data and Assignar sync status.

### External Integrations (via Backend Connectors)

- **Assignar API:** Synchronizes tickets and tags (`POST /assignar/tags`, `POST /assignar/tickets`).
- **Moodle LMS API:** Assigns training modules (`POST /moodle/enrol`).
- **MYOB Acumatica API:** Manages payroll and tax data synchronization (`POST /myob/payroll`).

## 4. Data Flow Overview

1. **Front-End → RecruitIQ Backend:** All user interactions—such as job searching, application submission, and document uploads—are routed through RecruitIQ backend APIs.
2. **RecruitIQ Backend → External Systems:** Scheduled sync jobs push data to Assignar, Moodle, and MYOB, keeping external systems up to date.
3. **Front-End → External APIs (Optional):** For real-time compliance checks, the front-end can invoke backend endpoints that securely proxy external APIs.

## 5. Technology Stack

- **Front-End Framework:** React.js or Vue.js.
- **Styling:** TailwindCSS.
- **HTTP Client:** Axios for API communication.
- **State Management:** Redux (for React) or Vuex (for Vue).
- **Authentication Storage:** JWT tokens stored in HTTP-only cookies.
- **File Uploads:** AWS S3 or Azure Blob Storage using signed URLs.

## 6. Future Considerations

- Establish consistent component patterns (e.g., atomic design) to streamline feature development.
- Document error-handling conventions for API integrations to aid observability and support.
- Define performance budgets to maintain SPA responsiveness across applicant and recruiter workflows.


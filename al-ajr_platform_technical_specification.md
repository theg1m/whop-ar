# Al-Ajr Platform Technical Specification

## Project Overview

Al-Ajr Digital Platform is a content rewards and user-generated content (UGC) monetization marketplace tailored for the Arabic-speaking market. It enables brands (Advertisers) to create content reward campaigns and allows content creators (Influencers/Users) to participate, generate content, and earn rewards based on engagement metrics. The platform prioritizes full RTL support, Arabic localization, and cultural sensitivity for the MENA region.

## Architectural Overview

### System Architecture
The platform will use a microservices architecture to ensure modularity, scalability, and maintainability. Each major feature (authentication, campaign management, payment processing, analytics, etc.) will be encapsulated in its own service, communicating via RESTful APIs. A monolithic approach is avoided to support future scalability and independent deployment of services.

### Frontend
A single-page application (SPA) built with Next.js for server-side rendering (SSR), SEO optimization, and fast performance. Tailwind CSS will handle styling with RTL support.

### Backend
Node.js with Express.js for RESTful APIs, chosen for its performance, large ecosystem, and compatibility with JavaScript-based frontend. Microservices will be orchestrated using Docker and Kubernetes for scalability.

### Database
- **PostgreSQL:** For structured data (users, campaigns, transactions).
- **MongoDB:** For flexible storage of content metadata (e.g., campaign briefs, creator submissions).

### File Storage
AWS S3 for media storage (images, videos) with CloudFront CDN for low-latency delivery.

### Authentication
JWT (JSON Web Tokens) for secure user sessions, integrated with OAuth 2.0 for social logins.

### API Gateway
AWS API Gateway to manage and secure API requests, handle rate limiting, and route traffic to appropriate microservices.

### Message Queue
RabbitMQ for asynchronous tasks (e.g., campaign notifications, content moderation).

### Analytics
Custom analytics pipeline using Redis for caching real-time metrics and AWS Redshift for long-term data analysis.

### Localization
i18next for multi-language support with Arabic as the primary language, ensuring RTL layout and culturally appropriate formatting.

## Technology Stack Justification

- **Next.js:** Provides SSR for SEO, fast page loads, and built-in support for internationalization (i18n) and RTL layouts.
- **Tailwind CSS:** Rapid UI development with utility-first approach, supports RTL via plugins, and is highly customizable for Arabic typography.
- **Node.js/Express.js:** Lightweight, scalable, and aligns with JavaScript ecosystem for full-stack consistency.
- **PostgreSQL:** Reliable for transactional data with strong ACID compliance.
- **MongoDB:** Flexible for unstructured content metadata, ideal for campaign and content storage.
- **AWS:** Comprehensive cloud services for storage, CDN, analytics, and scalability. Supports MENA region data centers (e.g., Bahrain).
- **i18next:** Robust i18n library with RTL support and JSON-based translation files for Arabic localization.
- **Docker/Kubernetes:** Ensures consistent deployments and scalability across microservices.
- **RabbitMQ:** Handles asynchronous tasks efficiently, critical for notifications and content processing.
- **Redis:** Fast in-memory caching for real-time analytics and performance tracking.

## Modules & Components

### 1. Authentication Service
- **Functionality:** User registration, login, social logins (Google, Facebook, Apple), email verification, password reset, 2FA.
- **Components:**
    - User Model (PostgreSQL): Stores user data (email, password hash, role, verification status).
    - Social Login Integration: OAuth 2.0 flows for Google, Facebook, Apple.
    - JWT Service: Generates and validates tokens for secure authentication.
    - Email Service: Integrates with AWS SES for sending verification and password reset emails.

### 2. Campaign Management Service
- **Functionality:** Campaign creation, management, and performance tracking for Advertisers; campaign discovery and submission for Creators.
- **Components:**
    - Campaign Model (PostgreSQL): Stores campaign details (objectives, budget, duration, content requirements).
    - Content Metadata (MongoDB): Stores campaign briefs, creator submissions, and metadata (hashtags, URLs).
    - Campaign API: RESTful endpoints for creating, updating, and tracking campaigns.
    - Analytics Engine: Tracks views, clicks, conversions using platform APIs (e.g., TikTok, YouTube) or manual verification.

### 3. Creator Dashboard Service
- **Functionality:** Campaign browsing, content submission, performance tracking, earnings management.
- **Components:**
    - Campaign Discovery UI: Filterable and searchable campaign list with reward details.
    - Content Submission UI: File upload (S3) and external link submission (e.g., TikTok URL).
    - Earnings Wallet: Tracks accumulated earnings and payout requests.
    - Profile Management: Creator bio, social links, audience demographics.

### 4. Advertiser Dashboard Service
- **Functionality:** Campaign creation, review, approval, and analytics.
- **Components:**
    - Campaign Creation UI: Form for defining objectives, budget, content requirements.
    - Submission Review UI: Approve/reject creator submissions.
    - Analytics Dashboard: Visualizations (charts, graphs) for campaign performance (views, ROI).

### 5. Payment Service
- **Functionality:** Handles campaign budget top-ups, creator payouts, and transaction history.
- **Components:**
    - Payment Gateway Integration: Stripe (international), Mada, Fawry, Knet (local MENA gateways).
    - Transaction Model (PostgreSQL): Stores payment history and statuses.
    - Payout Workflow: Creator-initiated payout requests with admin approval.

### 6. Admin Panel Service
- **Functionality:** User management, campaign moderation, content moderation, platform analytics.
- **Components:**
    - Admin Dashboard UI: User and campaign management interfaces.
    - Moderation Queue: Reviews content for cultural appropriateness and compliance.
    - Analytics Reports: Platform-wide metrics (users, campaigns, transactions).

### 7. Notification Service
- **Functionality:** In-app and email notifications for campaign updates, earnings, and system alerts.
- **Components:**
    - Notification Queue (RabbitMQ): Asynchronous delivery of notifications.
    - Email Templates: Localized Arabic templates for notifications.

### 8. Localization Service
- **Functionality:** Full RTL support, Arabic translations, culturally appropriate formatting.
- **Components:**
    - i18next Integration: Manages translation files (JSON) for Arabic UI.
    - RTL Styling: Tailwind CSS with RTL plugin for layout adjustments.
    - Arabic Typography: Uses Noto Serif Arabic for legible and professional text rendering.
    - Date/Time Formatting: Localized formats (e.g., Hijri calendar support).

# Mediloom.io

🏥 **Mediloom.io – Smart Healthcare Resource Management Platform**

📌 **Project Overview**

Mediloom.io is a full-stack healthcare management platform designed to centralize Electronic Health Records (EHRs), monitor hospital resources in real time, and provide predictive analytics for efficient healthcare decision-making. The system integrates real-time data streaming, machine learning, blockchain security, and role-based dashboards to improve hospital operations and patient care.

🎯 **Key Objectives**

Centralize patient Electronic Health Records (EHRs) across multiple hospitals

Enable real-time monitoring of hospital resources (beds, staff, equipment)

Forecast patient inflow and resource demand using machine learning

Provide secure, tamper-proof access to sensitive healthcare data

Deliver intuitive dashboards for administrators, doctors, patients, and policymakers

🧩 **Core Features**

Centralized EHR Management with blockchain-based tamper-proof storage

Real-Time Resource Tracking using Kafka data streaming pipelines

Predictive Analytics for patient inflow and hospital resource demand

WhatsApp OTP Authentication using Meta API

Role-Based Dashboards for patients, doctors, hospital admins, and policymakers

Queueing Model (M/M/c) for optimized hospital bed allocation

Interactive Visualizations using Grafana

🏗️ **System Architecture**

Frontend: React.js, Tailwind CSS

Backend: Node.js (Express), FastAPI (ML services)

Streaming: Apache Kafka (Aiven managed service)

Database: PostgreSQL with TimescaleDB

Security: Blockchain, OAuth 2.0, WhatsApp-based OTP

Deployment: Docker, GitHub Actions (CI/CD)

🧠 **Machine Learning & Algorithms**

Random Forest Regressor for patient inflow prediction

Feature Engineering: lag values, rolling averages, calendar-based features

Queueing Theory (M/M/c) for hospital bed allocation simulation

Achieved ~90% prediction accuracy (R² score)

🧪 **Testing & Validation**

Unit, integration, and system testing

Validated modules:

OTP-based authentication

Secure EHR access

Resource management dashboards

Predictive analytics output

🛠️ **Tech Stack**

Frontend: React.js, Tailwind CSS, GSAP

Backend: Node.js, Express, FastAPI

Database: PostgreSQL, TimescaleDB

Streaming: Apache Kafka (Aiven)

DevOps: Docker, GitHub Actions

Tools: VS Code, Git, GitHub, Grafana

⚙️ **Setup & Installation Guide**

📁 **Environment Configuration**

Create and configure all required .env files in their respective folders.

Ensure the following are correctly configured:

Database credentials

authentication keys

Blockchain private keys and network configuration

📦 **Install Dependencies**

Run the following command in each directory to install required packages:

npm i


📂 **Directories:**

tailwindcss4

final_project_modified

blockchain

🔄 **Kafka Setup (Real-Time Data Streaming)**

Create a Kafka service using Aiven.io.

Update Kafka topics and credentials in both Python producer and consumer programs.

Update database credentials inside the Kafka programs as required.

⚠️ **Important:**

For the generation engine, always start the Kafka consumer before the producer to avoid data loss.

⛓️ **Blockchain (Ganache) Setup**

Launch the Ganache local blockchain service.

Update Key 1 and Key 2 in the blockchain configuration files based on the generated keys in your accounts.

Ensure Ganache is running before starting the application.

▶️ **Running the Application**

Start Backend Server
nodemon app.js

Start Frontend Application
npm run dev

🚀 **Use Cases**

Hospital administrators monitoring real-time resource availability

Doctors securely accessing patient health records

Patients viewing medical reports using OTP authentication

Policymakers analyzing hospital capacity and healthcare trends

📈 **Impact**

Improved hospital resource utilization

Reduced patient wait times

Enhanced emergency response readiness

Secure and transparent healthcare data management

🔮 **Future Enhancements**

Automated resource allocation

Cross-hospital and cross-border EHR sharing

AI-driven emergency response optimization

Advanced predictive analytics models

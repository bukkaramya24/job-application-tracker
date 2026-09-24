# 💼 Job Application Tracker

A React-based Job Application Tracker that helps users manage and monitor their job applications in one place.

## 📌 Project Overview

Searching for jobs can become difficult when applications are tracked manually.

This project provides a simple interface where users can:

- Add job applications
- Track application status
- Search applications
- Filter applications by status
- Edit application details
- Delete applications
- Save profile information
- View dashboard statistics

Application data and profile information are stored using the browser's LocalStorage.

## ✨ Features

### 📊 Dashboard
- Total Applications
- Applied Applications
- Interview Applications
- Selected Applications
- Rejected Applications
- Dynamic application counts

### 📝 Add Application
Users can add:

- Company name
- Job role
- Date applied
- Application status
- Job link
- Notes

### 🔍 Search & Filter
- Search by company name
- Search by job role
- Filter by application status

### ✏️ Edit Application
Users can update:

- Company
- Job role
- Status
- Date applied
- Job link
- Notes

### 🗑️ Delete Application
Users can remove applications that are no longer needed.

### 👤 Profile
Users can save:

- Name
- Email
- Phone
- Skills
- GitHub
- LinkedIn

### 📱 Responsive Design
The application works on:

- Desktop
- Tablet
- Mobile

## 🛠️ Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router
- LocalStorage
- Vite

## 📂 Project Structure

```text
src
├── components
│   ├── Navbar.jsx
│   └── ApplicationCard.jsx
│
├── pages
│   ├── Dashboard.jsx
│   ├── Applications.jsx
│   ├── AddApplication.jsx
│   └── Profile.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
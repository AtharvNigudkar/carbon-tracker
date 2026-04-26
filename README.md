# Carbon Emission Analysis and Recommendation System

## 1. Introduction

The Carbon Emission Analysis and Recommendation System is a full-stack web application designed to help users monitor, analyze, and reduce their carbon footprint based on daily activities. The system enables users to log activities such as travel, electricity usage, and waste generation, and converts them into estimated carbon emissions. It further provides analytical insights and personalized recommendations to encourage sustainable behavior.


## 2. Objectives

- To create awareness about individual carbon emissions
- To provide a platform for tracking daily activities contributing to emissions
- To analyze emission trends over time
- To generate actionable recommendations for reducing carbon footprint
- To promote environmentally responsible behavior


## 3. Features

### 3.1 User Authentication
- Secure login and registration functionality
- Session management using local storage

### 3.2 Activity Tracking
- Users can log daily activities under categories:
  - Travel
  - Electricity
  - Waste
- Each activity is associated with an emission value

### 3.3 Emission Calculation
- Calculates total carbon emissions based on user inputs
- Aggregates emissions by category and date

### 3.4 Data Visualization
- Bar chart representing emissions by activity type
- Line chart showing emission trends over time
- Interactive charts implemented using Plotly.js

### 3.5 Analytical Insights
- Identification of the highest emission source
- Weekly emission comparison
- Emission reduction goal suggestions

### 3.6 Personalized Recommendations
- Suggestions based on highest contributing emission category
- Categorized into high, medium, and low impact actions

### 3.7 History Management
- Displays all user activities in tabular format
- Search functionality to filter activities
- CSV export for external analysis

### 3.8 Learning Module
- Provides curated articles on sustainability
- Includes educational videos on carbon footprint reduction
- Displays general environmental tips


## 4. System Architecture

The application follows a client-server architecture:

- Frontend: Handles user interface and interaction
- Backend: Processes logic and handles API requests
- Database: Stores user data and activity records


## 5. Technology Stack

### Frontend
- React.js
- Tailwind CSS
- JavaScript

### Backend
- Python (Flask)

### Database
- SQLite (development)
- PostgreSQL (optional production)

### Visualization
- Plotly.js




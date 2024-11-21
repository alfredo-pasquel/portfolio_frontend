# Alfredo Pasquel Portfolio Frontend

This repository contains the frontend code for [Alfredo Pasquel](https://www.linkedin.com/in/alfredo-pasquel/)'s personal portfolio website. The application showcases his work in software engineering and audio engineering, providing visitors with an interactive and visually appealing experience.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Demo

Visit the live site at: [your-frontend-url](#) <!-- Replace with the actual URL -->

---

## Features

- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dynamic Content**: Fetches project data from the backend API using Axios.
- **Material UI Theming**: Custom dark theme with a translucent background image.
- **Navigation Bar**: Quick access to different sections and external profiles.
- **Portfolio Sections**: Separate pages for Software Engineering and Audio Engineering portfolios.
- **Project Cards**: Interactive cards displaying project details and links.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- **Git**

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-frontend-repo.git
   cd your-frontend-repo
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_API_URL=http://localhost:5001
   ```

   - Replace `http://localhost:5001` with your backend API URL if different.

### Running the Application

```bash
npm run dev
```

- The app will be running at `http://localhost:3000` by default.

---

## Project Structure

```
src/
├── assets/                     # Images and other assets
├── components/                 # Reusable components
│   ├── BackgroundWrapper.jsx   # Background layout component
│   └── NavBar.jsx              # Navigation bar component
├── pages/                      # Page components
│   ├── Home.jsx                # Home page
│   ├── SoftwareEngineeringPortfolio.jsx
│   └── AudioEngineeringPortfolio.jsx
├── theme.js                    # Custom Material UI theme
├── App.jsx                     # Main app component
└── main.jsx                    # Entry point
```

---

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast frontend build tool.
- **Material UI**: UI component library for React.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router**: Library for routing in React applications.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add YourFeature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Name**: Alfredo Pasquel
- **Email**: [your.email@example.com](mailto:your.email@example.com) <!-- Replace with your actual email -->
- **LinkedIn**: [linkedin.com/in/alfredo-pasquel](https://www.linkedin.com/in/alfredo-pasquel/)
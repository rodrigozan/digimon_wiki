# 🐾 Digimon Wiki

Welcome to **Digimon Wiki**! This project is a mobile app built with **Ionic Framework** and **Firebase**, designed to provide a comprehensive database of Digimon from the first series, **Digimon Adventure**. Explore Digimon details, evolutions, series, and much more! 🌟

---

## 📖 Table of Contents
- [📜 About the Project](#-about-the-project)
- [🚀 Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📂 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [📊 Firebase Setup](#-firebase-setup)
- [🤝 Contributing](#-contributing)
- [📸 Screenshots](#-screenshots)
- [📄 License](#-license)
- [👤 Author](#-author)

---

## 📜 About the Project

**Digimon Wiki** is a mobile app for Digimon fans! It provides detailed information about the Digimon from the **Digimon Adventure** series, including:
- Digimon stats (level, type, attribute, powers, etc.)
- Evolution chains
- DigiDestined partners and their descriptions
- Series and episode appearances

The app is designed with **modern UI/UX trends** for anime fans, featuring vibrant colors, responsive design, and interactive elements. 🖌️

---

## 🚀 Features

✨ **Key Features**:
- 🐉 **Digimon Database**: Explore detailed information about Digimon.
- 🔗 **Evolution Chains**: View the evolution tree of each Digimon.
- 🎥 **Series Information**: Learn about the Digimon Adventure series and its episodes.
- 🔍 **Search Functionality**: Quickly find your favorite Digimon or series.
- 🌙 **Dark Mode**: Enjoy the app in dark mode for a better experience.

---

## 🛠️ Technologies Used

This project uses the following technologies:

- **Ionic Framework**: For building the mobile app.
- **Angular**: For app structure and logic.
- **Firebase**: For database and backend services.
- **Bootstrap**: For additional styling.
- **TypeScript**: For type-safe development.

---

## 📂 Project Structure

```bash
digimon_wiki/
├── src/
│ ├── app/ # Main app module
│ ├── assets/ # Static assets (images, icons, etc.)
│ ├── environments/ # Environment configurations
│ ├── pages/ # App pages (home, details, etc.)
│ ├── services/ # Firebase and data services
│ ├── models/ # TypeScript interfaces for data
│ └── styles.css # Global styles
├── README.md # Project documentation
├── angular.json # Angular configuration
├── package.json # Dependencies and scripts
└── firebase.json # Firebase configuration
```

---

## ⚙️ Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rodrigozan/digimon_wiki.git
   cd digimon_wiki
   ```

Install dependencies:

```bash
npm install
```

Or

```bash
yarn install
```

Run the app:

```bash
ionic serve
```

Build for production:

```bash
ionic build
```

---

## 📊 Firebase Setup

To use Firebase with this project:

- Go to the Firebase Console.
- Create a new project and enable Firestore Database.
- Add your Firebase configuration to src/environments/environment.ts:
    ```typescript
    export const environment = {
    production: false,
    firebase: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    }
    };
    ```
- Import the initial data (JSON provided earlier) into Firestore.

---

## 🤝 Contributing

Contributions are welcome! 🎉

If you'd like to contribute:

- Fork the repository.
- Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
- Commit your changes:
```bash
git commit -m "Add your feature"
```
- Push to your branch:
```bash
git push origin feature/your-feature-name
```
- Open a pull request.

---

## 📸 Screenshots

#### Home Page
[!image](image)

#### Digimon Details
[!image](image)

#### Evolution Tree
[!image](image)

---

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## 👤 Author

**Rodrigo Zandonadi**

- **GitHub**: [@rodrigozan](https://github.com/rodrigozan)
- **Email**: [rodrigozan.dev@outlook.com](mailto:rodrigozan.dev@outlook.com)

---

Thank you for visiting the Digimon Wiki project! 🐾 If you have any questions or suggestions, feel free to reach out. 😊
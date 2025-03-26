BeastMode Fitness App 💪
BeastMode is a modern and fully responsive Fitness App built with React.js and Material UI. The app allows users to search for exercises, view exercise details, and watch related workout videos from YouTube. It also features a sleek and modern design with smooth transitions, intuitive navigation, and real-time data fetching using RapidAPI.

🚀 Features
✅ Modern and responsive design with Material UI
✅ Search exercises by body part, equipment, and target muscle
✅ Watch related workout videos from YouTube
✅ Pagination for better data management
✅ Clean and consistent UI with hover and animation effects
✅ Custom components for reusability
✅ Error handling and debouncing for optimized API calls

🖥️ Tech Stack
Technology	Description
React.js	Frontend framework
Material UI	Styling and component library
React Router	Client-side routing
RapidAPI	API integration for exercise data
YouTube API	Embedded workout videos
ESLint	Code linting and formatting
📂 Project Structure
pgsql
Copy
Edit
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── assets
│   │   ├── images
│   ├── components
│   │   ├── BodyPart.js
│   │   ├── ExerciseCard.js
│   │   ├── ExerciseDetail.js
│   │   ├── ExerciseVideos.js
│   │   ├── Footer.js
│   │   ├── HeroBanner.js
│   │   ├── HorizontalScrollbar.js
│   │   ├── Loader.js
│   │   ├── Navbar.js
│   │   └── SearchExercises.js
│   ├── pages
│   │   ├── Home.js
│   │   └── ExerciseDetail.js
│   ├── utils
│   │   ├── fetchData.js
│   │   └── debounce.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .eslintrc.js
├── .gitignore
├── package.json
├── README.md
⚙️ Installation
Follow these steps to set up and run the project locally:

1. Clone the repository:
bash
Copy
Edit
git clone https://github.com/NishantChaubey534/Make-yourself-Fit.git
2. Navigate to the project directory:
bash
Copy
Edit
cd beastmode-fitness
3. Install dependencies:
bash
Copy
Edit
npm install
4. Create a .env file:
Create a .env file in the root directory and add the following:

bash
Copy
Edit
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
REACT_APP_RAPIDAPI_HOST=exercisedb.p.rapidapi.com
5. Start the development server:
bash
Copy
Edit
npm start
🎯 Usage
✅ Home Page:
Displays a hero banner and a search bar to find exercises.

Allows filtering exercises based on body parts, equipment, and muscle targets.

✅ Exercise Detail Page:
Shows details of a selected exercise (muscles involved, equipment used).

Displays related videos from YouTube.

✅ Footer and Navbar:
Provides easy navigation and quick links.

Includes social media links and app branding.

🌟 Code Snippets
Fetching Data using RapidAPI:
javascript
Copy
Edit
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
Debouncing Function to Reduce API Calls:
javascript
Copy
Edit
export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
🚨 Environment Variables
Key	Description
REACT_APP_RAPIDAPI_KEY	Your RapidAPI key
REACT_APP_RAPIDAPI_HOST	The host URL for the exercise API
✅ Best Practices Followed
✔️ Clean component-based architecture
✔️ Consistent code formatting using ESLint
✔️ Proper handling of API errors and loading states
✔️ Accessibility and mobile responsiveness
✔️ Lightweight and optimized performance

🛠️ Available Scripts
Start the development server:
bash
Copy
Edit
npm start
Build the production build:
bash
Copy
Edit
npm run build
Lint the code:
bash
Copy
Edit
npm run lint
🧪 Testing
Tested on Chrome, Firefox, and Edge.

Fully responsive on mobile, tablet, and desktop devices.

🙌 Contributing
Fork the repository.

Create a new branch:

bash
Copy
Edit
git checkout -b feature/your-feature
Make your changes and commit:

bash
Copy
Edit
git commit -m "Add your changes"
Push to your branch:

bash
Copy
Edit
git push origin feature/your-feature
Create a pull request.

📧 Contact
📩 Email: chaubeynishant2@gmail.com
🌐 GitHub: https://github.com/NishantChaubey534

🏆 Acknowledgments
Special thanks to:

RapidAPI for providing exercise data

YouTube API for workout videos

Material UI for modern UI components

📝 License
This project is licensed under the MIT License – see the LICENSE file for details.

🚀 BeastMode - Unleash Your Inner Beast! 😎

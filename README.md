🎉 JoyVilla – Fun Sentiment Analysis for Kids

JoyVilla is an interactive learning and creativity platform designed especially for 6th standard kids.
It combines sentiment analysis with fun coloring activities to make learning both educational and enjoyable.
live :https://joy-ville-bbba.vercel.app/

✨ Features

✅ Sentiment Analysis – Kids can type a short sentence (like "I love mangoes" 🍋) and JoyVilla will detect if it's Happy, Sad, Angry, or Neutral.
✅ Coloring Game – Fun SVG fruit outlines 🥭🍎🍌 that kids can color using a crayon-style color palette.
✅ Kid-Friendly UI – Bright, simple, and easy-to-use interface designed for young students.
✅ Learning + Play – Encourages kids to express emotions through text and explore creativity with colors.

🖼️ Demo
🎭 Sentiment Analysis

Input: "I had fun at school today!"

Output: Happy 😊

🎨 Coloring Game

Select a fruit (Apple, Mango, Banana, etc.)

Pick a crayon color from the palette

Click on the fruit area to fill the color

🛠️ Tech Stack

Frontend: React + Tailwind CSS

Backend: Node.js / Express

Machine Learning: Simple sentiment analysis model (NLTK / TensorFlow.js / Rule-based sentiment)

Storage: Local assets (SVGs, JSON),   MongoDB for progress

Deployment: Vercel / Netlify (Frontend)

📂 Project Structure
joyvilla/
│── public/                 # Static assets
│   ├── fruits/             # SVG fruit outlines
│   ├── icons/              # Crayon / UI icons
│
│── src/
│   ├── components/
│   │   ├── SentimentBox.jsx    # Sentiment input + analysis
│   │   ├── FruitColoring.jsx   # Coloring game component
│   │   ├── ColorPalette.jsx    # Crayon palette
│   │   └── Navbar.jsx          # Top navigation
│   │
│   ├── utils/
│   │   ├── sentiment.js        # Sentiment analysis logic
│   │
│   ├── App.jsx                 # Main entry
│   ├── index.css               # Global styles
│
│── backend/
│   ├── server.js               # Express backend
│   ├── sentimentModel.js       # ML / rule-based logic
│
│── package.json
│── README.md

🚀 Installation & Setup

1️⃣ Clone the repo

git clone https://github.com/your-username/joyvilla.git
cd joyvilla


2️⃣ Install dependencies

npm install


3️⃣ Run development server

npm run dev


4️⃣ Open in browser

http://localhost:5173

🎯 How Kids Can Use

Open JoyVilla on browser

Enter a sentence → See emotional feedback (happy, sad, etc.)

Select a fruit → Choose crayon → Color it creatively

Play, learn and share! 🎨

📌 Future Enhancements

🧠 Better sentiment model with emojis & contextual understanding

📊 Progress tracker (how many sentences analyzed, how many fruits colored)

🌍 Multi-language support (English, Hindi, Telugu, etc.)

🤝 Contribution

Contributions are welcome!

Fork repo

Create a new branch

Commit changes

Submit PR 🚀

🧑‍🏫 Target Audience

6th standard students 👦👧

Teachers can use JoyVilla to help students understand emotions and express creativity

Parents can use it at home for fun learning sessions

📜 License

MIT License © 2025 JoyVilla Team

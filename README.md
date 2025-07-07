# 🎮 Retro Quiz Arcade

A spectacular retro-themed quiz game with neon aesthetics, multiple categories, and engaging visual effects. Test your knowledge across 9 different categories with 25 questions each!

![Retro Quiz Arcade](https://img.shields.io/badge/Status-Active-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 **Quiz Categories (225+ Questions)**
- 🧠 **General Knowledge** - World facts and trivia
- 🔬 **Science & Nature** - Scientific discoveries and natural world
- 🏛️ **History** - Historical events and figures
- 🎬 **Movies** - Cinema and entertainment
- 🎮 **Video Games** - Gaming culture and history
- 🎵 **Music** - Musical knowledge and artists
- ⚽ **Soccer** - Football facts and recent events
- 🎶 **Afrobeats** - Nigerian music and artists
- 🇳🇬 **Nigerian History & Politics** - Nigerian heritage and governance

### 🎨 **Visual Experience**
- **3 Retro Themes**: Neon, Pixel, and Synth
- **Matrix Rain Effects** with floating particles
- **Holographic Text** with scan line animations
- **Neon Glow Borders** and pulsing effects
- **Lightning Effects** and particle systems
- **Responsive Design** for all devices

### 🎮 **Game Features**
- **Timed Questions** (15 seconds per question)
- **Visual Feedback** (green for correct, red for wrong)
- **Auto-progression** to next question
- **Score Tracking** with performance metrics
- **Progress Indicators** and completion stats
- **Theme Switching** on the fly

## 🚀 Getting Started

### **Quick Start**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/retro-quiz-arcade.git
   ```

2. Navigate to the project directory:
   ```bash
   cd retro-quiz-arcade
   ```

3. Open `index.html` in your web browser or serve it locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Or simply open index.html in your browser
   ```

4. Start playing! 🎉

### **Live Demo**
🌐 [Play Now](https://yourusername.github.io/retro-quiz-arcade)

## 📁 Project Structure

```
retro-quiz-arcade/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # Game logic and question database
├── README.md           # Project documentation
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## 🎯 How to Play

1. **Choose Your Theme** - Select from Neon, Pixel, or Synth themes
2. **Start Game** - Click "START GAME" from the main menu
3. **Select Category** - Choose from 9 different quiz categories
4. **Set Difficulty** - Pick Easy, Medium, or Hard
5. **Configure Quiz** - Set number of questions (5-20) and time per question
6. **Play!** - Answer questions within the time limit
7. **View Results** - See your score and performance stats

## 🛠️ Technical Details

### **Built With**
- **HTML5** - Semantic structure
- **CSS3** - Advanced animations and effects
- **Vanilla JavaScript** - Game logic and interactivity
- **Tailwind CSS** - Utility-first styling
- **Font Awesome** - Icons
- **Google Fonts** - Retro typography

### **Key Features**
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Performance Optimized** - Smooth animations and fast loading
- **Cross-browser Compatible** - Works on all modern browsers

### **Animations & Effects**
- CSS Keyframe animations for smooth transitions
- Matrix rain effect with dynamic particles
- Holographic text distortion effects
- Glow and pulse animations
- Particle floating systems
- Lightning and scan line effects

## 🎨 Customization

### **Adding New Categories**
1. Open `script.js`
2. Add your category to the `questionDatabase` object:
   ```javascript
   yourcategory: [
       { question: "Your question?", answers: ["A", "B", "C", "D"], correct: 0 }
   ]
   ```
3. Update the category dropdown in `index.html`
4. Add an icon to the `addCategoryIcons()` function

### **Creating New Themes**
1. Open `styles.css`
2. Add a new theme class:
   ```css
   .theme-yourtheme {
       --primary: #your-color;
       --secondary: #your-color;
       --accent: #your-color;
       --bg: #your-color;
   }
   ```
3. Add theme button in `index.html`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### **Ideas for Contributions**
- 🎵 Add sound effects
- 🏆 Implement leaderboards
- 📱 Improve mobile experience
- 🌍 Add more languages
- 🎯 Create new question categories
- 🎨 Design new themes

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Fela Kuti** - Inspiration for Afrobeats category
- **Nigerian Culture** - Rich history and politics questions
- **Retro Gaming** - Aesthetic inspiration
- **Open Source Community** - Tools and libraries used

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

⭐ **Star this repository if you found it helpful!** ⭐

Made with ❤️ and lots of ☕

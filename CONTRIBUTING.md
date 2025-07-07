# Contributing to Retro Quiz Arcade

Thank you for your interest in contributing to Retro Quiz Arcade! 🎮✨

## 🤝 How to Contribute

### **Reporting Bugs**
1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/retro-quiz-arcade/issues)
2. If not, create a new issue with:
   - Clear description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device information

### **Suggesting Features**
1. Check existing [Issues](https://github.com/yourusername/retro-quiz-arcade/issues) for similar suggestions
2. Create a new issue with:
   - Clear feature description
   - Use case/motivation
   - Possible implementation approach

### **Code Contributions**

#### **Getting Started**
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/retro-quiz-arcade.git
   ```
3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### **Development Guidelines**
- **HTML**: Use semantic HTML5 elements
- **CSS**: Follow existing naming conventions, use CSS custom properties
- **JavaScript**: Use vanilla JS, maintain existing code style
- **Comments**: Add comments for complex logic
- **Testing**: Test on multiple browsers and devices

#### **Adding New Quiz Categories**
1. Open `script.js`
2. Add your category to `questionDatabase`:
   ```javascript
   yourcategory: [
       { 
           question: "Your question here?", 
           answers: ["Option A", "Option B", "Option C", "Option D"], 
           correct: 0 // Index of correct answer (0-3)
       }
       // Add 24 more questions (25 total)
   ]
   ```
3. Update `index.html` dropdown
4. Add icon to `addCategoryIcons()` function
5. Test thoroughly

#### **Creating New Themes**
1. Open `styles.css`
2. Add theme variables:
   ```css
   .theme-yourtheme {
       --primary: #color1;
       --secondary: #color2;
       --accent: #color3;
       --bg: #background-color;
   }
   ```
3. Add theme button in `index.html`
4. Test with all game states

### **Pull Request Process**
1. Ensure your code follows the project style
2. Test your changes thoroughly
3. Update documentation if needed
4. Create a pull request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots/GIFs for UI changes

## 🎯 Priority Areas for Contribution

### **High Priority**
- 🎵 Sound effects implementation
- 📱 Mobile experience improvements
- 🏆 Leaderboard system
- 💾 Local storage for scores
- 🌍 Internationalization (i18n)

### **Medium Priority**
- 🎨 New visual themes
- 📊 Performance optimizations
- ♿ Accessibility improvements
- 🎮 New game modes
- 📱 PWA features

### **Low Priority**
- 🎯 New question categories
- 🎨 Visual polish
- 📝 Documentation improvements
- 🧪 Testing framework setup

## 📋 Code Style Guidelines

### **HTML**
- Use semantic elements (`<main>`, `<section>`, `<article>`)
- Include proper ARIA labels
- Maintain consistent indentation (2 spaces)

### **CSS**
- Use CSS custom properties for theming
- Follow BEM-like naming for custom classes
- Group related properties together
- Use meaningful animation names

### **JavaScript**
- Use `const` and `let` instead of `var`
- Use descriptive variable and function names
- Add JSDoc comments for functions
- Handle errors gracefully

## 🐛 Bug Report Template

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- Browser: [e.g. Chrome 91]
- Device: [e.g. iPhone 12]
- OS: [e.g. iOS 14]
```

## 💡 Feature Request Template

```markdown
**Feature Description**
A clear description of the feature.

**Problem/Motivation**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives**
Any alternative solutions considered?

**Additional Context**
Any other context or screenshots.
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Special thanks in commit messages

## 📞 Questions?

- Open an [Issue](https://github.com/yourusername/retro-quiz-arcade/issues)
- Start a [Discussion](https://github.com/yourusername/retro-quiz-arcade/discussions)

Thank you for contributing! 🎉

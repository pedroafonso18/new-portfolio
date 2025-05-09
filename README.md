# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to showcase your projects and skills in a clean, professional manner.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Animated sections and project cards
- Skills showcase
- Project showcase with links to code and live demos
- Contact section with social media links
- Modern and clean UI

## Getting Started

1. Clone this repository
2. Customize the content in `index.html`:
   - Update the personal information
   - Add your own projects
   - Update social media links
   - Add your own skills
3. Customize the styling in `styles.css` if desired
4. Test the website locally by opening `index.html` in your browser

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repository-url>
   git push -u origin main
   ```
3. Go to your repository settings on GitHub
4. Scroll down to the "GitHub Pages" section
5. Select the main branch as the source
6. Your portfolio will be available at `https://<your-username>.github.io/<repository-name>`

## Customization

### Adding Projects
To add a new project, copy the project card structure in the HTML and update the content:

```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Project description</p>
    <div class="project-links">
        <a href="#" target="_blank"><i class="fab fa-github"></i> Code</a>
        <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
    </div>
</div>
```

### Updating Skills
To update your skills, modify the skills list in the HTML:

```html
<div class="skills">
    <h3>Skills</h3>
    <ul>
        <li>Your Skill 1</li>
        <li>Your Skill 2</li>
        <!-- Add more skills -->
    </ul>
</div>
```

## Contributing

Feel free to fork this repository and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE). 
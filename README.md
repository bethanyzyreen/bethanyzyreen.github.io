# Bethany Zyreen — Portfolio

Personal portfolio website of **Bethany Zyreen**, an aspiring Forensic Computer Analyst.

Live site: https://bethanyzyreen.github.io

## Pages

| File | Description |
| --- | --- |
| `index.html` | Landing page |
| `portfolio.html` | About, skills, projects, web development activities, experience & contact |
| `resume.html` | Resume |

## Sections in `portfolio.html`

- **Projects** — Qydentra, Zythera, Zyreen Mobile Bookstore App, Measurement Conversion System, Sunset Pages. Each has a "View Project" button that opens a details modal.
- **Web development activities** — "View Activity" opens the activity page directly in a new tab:
  - Activity 1 — Bento Layout: `WebDev-Activities/Activity1/bento.html`
  - Activity 2 — JSON

## Project structure

```
.
├── index.html
├── portfolio.html
├── resume.html
└── assets/
    ├── css/   style.css, pages.css, activities.css, resume.css
    ├── js/    script.js, legacy.js
    └── img/   images and screenshots
```

## Built with

HTML, CSS, JavaScript, [Font Awesome 6.5](https://fontawesome.com/) and Google Fonts (Playfair Display, Poppins). No build step required.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

Hosted with GitHub Pages — push to the `main` branch of `bethanyzyreen.github.io`.

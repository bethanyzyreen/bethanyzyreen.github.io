# Bethany Zyreen — Portfolio

Personal portfolio website of **Bethany Zyreen**.

Live site: https://bethanyzyreen.github.io

## Pages

| File | Description |
| --- | --- |
| `index.html` | Redirects to `portfolio.html` |
| `portfolio.html` | About, skills, projects, web development activities, experience & contact |
| `resume.html` | Resume |

## Sections in `portfolio.html`

- **Projects:** Qydentra, Zythera, Zyreen Mobile Bookstore App, Measurement Conversion System, and Sunset Pages. Each has a "View Project" button that opens a details modal.
- **Web development activities:** each card opens its page directly in a new tab ("View Activity" / "View Project"):
  - Activity 1, Bento Layout: `WebDev-Activities/Activity1/bento.html`
  - Activity 2, Pastry Menu: `WebDev-Activities/Activity2/json.html`
  - Midterm Project, NARUTOVERSE: `WebDev-Activities/midterm_project/index.html`

The activities and the midterm project are documented in [`WebDev-Activities/README.md`](WebDev-Activities/README.md).

## Project structure

```
.
├── index.html
├── portfolio.html
├── resume.html
├── README.md
├── WebDev-Activities/
│   ├── Activity1/          bento.html + assets/img
│   ├── Activity2/          json.html + assets/img
│   └── midterm_project/    index.html, view.html + assets/ (css, js, img)
└── assets/
    ├── css/    style.css, pages.css (portfolio) · resume.css (resume)
    ├── js/     script.js (portfolio) · legacy.js (resume)
    └── img/    images and screenshots
```

## Built with

- **Portfolio:** HTML, CSS, JavaScript, [Font Awesome 6.5](https://fontawesome.com/), and Google Fonts (Playfair Display, Poppins).
- **Resume:** the same fonts plus [Bootstrap 5.3.3](https://getbootstrap.com/) from a CDN.
- No build step required.

## Run locally

Open `portfolio.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. The midterm project needs an internet connection (Bootstrap CDN and its character API).

## Deploy

Hosted with GitHub Pages. Push to the `main` branch of `bethanyzyreen.github.io`.
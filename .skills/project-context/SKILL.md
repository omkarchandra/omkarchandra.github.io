---
name: project-context
description: Context about this personal website project. Use this skill to understand the site structure, conventions, and how to make changes to omkarchandra.github.io.
---

# Project Context

## Overview

This is Omkar Chandra's personal website hosted on GitHub Pages at **omkarchandra.github.io**. It is a static site built with plain HTML, CSS, and JavaScript (no frameworks or build tools).

## Owner Background

Omkar Chandra is a computational biology researcher with a PhD focused on "Explainable machine learning with epigenomic features for insights into regulatory and functional genomics." His work spans bioinformatics, genomics, epigenomics, and machine learning. He also develops Android apps (Focus Friend on Play Store).

## Site Structure

```
omkarchandra.github.io/
├── index.html                          # Blog listing page (homepage)
├── about.html                          # About page with bio, books, blogs, links, contact
├── publications.html                   # Academic publications + embedded PhD thesis PDF
├── not_able_to_solve_human_genome.html # Blog post
├── self-organization.html              # Blog post
├── DNA_molecules.html                  # Blog post
├── optimizing_for_the_masses.html      # Blog post
├── demo.html                           # Demo page
├── files/                              # Static assets (thesis PDF, etc.)
└── .skills/                            # Agent skills for project context
```

## Key Conventions

### Styling
- CSS variables defined in `:root` for theming: `--primary-color: rgb(57, 67, 174)`, `--light-bg: #FDFBF7`, etc.
- Dark mode support via `body.dark-mode` class, toggled by a button in the header
- Theme preference persisted in `localStorage`
- Font: Verdana (about/publications pages), Roboto (index page)
- Font Awesome 6.4.0 for icons

### Layout Pattern
- Fixed header with nav links and theme toggle button
- Footer with `var(--primary-color)` background
- Content in `.container` div with `max-width: 800px` (or 1200px on index)
- Pages use `flex` layout with `min-height: 100vh` to push footer to bottom

### Navigation
- Header nav links: Blog (`index.html`), About Me (`about.html`)
- Active page highlighted with `nav a.active` class
- Publications page adds a third nav link

### About Page Sections
The about page uses `.about-section` cards with `.favorites-container` > `.favorites-category` pattern:
- Bio intro
- Favorite Books and Blogs (with subcategories: Books, Blogs, Posts/Articles, Publications)
- Useful Links
- Contact

### Adding a Book
Add a new `<li>` inside the Books `<ul class="favorites-list">`:
```html
<li>
  <span class="favorite-title">"Book Title"</span>
  <span class="favorite-author">Author: Author Name</span>
</li>
```

### Adding a Blog Post
1. Create a new HTML file at the root (e.g., `my-post.html`)
2. Add a blog card to `index.html` inside `.blog-posts`:
```html
<article class="blog-card">
  <div class="blog-content">
    <h3><a href="/my-post.html">Post Title</a></h3>
  </div>
</article>
```

## Git Remotes

- `origin`: `git@github.com:omkarchandra/omkarchandra.github.io.git` (SSH - may fail if key not configured)
- `omkarchandra.github.io`: `https://github.com/omkarchandra/omkarchandra.github.io.git` (HTTPS - use this for pushing)

Always push via the HTTPS remote: `git push omkarchandra.github.io main`

## Git Workflow

When committing and pushing changes:

1. Stage specific files (avoid `git add .` or `git add -A`):
   ```bash
   git add about.html index.html
   ```

2. Commit with a clear message:
   ```bash
   git commit -m "Add book title to reading list"
   ```

3. Push using the **HTTPS remote** (SSH key is not configured):
   ```bash
   git push omkarchandra.github.io main
   ```

Do **not** use `git push origin main` — the `origin` remote uses SSH and will fail with a permission denied error.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TinkerHub Learning Paths is a Hugo-based static site that hosts curated learning paths for various technologies. It uses Decap CMS (formerly Netlify CMS) with GitHub backend for content management and is deployed on Netlify.

## Common Commands

```bash
# Run development server
hugo server

# Build for production
hugo --gc --minify

# Create a new learning path
hugo new path-name.md

# Compile theme SCSS (from themes/tinkerhub/)
cd themes/tinkerhub && yarn && yarn build
```

## Architecture

### Content Structure
- `content/*.md` - Learning path markdown files with YAML front matter
- `content/_index.md` - Home page content (has `mainpage: true`)
- `content/category/` - Category taxonomy pages

### Front Matter Fields
Learning paths require these fields:
- `title`, `date`, `category` (language/framework/devops/ai-ml/other)
- `image` (path relative to static/, e.g., `images/python.png`)
- `tags`, `authors` (GitHub usernames)
- `mainpage: false`, `draft: false`
- Optional: `shortDescription`, `pathType` (for filtering)

### Theme
- Located in `themes/tinkerhub/`
- Layouts: `layouts/_default/single.html` (learning paths), `layouts/index.html` (home)
- Partials: `layouts/partials/` (head, header, footer, intro)
- Styles: `less/` directory, compiled with `yarn build`

### CMS Configuration
- `static/admin/index.html` - Decap CMS entry point
- `static/admin/config.yml` - CMS collections and field definitions
- Uses GitHub backend with open authoring (contributors fork and submit PRs)

### Taxonomies
Defined in `config.toml`:
- `category` - language, framework, devops, ai-ml, other
- `tags` - searchable keywords
- `pathType` - frontend, backend, fullstack, etc. (see `types.md`)

## Deployment

Configured in `netlify.toml`. Builds trigger on push to `main` branch.

# Production & Development

## Running the development server at `localhost:3000`

```
npm run dev
```

## Production Option 1: Static files generated at `/out`

```
npm run export
```

### Host using a simple web server or use the embedded one

```
npm run serve
```

## Production Option 2: Next.JS Server (optimized, async code split, lazy load)

```
npm run build
npm start
```

# Routers, Sitemaps and Links

Used to generate header links, mobile menu links, footer links and sitemap.xml.

```
/routes.js
```

# Theme & Styling

```
/components/Theme.jsx
```

# Content Management

```
/contents/*
```

## SEO and meta tags

```
"meta": {
    "title": "Home",
    "description": "Home description",
    "keywords": "home keyword"
},
```

# Utils

## Compress all images (gifs, png, jpb, mp4, webm) from `/images` to `/static/images`

```
brew install pngquant jpegoptim
node run compress
```

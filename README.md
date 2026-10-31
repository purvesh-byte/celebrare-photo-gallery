

# Celebrare Photo Gallery

A responsive photo gallery built with React and Vite using the Picsum Photos API. Browse photos, search by author, and save favourite photos with persistence across browser refreshes.

## Features

- Fetches 30 photos from the Picsum Photos API
- Loading spinner while photos are being fetched
- Error handling for failed API requests
- Responsive photo grid:
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- Real-time, case-insensitive author search
- No-results message for unmatched searches
- Favourite toggle using heart icons
- Favourite state managed with `useReducer`
- Favourites persisted in `localStorage`
- Custom `useFetchPhotos` hook
- `useCallback` for the search handler
- `useMemo` for filtered photo results

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Picsum Photos API
- React Hooks
- Browser `localStorage`

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/purvesh-byte/celebrare-photo-gallery.git
```

Navigate to the project directory:

```bash
cd celebrare-photo-gallery
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

### Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## API

Photos are fetched from:

```text
https://picsum.photos/v2/list?limit=30
```

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── Loader.jsx
│   ├── PhotoCard.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favoritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## Assignment Requirements

This project implements photo fetching, loading and error states, responsive layout, author search, favourites management using `useReducer`, localStorage persistence, and a custom React hook.

## Author

Purvesh Kadam

## Repository

https://github.com/purvesh-byte/celebrare-photo-gallery


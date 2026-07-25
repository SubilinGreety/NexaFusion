# Public Assets Directory

This folder contains static files served directly by Next.js at the root URL.

## Subdirectories

- `images/` — Full-size images used on pages (hero banners, portfolio covers, team photos)
- `icons/` — Small icon files (`.ico`, `.svg`, favicon variants)
- `logo/` — AEVORA logo variations (light, dark, icon-only)
- `videos/` — Background or feature video files (`.mp4`, `.webm`)

## Usage

Reference files in components using absolute paths:
```tsx
<img src="/images/hero-banner.webp" alt="Hero" />
<video src="/videos/background.mp4" autoPlay muted loop />
```

Or with Next.js Image component:
```tsx
import Image from 'next/image';
<Image src="/logo/aevora-logo.svg" alt="AEVORA Logo" width={120} height={40} />
```

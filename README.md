# Johnny Devils — Official Website

Multi-page band website built with **Next.js 16**, **Tailwind CSS v4**, and **Storyblok CMS** (Visual Editor enabled).

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, JavaScript) |
| Styling | Tailwind CSS v4 (CSS-based `@theme` config) |
| CMS | Storyblok v3 (`@storyblok/react`) |
| Fonts | next/font — Playfair Display, Inter, Bebas Neue |
| Animation | Framer Motion |
| Icons | Lucide React |
| Gallery Lightbox | yet-another-react-lightbox |
| Email (contact form) | Resend |

---

## Getting Started

### 1. Clone & install

```bash
cd "CC Rider/johnny-devils"
npm install
```

### 2. Environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `STORYBLOK_ACCESS_TOKEN` | Server-side preview/draft token from Storyblok |
| `NEXT_PUBLIC_STORYBLOK_TOKEN` | Same token, exposed to client (for Visual Editor bridge) |
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `EMAIL_TO` | Address where contact form submissions are delivered |

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site runs with **static fallback content** if Storyblok is not yet connected.

---

## Storyblok Setup

### Connect your space

1. Create a new Storyblok space at [app.storyblok.com](https://app.storyblok.com)
2. Go to **Settings → API Keys** and copy your **Preview** token
3. Paste it into `.env.local` as both `STORYBLOK_ACCESS_TOKEN` and `NEXT_PUBLIC_STORYBLOK_TOKEN`

### Configure Visual Editor

1. In Storyblok go to **Settings → Visual Editor**
2. Set the **Preview URL** to `http://localhost:3000/`
3. Enable the **Storyblok Bridge**

### Create Stories (pages)

Create one Storyblok Story per route using the slug table:

| Route | Storyblok slug |
|---|---|
| `/` | `home` |
| `/about` | `about` |
| `/discography` | `discography` |
| `/tour` | `tour` |
| `/music` | `music` |
| `/gallery` | `gallery` |
| `/merch` | `merch` |
| `/press` | `press` |
| `/contact` | `contact` |
| `/discography/[slug]` | `releases/[slug]` |

Each Story's **content body** is a `blocks` field. Add blocks from the component list below.

---

## Storyblok Component Schema

Register these components in your Storyblok space. Every component below maps to a file in `/components/sections/`.

### Page Section Bloks

#### `hero`
| Field | Type | Notes |
|---|---|---|
| `headline` | Text | Main H1 text |
| `subheadline` | Text | Tagline below headline |
| `background_image` | Asset | Full-viewport hero image |
| `cta_label` | Text | Primary button label |
| `cta_href` | Text | Primary button href |
| `video_embed` | Text | Optional embed URL |

#### `about`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | Section heading |
| `body_text` | Richtext | Band bio |
| `band_photo` | Asset | Band group photo |
| `members` | Blocks (nested) | Each: `name`, `role`, `photo` (Asset) |

#### `release`
| Field | Type | Notes |
|---|---|---|
| `title` | Text | Album/EP/Single title |
| `cover_image` | Asset | Cover art |
| `release_date` | Date | |
| `type` | Text | `Album` / `EP` / `Single` |
| `spotify_url` | Text | |
| `apple_url` | Text | |
| `bandcamp_url` | Text | |
| `tracklist` | Blocks | Each: `number`, `title`, `duration` |

#### `discography`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `releases` | Multi-reference | References to `release` stories |

#### `tour_date`
| Field | Type | Notes |
|---|---|---|
| `date` | Date | |
| `venue` | Text | |
| `city` | Text | |
| `country` | Text | |
| `ticket_url` | Text | External ticket link |
| `sold_out` | Boolean | |

#### `tour_list`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `dates` | Blocks | Nested `tour_date` blocks |

#### `music_embed`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `platform` | Text | `spotify` / `youtube` / `soundcloud` |
| `embed_url` | Text | Embed src URL from platform |

#### `gallery`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `images` | Blocks | Each: `asset` (Asset), `caption` (Text) |
| `layout` | Text | `grid` or `masonry` |

#### `merch_item`
| Field | Type | Notes |
|---|---|---|
| `name` | Text | |
| `image` | Asset | |
| `price` | Text | e.g. `$35` |
| `external_url` | Text | Link to store |
| `sold_out` | Boolean | |

#### `merch_grid`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `items` | Blocks | Nested `merch_item` blocks |

#### `press_kit`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `bio_text` | Richtext | |
| `quotes` | Blocks | Each: `quote`, `source`, `publication` |
| `downloadables` | Blocks | Each: `label`, `file` (Asset) |
| `band_photos` | Multi-asset | Press photos (downloadable) |

#### `contact_form`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `subtext` | Text | |
| `booking_email` | Text | Shown in success message |

#### `text_section`
| Field | Type | Notes |
|---|---|---|
| `heading` | Text | |
| `body` | Richtext | |
| `alignment` | Text | `left` / `center` / `right` |

---

## Design Tokens

Tokens are defined in `app/globals.css` under the `@theme` block and available as Tailwind classes:

| Token | Class | Value |
|---|---|---|
| Deep warm black | `bg-brand-black` / `text-brand-black` | `#1A1208` |
| Aged cream | `bg-brand-cream` / `text-brand-cream` | `#F2E8D0` |
| Gold/copper accent | `bg-brand-amber` / `text-brand-amber` | `#C8893A` |
| Deep rust | `bg-brand-rust` / `text-brand-rust` | `#8B3A2A` |
| Card surface | `bg-brand-smoke` | `#2E2820` |
| Secondary text | `text-brand-muted` | `#7A6E5E` |

Typography classes: `.heading-display`, `.heading-serif`, `.label-accent`

---

## Project Structure

```
/app
  layout.js                 ← storyblokInit, fonts, global meta
  page.js                   ← Home (/)
  /about/page.js
  /discography/page.js
  /discography/[slug]/page.js
  /tour/page.js
  /music/page.js
  /gallery/page.js
  /merch/page.js
  /press/page.js
  /contact/page.js
  /api/contact/route.js     ← POST handler → Resend

/components
  /layout
    Navbar.jsx
    Footer.jsx
    MobileMenu.jsx
  /sections                 ← Storyblok blok components
    SbHero.jsx
    SbAbout.jsx
    SbRelease.jsx
    SbDiscography.jsx
    SbTourDate.jsx
    SbTourList.jsx
    SbMusicEmbed.jsx
    SbGallery.jsx
    SbMerchItem.jsx
    SbMerchGrid.jsx
    SbPressKit.jsx
    SbContactForm.jsx
    SbTextSection.jsx
    HomePageFallback.jsx    ← Static fallback when CMS not connected
  /ui
    Button.jsx
    ReleaseCard.jsx
    TourRow.jsx
    MerchCard.jsx

/storyblok
  components.js             ← Component registry for storyblokInit

/lib
  storyblok.js              ← fetchStory, fetchStories, fetchGlobalConfig helpers

/public
  placeholder-logo.svg

app/globals.css             ← Tailwind @theme tokens + base styles
.env.local.example
```

---

## Contact Form

The form at `/contact` POSTs to `/api/contact/route.js`, which uses **Resend** to send an email. To enable it:

1. Sign up at [resend.com](https://resend.com) and get an API key
2. Add your domain in Resend's dashboard
3. Set `RESEND_API_KEY` and `EMAIL_TO` in `.env.local`
4. Update the `from` address in `app/api/contact/route.js` to a verified sender on your domain

Without a Resend key the form will return a 500 error — wire it up before going live.

---

## Updating Band Info

Until Storyblok is connected, content is hardcoded in the fallback objects inside each page file:

- Band members: `app/about/page.js` → `FALLBACK_BLOK.members`
- Tour dates: `app/tour/page.js` → `FALLBACK_DATES`
- Discography: `app/discography/page.js` → `FALLBACK_RELEASES`
- Merch: `app/merch/page.js` → `FALLBACK_ITEMS`
- Press quotes: `app/press/page.js` → `FALLBACK_BLOK.quotes`
- Social links: `components/layout/Footer.jsx` → `SOCIAL_LINKS`
- Nav links: `components/layout/Navbar.jsx` → `NAV_LINKS`
- Booking email: `app/api/contact/route.js` → `toEmail` fallback

---

## Deploy

```bash
npm run build
npm start
```

Or deploy to **Vercel** — set all env vars in the Vercel dashboard under Project Settings → Environment Variables.

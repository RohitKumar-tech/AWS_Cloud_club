# AWS Cloud Club SRM — Official Website

The official website for the **AWS Cloud Club at SRM Institute of Science and Technology, Kattankulathur**. Built with React 18, Firebase, and a dark purple glassmorphism design system.

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, club intro, stats, contribute, benefits, CTA |
| `/about` | About | Who we are, global presence map, team |
| `/events` | Events | Upcoming (Lottie empty state) + past events |
| `/resources` | Get Certified | AWS CCP badge, 30-day plan, weekly breakdown |
| `/gallery` | Gallery | Firebase-backed image gallery with thumbnails |
| `/join` | Join | 3-step joining guide + FAQ accordion |

---

## Tech Stack

- **React 18** + React Router v6
- **Bootstrap 5** + React Bootstrap
- **Firebase** — Firestore (gallery metadata) + Cloud Storage (images)
- **Lottie React** — JSON animations (preloader, empty states)
- **react-animated-cursor** — custom cursor on desktop
- **react-countup** — animated stat counters on scroll (IntersectionObserver)
- **react-image-gallery** — gallery viewer with thumbnails
- **Google Fonts** — Michroma, Nova Square, Raleway, Sarpanch, Share Tech

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Firebase project (for gallery — optional for local dev)

### Install

```bash
git clone https://github.com/aws-cloud-club-srm/website.git
cd website
npm install --legacy-peer-deps
```

### Configure Environment

Create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> Without `.env` values, the site runs normally — the Gallery page shows an empty state instead of crashing.

### Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

---

## Firebase Setup

### Firestore Collection: `gallery`

Each document should have:

```
{
  url: string          // Firebase Storage download URL
  thumbnailUrl: string // Optional; falls back to url
  caption: string      // Displayed as image description
  eventName: string    // Event category label
  createdAt: timestamp // Used for sort order (desc)
}
```

### Security Rules (Firestore)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /gallery/{doc} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

### Storage Structure

```
gallery/
  cloud-day-2025/
    photo1.jpg
    photo2.jpg
  workshop-jan/
    photo1.jpg
```

---

## Project Structure

```
src/
  App.js                    # Routes + AnimatedCursor
  firebase.js               # Conditional Firebase init
  ErrorBoundary.jsx         # Root error boundary
  Components/
    NavBar/                 # Fixed glassmorphism navbar
    Hero/                   # Full-viewport hero section
    IntroSection/           # Club intro + AWS logo card
    StatsSection/           # Animated stat counters
    StatsCard/              # Individual counter (IntersectionObserver)
    ContributeSection/      # Host Event / Present Topic
    Benefits/               # 4 prospect cards
    BlurCard/               # Reusable glassmorphism card
    CtaSection/             # "We are Open!" join CTA
    AboutSection/           # Who we are / What we do
    GlobalPresence/         # SVG world map + global stats
    TeamSection/            # Team grid
    TeamCard/               # Individual team member card
    EventsSection/
      EventsCard/           # Event poster card
      DetailsCard/          # Event details card
    GallerySection/         # Firebase image gallery
    ResoursesSection/       # 30-day certification plan
    JoinGuide/              # 3-step joining process
    Faq/
      AccordionItem/        # Individual FAQ item
    Footer/                 # 3-column footer
    Loader/                 # Lottie preloader
    SectionHeader/          # Reusable section title
    SocialLinks/            # Social media icon row
    Credits/                # Developer attribution
  Routes/
    Home.jsx
    About.jsx
    Events.jsx
    Resources.jsx
    Gallery.jsx
    Join.jsx
  assets/
    animation/              # Lottie JSON files
    img/                    # Logos, team photos, event posters
```

---

## Deployment (Vercel)

The `vercel.json` at the project root handles SPA routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Deploy:

```bash
npm install -g vercel
vercel --prod
```

Add all `REACT_APP_*` environment variables in the Vercel project dashboard under **Settings → Environment Variables**.

---

## Customisation Checklist

After cloning, update the following:

- [ ] Team members — `src/Components/TeamSection/TeamSection.jsx`
- [ ] Past events — `src/Components/EventsSection/EventsSection.jsx`
- [ ] WhatsApp group link — search `wa.me/910000000000` across the codebase
- [ ] Contact email — `src/Components/Footer/Footer.jsx`
- [ ] Social links — `src/Components/SocialLinks/SocialLinks.jsx`
- [ ] Firebase credentials — `.env` file
- [ ] OG image — `public/aws.png`
- [ ] Favicon — `public/favicon.ico`

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#161E2D` |
| Primary accent | `#7C5AED` |
| Light accent | `#a78bfa` |
| AWS orange | `#FF9900` |
| Body text | `#d1d5db` |
| Muted text | `#9ca3af` |
| Glassmorphism | `rgba(255,255,255,0.04)` + `backdrop-filter: blur(12px)` |

**Fonts** (Google Fonts):
- `Sarpanch` — headings, numbers
- `Share Tech` — labels, nav, section titles
- `Raleway` — body text, descriptions
- `Michroma` — brand name / logo

---

## License

This project is maintained by the AWS Cloud Club at SRM Institute of Science and Technology. AWS Cloud Clubs is an initiative by Amazon Web Services — all AWS trademarks belong to Amazon.com, Inc.

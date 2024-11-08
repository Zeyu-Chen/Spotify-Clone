# Spotify Clone

A modern full-stack Spotify clone that allows users to upload, stream, and manage music with premium subscription features.

## Features

- 🎵 Song Upload - Upload and manage your music library
- 💳 Premium Subscription - Stripe integration for premium features
- 🎧 Audio Player - Full-featured music player with controls
- 💖 Favorites System - Like and save your favorite songs
- 📱 Responsive Design - Works seamlessly across devices
- 🔐 Authentication - Secure login with credentials or GitHub
- 📂 File Management - Upload and store songs and images
- 📝 Playlist Creation - Create and manage playlists

## Tech Stack

- **Framework:** Next.js 13
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Authentication:** Supabase Auth
- **Payment:** Stripe
- **State Management:** Zustand
- **UI Components:** Radix UI
- **Audio Playback:** use-sound
- **Form Handling:** react-hook-form

## Getting Started

### Prerequisites

- Node.js 14+
- npm/yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository

```
git clone git@github.com:Zeyu-Chen/Spotify-Clone.git
cd spotify-clone
```

2. Install dependencies

```
npm install
```

3. Set up environment variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

4. Start the development server

```
npm run dev
```

5. Start Stripe webhook listener (optional)

```
npm run stripe:listen
```

## Project Structure

```
spotify-clone/
├── app/                    # Next.js app directory
├── components/             # Reusable components
├── hooks/                  # Custom React hooks
├── libs/                   # Utility functions
├── providers/             # Context providers
├── public/                # Static assets
└── types/                 # TypeScript type definitions
```

## Database Schema

The application uses Supabase with the following main tables:
- songs
- liked_songs 
- users
- subscriptions
- products
- prices

## API Routes

- `/api/webhooks` - Stripe webhook handler
- `/api/create-checkout-session` - Create payment session
- `/api/create-portal-link` - Create customer portal
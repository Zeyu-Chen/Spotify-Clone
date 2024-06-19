# Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe

![Full Stack Spotify Clone with Next.js 13](https://user-images.githubusercontent.com/23248726/241812095-2722c7bd-2d8f-44a9-97b9-f2711a8d8b64.png)

This is a repository for a Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe.

## Live Demo

- [Spotify Clone](https://spotify-ajfm88.vercel.app)

## Demo Info

When testing the app, feel free to sign up with your own email or you can also use this test account:

Email: tebever947@storesr.com

Password: test1234

Also, it will ask for a Spotify Premium subscription (after being logged in). Please use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

- Use a valid future date, such as 12/34.
- Use any three-digit CVC (four digits for American Express cards).
- Use any value you like for other form fields.

For more info: [Stripe Testing Cards](https://stripe.com/docs/testing)

## Features

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Cancelling Stripe subscriptions

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/ajfm88/spotify-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables

Use `database.sql` file, create songs and liked_songs table (there is a video tutorial)

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

#### Original Course

- [Full Stack Spotify Clone: Next 13.4, React, Stripe, Supabase, PostgreSQL, Tailwind (2023) by Code With Antonio](https://youtu.be/2aeMRB8LL4o)

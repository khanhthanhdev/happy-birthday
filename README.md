## Happy Birthday!!!

### Wish someone special happy birthday in a special way.

#### Update: Now you can customize all the texts without modifying the code!

I use this project to give a speacial gift to my crush. 
I hope this project will help me have gf :(()))

## Deployment

### Vercel Deployment
The project is configured for Vercel deployment with proper audio handling:

1. **Audio Files**: Located in `public/` directory for proper static serving
2. **Autoplay Handling**: Includes fallback play button for browsers that block autoplay
3. **Static Assets**: Properly configured routing in `vercel.json`

### Local Development
```bash
npm install
npm start
```

### Audio Issues on Vercel
If music doesn't play automatically:
- Click the "🎵 Play Music" button that appears
- This is due to browser autoplay restrictions
- Music will play on user interaction

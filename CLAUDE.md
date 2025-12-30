# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an animated birthday greeting web application that displays personalized birthday wishes through sequential animations. The app fetches customizable content from a JSON configuration file and uses GSAP (GreenSock Animation Platform) for timeline-based animations.

## Development Commands

### Start Development Server
```bash
npm start
```
This uses `browser-sync` to serve the site with auto-reload on file changes. The server runs on port 7777.

- **Windows**: Uses Firefox Developer Edition by default (path may need adjustment)
- **macOS/Linux**: Opens system default browser

### Install Dependencies
```bash
npm install
```

## Architecture

### Core Components

**HTML Structure (index.html)**
- Single-page application with 9 sequential animation sections (`div.one` through `div.nine`)
- Each text element has a `data-node-name` attribute that maps to keys in `customize.json`
- Uses inline `<audio>` element with autoplay for background music
- External dependencies: GSAP TweenMax (CDN), Google Fonts

**Customization System (customize.json)**
- All user-facing text content is defined here, not hardcoded in HTML
- Special fields:
  - `imagePath`: Controls the birthday person's image (set via `src` attribute, not `innerText`)
  - All other fields: Set via `innerText` on corresponding `data-node-name` elements
- Supports Unicode (Vietnamese text in current configuration)

**Animation Controller (script/main.js)**
- `fetchData()`: Loads `customize.json` and populates HTML elements before starting animations
- `animationTimeline()`: Defines GSAP TimelineMax sequence with 9 phases:
  1. Greeting with name
  2. Secondary greeting text
  3. "It's your birthday" message
  4. Chat box message with typing effect
  5. Series of "idea" texts explaining why this is special
  6. Large "SO" text
  7. Balloon animations with image and birthday wish
  8. Expanding SVG circles (party effect)
  9. Outro text with replay option
- Character-by-character animation: Text is split into `<span>` elements for staggered animations
- Replay functionality bound to `#replay` element click

### Key Technical Details

**Data Flow**
1. Page loads → `fetchData()` executes
2. Fetch `customize.json` → populate all `data-node-name` elements
3. After all data loaded → trigger `animationTimeline()`
4. User can replay via click on replay text

**Animation Timing**
- Timeline uses relative and absolute timing (`+=2.5`, `-=1`)
- Most transitions: 0.5-0.7 seconds
- Key animation patterns stored in `ideaTextTrans` and `ideaTextTransLeave` objects
- Stagger effects used for: chat box typing, balloon rise, SVG explosions, wish text reveal

**File Dependencies**
- `img/han.png`: User image (referenced in customize.json)
- `img/ballon[1-3].svg`: Balloon assets (hardcoded in HTML)
- `audio.mp3`: Background music (hardcoded in HTML)
- `style/style.css`: All visual styling

## Customization Workflow

To personalize for a different recipient:

1. Edit `customize.json` with new text content and recipient name
2. Replace `img/han.png` with new recipient's photo (or update `imagePath` value)
3. Optionally replace `audio.mp3` with different background music
4. Run `npm start` to preview changes

## Important Notes

- The app requires `customize.json` to be accessible via fetch (must be served, not opened as `file://`)
- Animation timeline is hardcoded for specific element structure—changing HTML class names or structure requires updating `script/main.js`
- GSAP version: TweenMax 1.20.3 (legacy version, uses `TimelineMax` API)
- Browser compatibility: Requires modern browser with ES6 support (arrow functions, template literals)

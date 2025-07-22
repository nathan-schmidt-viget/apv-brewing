# APV Calculator - Alcohol By Volume Calculator

A modern, mobile-first web application for calculating Alcohol By Volume (ABV) percentages for homebrewing and craft beverage production. Features an AI-powered name generator for your creations.

## 🍺 Features

- **ABV Calculator**: Calculate alcohol content using Original Gravity (OG) and Final Gravity (FG)
- **AI Name Generator**: Generate creative names for your beverages using Google's Gemini AI
- **Mobile-First Design**: Optimized for mobile devices with a native app feel
- **Real-time Calculations**: Instant ABV percentage updates as you input values
- **Multiple Beverage Types**: Support for beer, wine, cider, mead, and other beverages

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini AI API
- **Deployment**: Vercel-ready
- **Package Manager**: npm

## 📱 Screenshots

_Screenshots coming soon_

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd apv-brewing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Get a Gemini API Key**

   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the key to your `.env.local` file

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

### ABV Calculator

1. **Enter Original Gravity (OG)**: The specific gravity before fermentation

   - Typical range: 1.010 - 1.200
   - Example: 1.050 for a standard beer

2. **Enter Final Gravity (FG)**: The specific gravity after fermentation

   - Typical range: 0.990 - 1.050
   - Example: 1.010 for a finished beer

3. **View Results**: The ABV percentage is calculated automatically using the formula:
   ```
   ABV = (OG - FG) × 131.25
   ```

### AI Name Generator

1. **Select Beverage Type**: Choose from beer, wine, cider, mead, or other
2. **Add Description** (optional): Describe your ingredients, process, or inspiration
3. **Generate Names**: Click the button to get AI-generated name suggestions
4. **View Results**: Three creative names will be displayed

## 🏗 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── gemini-ai-model/
│   │       └── route.ts          # Gemini AI API endpoint
│   ├── components/
│   │   ├── ai/
│   │   │   └── names.tsx         # Names display component
│   │   ├── calculateApv.tsx      # ABV calculator component
│   │   └── nameGenerator.tsx     # AI name generator component
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main page
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for the name generation feature
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- The homebrewing community for inspiration

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/apv-brewing/issues) page
2. Create a new issue with detailed information
3. Include your browser, OS, and steps to reproduce

---

**Happy Brewing! 🍻**

# APV Calculator - Alcohol By Volume Calculator

A modern, mobile-first web application for calculating Alcohol By Volume (ABV) percentages for homebrewing and craft beverage production. Features an AI-powered name generator for your creations.

## 🍺 Features

- **ABV Calculator**: Calculate alcohol content using Original Gravity (OG) and Final Gravity (FG)
- **AI Name Generator**: Generate creative names for your beverages using Google's Gemini AI
- **Real-time Calculations**: Instant ABV percentage updates as you input values
- **Multiple Beverage Types**: Support for beer, wine, cider, mead, and other beverages

## 🛠 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini AI API
- **Deployment**: Vercel-ready
- **Package Manager**: npm

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

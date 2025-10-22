# Genify - AI Text-to-Image Generator

Genify is an innovative AI-powered application that transforms text descriptions into stunning images in seconds. Built with modern web technologies, it offers a seamless user experience for creative image generation.

## Features

- **AI-Powered Generation**: Leverage advanced AI models to create high-quality images from text prompts
- **User Authentication**: Secure login and registration system with JWT tokens
- **Credit System**: Manage image generation credits with flexible pricing plans
- **Responsive Design**: Fully responsive interface that works on all devices
- **Real-time Generation**: Instant image generation with loading indicators
- **Download Support**: Easy download of generated images
- **GitHub Integration**: Direct links to project repository

## Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Declarative routing for React
- **Axios** - HTTP client for API requests
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Razorpay** - Payment gateway integration

### AI Integration
- **Clipdrop API** - AI image generation service

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/msd131102/genify.git
   cd genify
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create `.env` files in both `server` and `client` directories.

   **Server/.env:**
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIPDROP_API=your_clipdrop_api_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

   **Client/.env:**
   ```
   VITE_BACKEND_URL=http://localhost:4000
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system or provide a cloud MongoDB URI.

## Running the Application

### Local Development

1. **Start the backend server**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:4000`

2. **Start the frontend client**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

3. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

### Live Demo

🚀 **Live Application**: [Genify - AI Text-to-Image Generator](https://genify-ai.vercel.app/)

**Note**: The live demo may have limited credits or features compared to the full local setup.

## Usage

1. **Sign Up/Login**: Create an account or log in to access the application
2. **Buy Credits**: Purchase credits to generate images (Free plan available with 10 credits)
3. **Generate Images**: Enter a text prompt and click "Generate Images"
4. **Download**: Download your generated images
5. **Manage Account**: View credit balance and account details

## API Endpoints

### Authentication
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login

### Image Generation
- `POST /api/image/generate` - Generate image from text prompt

### User Management
- `GET /api/user/credits` - Get user credit balance

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **GitHub**: [https://github.com/msd131102](https://github.com/msd131102)
- **Email**: [your-email@example.com]

## Acknowledgments

- Clipdrop API for AI image generation
- React and Vite communities
- All contributors and users

---

**Note**: This is a demo project. For production use, ensure proper security measures and API rate limiting.

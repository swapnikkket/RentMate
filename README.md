# 🏠 RentMate - Beautiful Rental Platform

A modern, smooth, and beautiful rental property listing application built with React, Tailwind CSS, and Node.js/Express.

## ✨ Features & Improvements

### 🎨 **Beautiful UI/UX**
- **Modern Design**: Built with Tailwind CSS for a sleek, professional look
- **Gradient Background**: Eye-catching gradient purple theme
- **Smooth Animations**: Fade-in effects, slide animations, and smooth transitions
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Card Layout**: Beautiful property cards with images and information

### 🔐 **Authentication & Security**
- **User Registration**: Clean registration form with validation
- **User Login**: Secure login with JWT token management
- **Auth Context**: Global authentication state management with React Context
- **Protected Routes**: Routes that require authentication
- **Token Persistence**: Automatic token recovery on page refresh

### 🏠 **Property Listings**
- **View Listings**: Browse all available properties with images
- **Create Listings**: Upload property details with image
- **Edit Listings**: Update property information if you're the owner
- **Delete Listings**: Remove listings with confirmation dialog
- **User Profile**: View your account information

### 🚀 **Performance & Smoothness**
- **Optimized API Calls**: Axios interceptors for automatic token injection
- **Loading States**: Spinner component for async operations
- **Error Handling**: Beautiful alert toasts for success/error messages
- **React Router**: Smooth page navigation without full reloads
- **Keyboard Support**: Clean form interactions and transitions

### 📱 **Responsive Components**
- **Navbar**: Sticky navigation with user-aware menu
- **Alert System**: Toast notifications for user feedback
- **Loading Spinner**: Elegant loading indicator
- **Form Inputs**: Enhanced input styling with focus states

## 🛠️ **Tech Stack**

### Frontend
- **React 19.2.0** - UI library
- **React Router 7.2** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image uploads

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v18+)
- MongoDB
- Cloudinary account

### Installation

#### Client Setup
```bash
cd Client
npm install
npm run dev
```

#### Server Setup
```bash
cd Server
npm install
# Create .env file with:
# MONGODB_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# CLOUDINARY_URL=your_cloudinary_url

npm start
# or for development:
npx nodemon server.js
```

## 📁 **Project Structure**

```
Client/
├── src/
│   ├── pages/           # Page components (Login, Register, etc.)
│   ├── components/      # Reusable components
│   ├── context/         # React Context for state
│   ├── services/        # API service functions
│   ├── App.jsx          # Main app with routing
│   └── index.css        # Global styles
└── package.json

Server/
├── routes/              # API routes
├── controllers/         # Business logic
├── models/              # Database schemas
├── middleware/          # Auth & upload middleware
├── config/              # Database & Cloudinary config
└── server.js            # Entry point
```

## 🎯 **Key Improvements Made**

1. ✅ **Routing System** - React Router for seamless navigation
2. ✅ **Global Auth Context** - Centralized authentication state
3. ✅ **Beautiful Styling** - Tailwind CSS with gradients and transitions
4. ✅ **Form Validation** - Input validation with error feedback
5. ✅ **Loading States** - Spinners for async operations
6. ✅ **Toast Alerts** - Beautiful notifications for user feedback
7. ✅ **Protected Routes** - Authorization checks on routes
8. ✅ **API Interceptors** - Automatic token injection
9. ✅ **Error Handling** - Comprehensive error messages
10. ✅ **Responsive Design** - Mobile-first approach
11. ✅ **User Profile** - Personalized user page
12. ✅ **Confirmation Dialogs** - Safe delete operations

## 🌐 **API Endpoints**

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Listings
- `GET /api/listings` - Get all listings
- `POST /api/listings` - Create listing (protected)
- `PUT /api/listings/:id` - Update listing (protected)
- `DELETE /api/listings/:id` - Delete listing (protected)

## 🎨 **Design Features**

- **Color Scheme**: Blue (#3B82F6) & Green (#10B981) primary colors
- **Typography**: Clean, modern font stack
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle box shadows for depth
- **Transitions**: Smooth 0.3s ease transitions
- **Hover States**: Interactive button and link feedback

## 📸 **Screenshots**

The application features:
- Clean login/register pages with gradient backgrounds
- Beautiful property listing cards with images
- Smooth navigation bar
- User-friendly forms with validation
- Toast notifications for actions
- Responsive grid layout

## 🔧 **Configuration**

### Environment Variables (Server)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_URL=your_cloudinary_url
PORT=5000
```

## 💡 **Tips**

- The app automatically handles token storage and validation
- Images are uploaded via Cloudinary
- All forms have real-time validation feedback
- API errors are caught and displayed as toasts
- Protected routes redirect to login if not authenticated

## 🚀 **What's Next?**

Potential enhancements:
- Search and filter listings
- Advanced property filters
- Favorites/bookmarks system
- Review and ratings system
- Payment integration
- Admin dashboard
- Email notifications

---

**Made with ❤️ for beautiful rental experiences**

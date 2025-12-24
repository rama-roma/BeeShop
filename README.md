🛒 AlifShop Marketplace

Welcome to AlifShop – a modern e-commerce marketplace built with React, TypeScript, Vite, and Ant Design. This project is a full-featured online store with multi-language support 🌐, theming, dynamic product listings, favorites, cart management, and more.

💻 Tech Stack

Frontend: React + TypeScript + Vite 🚀

State Management: Redux Toolkit & RTK Query ⚡

UI Framework: Ant Design (antd) 🎨

Routing: React Router v6 🧭

Internationalization: i18next 🌎

Styling: Tailwind CSS & custom CSS ✨

Icons: lucide-react 💎

Authentication: JWT-based + Context API 🔑

Utilities: Axios for API requests, environment variables (.env) 🔧

Modal & Notifications: Ant Design Modal 🖼️



🗂 Project Structure


public/
├─ i18n/
│  └─ locales/
│     ├─ en/translation.json
│     ├─ ru/translation.json
│     └─ tj/translation.json
│  └─ index.ts
├─ vite.svg

src/
├─ assets/                           # Images, icons, logos
├─ components/                       # Reusable UI components
│  ├─ buttonTheme.tsx
│  ├─ languageSelector.tsx
│  └─ swiper.tsx
├─ pages/                            # Application pages
│  ├─ cartPage.tsx
│  ├─ catalogByIdPage.tsx
│  ├─ catalogPage.tsx
│  ├─ homePage.tsx
│  ├─ infoPage.tsx
│  ├─ loginPage.tsx
│  ├─ productPage.tsx
│  ├─ profilePage.tsx
│  ├─ registerPage.tsx
│  └─ wishlistPage.tsx
├─ store/                            # Redux store & API slices
│  ├─ api/
│  │  ├─ authApi/auth.ts
│  │  ├─ brandApi/brand.ts
│  │  ├─ cartApi/cart.ts
│  │  ├─ categoryApi/category.ts
│  │  ├─ colorApi/color.ts
│  │  ├─ productApi/product.ts
│  │  └─ subCategoryApi/subCategory.ts
│  ├─ auth/
│  │  └─ authContext.tsx
│  ├─ theme/
│  │  └─ ThemeContext.tsx
│  └─ utils/
│     ├─ api.ts
│     └─ store.ts
├─ App.tsx
├─ i18n.ts
├─ index.css
├─ layout.tsx
└─ main.tsx

.env                                # Environment variables
.gitignore                           # Git ignore file
tsconfig.app.json                     # TypeScript config
package.json / package-lock.json      # Dependencies
README.md                             # Project documentation
index.html                            # HTML template


  public/
├─ i18n/
│  └─ locales/
│     ├─ en/translation.json
│     ├─ ru/translation.json
│     └─ tj/translation.json
│  └─ index.ts
├─ vite.svg

src/
├─ assets/                           # Images, icons, logos
├─ components/                       # Reusable UI components
│  ├─ buttonTheme.tsx
│  ├─ languageSelector.tsx
│  └─ swiper.tsx
├─ pages/                            # Application pages
│  ├─ cartPage.tsx
│  ├─ catalogByIdPage.tsx
│  ├─ catalogPage.tsx
│  ├─ homePage.tsx
│  ├─ infoPage.tsx
│  ├─ loginPage.tsx
│  ├─ productPage.tsx
│  ├─ profilePage.tsx
│  ├─ registerPage.tsx
│  └─ wishlistPage.tsx
├─ store/                            # Redux store & API slices
│  ├─ api/
│  │  ├─ authApi/auth.ts
│  │  ├─ brandApi/brand.ts
│  │  ├─ cartApi/cart.ts
│  │  ├─ categoryApi/category.ts
│  │  ├─ colorApi/color.ts
│  │  ├─ productApi/product.ts
│  │  └─ subCategoryApi/subCategory.ts
│  ├─ auth/
│  │  └─ authContext.tsx
│  ├─ theme/
│  │  └─ ThemeContext.tsx
│  └─ utils/
│     ├─ api.ts
│     └─ store.ts
├─ App.tsx
├─ i18n.ts
├─ index.css
├─ layout.tsx
└─ main.tsx

.env                                # Environment variables
.gitignore                           # Git ignore file
tsconfig.app.json                     # TypeScript config
package.json / package-lock.json      # Dependencies
README.md                             # Project documentation
index.html                            # HTML template
  


🛠 Project Highlights

TypeScript everywhere for type safety ✅

Vite-powered for lightning-fast builds ⚡

Ant Design integration for professional UI components 🎨

RTK Query for optimized API requests & caching 🗃️

i18next for multilingual UI support 🌍

Dark mode toggle integrated across all pages 🌑

Responsive and clean UI for desktop and mobile 📱

Extensible structure to add new features easily 🏗️


📦 Pages Overview

HomePage.tsx – Landing page with featured products

CatalogPage.tsx – Full product catalog with filters

CatalogByIdPage.tsx – Products filtered by category

ProductPage.tsx – Product list with price, color, brand filters

InfoPage.tsx – Detailed product view, copy code functionality

CartPage.tsx – Shopping cart management

WishlistPage.tsx – Favorite products page

LoginPage.tsx / RegisterPage.tsx – User authentication

ProfilePage.tsx – User profile, phone, orders history


📚 Components Overview

ButtonTheme.tsx – Switch between light/dark mode

LanguageSelector.tsx – Switch languages dynamically

Swiper.tsx – Image carousel / slider component

🎯 Goals

Build a fully functional e-commerce frontend compatible with your backend

Enable multi-language & multi-theme support

Maintain clean, modular code structure for scalability

Create responsive, user-friendly UI for desktop & mobile


🚀 Future Enhancements

Product search with suggestions 🔍

Order history and checkout flow 🧾

Push notifications for deals and discounts 🔔

Admin panel for managing products and categories 👑

This project is designed to scale and evolve with new features as AlifShop grows 🌟.
# 🎨 Portfolio Template Builder

A modern, feature-rich web application built with **React 19**, **TypeScript**, and **Vite** for creating, customizing, and exporting beautiful portfolio templates. Includes drag-and-drop file uploads, PDF export functionality, and Tailwind CSS styling.

## ✨ Features

- ⚡ **Lightning-Fast Development** with Vite and Hot Module Replacement (HMR)
- 📱 **Responsive Design** powered by Tailwind CSS v4
- 🎯 **Type-Safe Development** with TypeScript
- 🏗️ **Client-Side Routing** using React Router v7
- 💾 **PDF Export** with html2canvas and jsPDF
- 📤 **File Upload** with Dropzone integration
- 🎨 **Modern UI Components** with Tailwind CSS utilities
- 📅 **Date Management** with Day.js
- 🧪 **Code Quality** with ESLint configuration
- ⚙️ **PostCSS & Autoprefixer** for enhanced CSS support
- 🚀 **React Compiler** enabled for optimized builds
- 🚫 **Classname Merging** with clsx utility

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-template-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🛠️ Tech Stack

### Core Framework
- **React 19** - UI library with latest features
- **React DOM 19** - React rendering engine
- **TypeScript** - Static type checking

### Build & Development
- **Vite 7** - Next-generation build tool with lightning-fast HMR
- **@vitejs/plugin-react** - Babel integration for Fast Refresh

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix automation

### Routing & Navigation
- **React Router DOM v7** - Client-side routing

### Utilities
- **clsx** - Conditional className builder
- **Day.js** - Lightweight date library
- **html2canvas** - DOM to canvas screenshot
- **jsPDF** - PDF generation
- **react-dropzone** - File upload with drag & drop

### Development Tools
- **ESLint** - Code linting and quality
- **React Compiler** - Optimized React performance
- **TypeScript ESLint** - Type-aware linting

## 📁 Project Structure

```
portfolio-template-builder/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── assets/          # Image and media assets
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎯 Development Workflow

### Tailwind CSS

The project uses **Tailwind CSS v4** with a preconfigured `tailwind.config.js`. Start using utility classes in your components:

```tsx
function Button() {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
      Click me
    </button>
  );
}
```

### TypeScript

All components should be written in TypeScript with proper type annotations:

```tsx
interface Props {
  title: string;
  count: number;
}

export function Header({ title, count }: Props) {
  return <h1>{title} ({count})</h1>;
}
```

### React Compiler

The React Compiler is enabled in this project for automatic memoization and optimization. For more details, see the [React Compiler documentation](https://react.dev/learn/react-compiler).

## 🔧 Configuration

### Tailwind CSS

Customize your Tailwind configuration in `tailwind.config.js`:

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
      },
    },
  },
  plugins: [],
}
```

### ESLint

ESLint rules can be configured in `eslint.config.js`. For production applications, enable type-aware linting:

```js
tseslint.configs.recommendedTypeChecked
```

## 🏗️ Building for Production

```bash
npm run build
```

This command:
1. Compiles TypeScript
2. Optimizes and bundles with Vite
3. Outputs optimized files to the `dist/` directory

Preview the production build locally:

```bash
npm run preview
```

## 📝 Code Quality

Run the linter to check code quality:

```bash
npm run lint
```

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Build Issues

Clear the node_modules and reinstall:

```bash
rm -rf node_modules
npm install
npm run build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

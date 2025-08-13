# Frontend Folder Structure

This document outlines the organized folder structure for the CRM frontend application.

## 📁 Folder Organization

### 🎯 Features (Feature-based organization)
```
src/features/
├── auth/           # Authentication components
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── GoogleLogin.jsx
│   ├── GoogleSignUpButton.jsx
│   ├── Logout.jsx
│   └── index.js
├── dashboard/      # Dashboard components
│   ├── DashboardPage.jsx
│   ├── TotalClientCard.jsx
│   ├── TotalConversion.jsx
│   ├── TotalProposal.jsx
│   ├── ProposalGraph.jsx
│   ├── RecentClients.jsx
│   ├── Dashboard.jsx
│   └── index.js
├── clients/        # Client management
│   ├── ClientPage.jsx
│   ├── ClientTable.jsx
│   ├── AddClient.jsx
│   ├── Edit.jsx
│   ├── Clients.jsx
│   └── index.js
├── proposals/      # Proposal management
│   ├── ProposalPage.jsx
│   ├── Proposals.jsx
│   └── index.js
├── settings/       # Settings components
│   ├── SettingsPage.jsx
│   ├── Settings.jsx
│   └── index.js
└── landing/        # Landing page
    ├── LandingPage.jsx
    └── index.js
```

### 🔧 Shared (Reusable components and utilities)
```
src/shared/
├── components/     # Common UI components
├── hooks/          # Custom React hooks
│   ├── usefetch.js
│   └── index.js
├── utils/          # Utility functions
├── constants/      # Constants and static data
│   └── Data.js
├── types/          # TypeScript types (if applicable)
├── layout/         # Layout components
│   ├── MainLayout.jsx
│   ├── ProtectedRoute.jsx
│   ├── AuthRoute.jsx
│   ├── Sidebar.jsx
│   └── index.js
└── ClientRedux.jsx # Context API state management
```

### 📱 Core Application Files
```
src/
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
├── index.css       # Global styles
└── assets/         # Static assets
```

## 🚀 Benefits of This Structure

1. **Feature-based Organization**: Related components are grouped together
2. **Clear Separation of Concerns**: Features vs. shared utilities
3. **Easy Navigation**: Developers can quickly find related code
4. **Scalability**: Easy to add new features without cluttering
5. **Maintainability**: Clear boundaries between different parts of the app
6. **Reusability**: Shared components are easily accessible

## 📝 Import Examples

### Using Index Files (Recommended)
```javascript
import { Login, SignUp } from './features/auth';
import { DashboardPage } from './features/dashboard';
import { ClientPage, AddClient } from './features/clients';
import { MainLayout, Sidebar } from './shared/layout';
import { useFetch } from './shared/hooks';
```

### Direct Imports (Alternative)
```javascript
import Login from './features/auth/Login';
import DashboardPage from './features/dashboard/DashboardPage';
import MainLayout from './shared/layout/MainLayout';
```

## 🔄 Migration Notes

- All import paths have been updated to reflect the new structure
- Components are now organized by feature rather than by type
- Shared utilities and components are centralized
- Index files provide clean import interfaces
- Folder names follow consistent naming conventions

## 📋 Best Practices

1. **Keep features self-contained**: Each feature should have its own folder
2. **Use index files**: Export components through index.js for clean imports
3. **Shared components**: Place reusable components in shared/components
4. **Consistent naming**: Use kebab-case for folders, PascalCase for components
5. **Feature isolation**: Minimize dependencies between features

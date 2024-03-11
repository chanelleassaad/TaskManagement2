# Task Management App with Next.js and Redux

This is a web application for task management built with Next.js, React hooks, and Redux. It allows users to manage their tasks, mark them as complete, and view task details.

## Features

- **Task Management Page**: Main interface for managing tasks.
- **Redux Integration**: Uses Redux Toolkit for state management.
- **Navigation with Next Router**: Implements navigation between different sections of the app.
- **Component Lifecycle and Hooks**: Utilizes lifecycle methods and useEffect for managing side-effects.
- **Debugging and Common Bugs**: Demonstrates debugging techniques for common issues.
- **Next.js and Server-Side Rendering (SSR)**: Includes a page for displaying task details with SSR.

## Getting Started

1. Clone the repository: `git clone https://github.com/chanelleassaad/TaskManagement2.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:3000` in your browser.

## Folder Structure

- **pages**: Contains Next.js pages for different sections of the app.
- **components**: Reusable React components used in the app.
- **hooks**: Custom hooks for managing specific functionalities (e.g., adding tasks, marking tasks as complete).
- **redux**: Redux store configuration and slices for managing tasks.

## Usage

1. **Task Management Page**: Add, edit, and delete tasks. Mark tasks as complete.
2. **Task Details Page**: View detailed information about a specific task.

## API

The app uses the following API to fetch task details:

- Endpoint: `https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`


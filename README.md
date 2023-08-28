[Participatory Budgeting](https://en.wikipedia.org/wiki/Participatory_budgeting) is a democratic process where community members directly decide how to allocate a portion of a public budget. This repository contains software prototype for a hypothetical Participatory Budgeting (PB) application that has partially
been designed.

Next.js is used as the foundation of this web application. The application is a platform where users can view, upvote, and comment on budget requests and make new requests. The application integrates with OpenAI to generate comments and uses Firebase for realtime data storage and retrieval.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Dependencies:

- **Next.js**: A popular React framework for server-rendered applications.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Firebase**: Used for database operations, for storing and realtime retrieval of data.
- **OpenAI**: Integrated for generating content and responses.
- **React Hook Form**: For stateful form handling.
- **React Spring Bottom Sheet**: Used for displaying modal and overlay content.
- **Zustand**: A small, fast, and scalable bearbones state-management solution.

## Code Overview:

- **`app/page.tsx`**: The main page of the application, imports and uses various components to render the main content, and display list of requests.
- **`app/[post]/page.tsx`**: Defines a dynamic route for individual requests. Imports components and utilities to render a specific request page.
- **`components/BottomSheet.tsx`**: A UI element representing a bottom sheet. Slides up from the bottom to display additional content.
- **`components/Header.tsx`** Represents the application's header.
- **`components/Dropdown.tsx`** A dropdown component for selecting items from a list, used in the header.
- **`components/Post/Post.tsx`** Represents a full request. Combines other components like `Avatar`, `MetaHeader`, and `Title` to render a request.
- **`components/Post/PostCard.tsx`** Represents a summarized version of a request, a preview card used for the homepage.
- **`components/Post/Avatar.tsx`** Displays an avatar, for a request's author.
- **`components/Post/MetaHeader.tsx`** Displays metadata about a request, such as the author's name, publication date, and categories.
- **`components/Post/Title.tsx`** Represents a request's title.
- **`components/RequestForm/RequestForm.tsx`** A form for users to submit requests. Uses other `Input` components for user input.
- **`components/RequestForm/InputLabel.tsx`** A label for input fields in a form.
- **`components/RequestForm/InputPriority.tsx`** An input field for setting the priority of a request or task.
- **`components/RequestForm/InputText.tsx`** A text input field component.

## Configuration and settings files:

- `package.json`
- `next.config.js`
- `prettier.config.js`
- `.eslintrc.json`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `.vscode/settings.json`

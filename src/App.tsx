import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 🌟 Dynamically import all pages from /pages folder
const pages = import.meta.glob('./pages/*.tsx', { eager: true });

const routes = Object.entries(pages).map(([filePath, module]) => {
  const filename = filePath.split('/').pop()?.replace(/\.tsx$/, '');

  // Logging to confirm filenames
  console.log(`Registering route for: ${filename}`);

  const Component = (module as any).default;

  // Handle index.tsx → route: /
  const path = filename === 'index' ? '/' : `/${filename}`;

  return (
    <Route key={path} path={path} element={<Component />} />
  );
});

function App() {
  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;

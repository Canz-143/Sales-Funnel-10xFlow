import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 🌟 Automatically import all page components in /pages
const pages = import.meta.glob('./pages/*.tsx', { eager: true });

const routes = Object.entries(pages).map(([path, module]) => {
  const name = path
    .split('/')
    .pop()
    ?.replace(/\.tsx$/, '');

  const routePath = name === 'index' ? '/' : `/${name}`;
  const Component = (module as any).default;

  return <Route key={routePath} path={routePath} element={<Component />} />;
});

function App() {
  return (
    <Router>
      <Routes>
        {routes}
      </Routes>
    </Router>
  );
}

export default App;

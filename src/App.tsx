import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/Sidebar';
import { Preview } from './components/Preview';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <Preview />
      </div>
    </div>
  );
}

export default App;
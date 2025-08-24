import React, { useState } from 'react';
import Header   from './components/Header';
import Sidebar  from './components/Sidebar';
import QAList   from './components/QAList';

export type Category = 'all' |  'python' |  'machineLearning';

const categories = [
  { key: 'all' as Category,        label: 'All' },
  { key: 'python' as Category,    label: 'Python' },
  { key: 'machineLearning' as Category,    label: 'Machine Learning' }
];

function App() {
  const [activeCat, setActiveCat] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header onSearch={setSearchTerm} />
      <div className="layout">
        <Sidebar
          categories={categories}
          active={activeCat}
          onSelect={setActiveCat}
        />
        <QAList category={activeCat} searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default App;
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export const DataContext = createContext<DataContextType | null>(null);

function App() {
  const [group, setGroup] = useState<string[]>(['グループ1', 'グループ2', 'グループ3']);
  const [nowSelect, setNowSelect] = useState<number>(0);
  const data: DataContextType = { group, setGroup, nowSelect, setNowSelect };

  useEffect(() => {
    localStorage.setItem('Todo_data', JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, nowSelect]);

  return (
    <>
      <DataContext.Provider value={data}>
        <Header />
        <Main />
      </DataContext.Provider>
    </>
  );
}

export default App;

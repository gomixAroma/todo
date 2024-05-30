import { useContext } from 'react';
import { DataContext } from '../App';
import style from './../assets/style/Main.module.scss';

const Main = () => {
  const data = useContext(DataContext) as DataContextType;

  return (
    <div className={style.main}>
      <div>グループ名 : {data.group[data.nowSelect]}</div>
      <div>現在選択中 : {data.nowSelect}</div>
    </div>
  );
};

export default Main;

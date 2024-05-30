import { createContext, useContext } from 'react';
import { DataContext } from '../App';
import style from './../assets/style/Header.module.scss';
import Item from './Item';

export const EditButtonContext = createContext<EditButtonContextType | null>(null);

const Header = () => {
  const data = useContext(DataContext) as DataContextType;

  const size = 25;

  return (
    <>
      <div
        className={style.AppName}
        aria-label='アプリ名'
      >
        TODO
      </div>
      <div
        className={style.HeaderGroup}
        aria-label='項目'
      >
        <EditButtonContext.Provider value={{ size }}>
          <div aria-label='グループ'>
            {/*↑このdivにもstyle適応されてる */}
            {data.group.map((item, index) => {
              const active = index === data.nowSelect;
              const buttonWidth = 145;
              return (
                <div
                  key={index}
                  className={`${style.item} ${active ? style.active : ''}`}
                  onClick={() => {
                    data.setNowSelect(index);
                  }}
                  style={active ? { width: `${buttonWidth}px` } : { width: (buttonWidth - size * 2).toString() + 'px' }}
                >
                  <Item
                    item={item}
                    active={active}
                  />
                </div>
              );
            })}
            <div
              aria-label='プラスボタン'
              className={style.plusButton}
            >
              <PlusSVG />
            </div>
          </div>
        </EditButtonContext.Provider>
      </div>
    </>
  );
};

const PlusSVG = () => {
  const size = useContext(EditButtonContext)?.size || 0;
  const data = useContext(DataContext) as DataContextType;
  return (
    <div
      className={style.plus}
      onClick={() => data.setGroup([...data.group, '新規'])}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        strokeWidth='4'
        stroke='#000'
        fill='none'
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <path d='M32 7v50M7 32h50'></path>
      </svg>
    </div>
  );
};

export default Header;

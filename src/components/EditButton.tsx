import { useContext } from 'react';
import style from './../assets/style/Item.module.scss';
import { EditButtonContext } from './Header';
import { IsEditContext } from './Item';
import { DataContext } from '../App';

const EditButton = () => {
  const size = useContext(EditButtonContext)?.size || 0;
  const isEditContext = useContext(IsEditContext);
  const data = useContext(DataContext) as DataContextType;

  const innerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    // stroke: props.color,
  };
  return (
    <div className={style.edit}>
      <svg
        aria-label='編集ボタン'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        strokeWidth='3'
        fill='none'
        style={innerStyle}
        className={style.editIcon}
        onClick={() => {
          isEditContext?.setIsEdit(!isEditContext.isEdit);
        }}
      >
        <path d='M55.5 23.9v29.6a2 2 0 01-2 2h-43a2 2 0 01-2-2v-43a2 2 0 012-2h31.14'></path>
        <path d='M19.48 38.77l-.64 5.59a.84.84 0 00.92.93l5.56-.64a.87.87 0 00.5-.24L54.9 15.22a1.66 1.66 0 000-2.35L51.15 9.1a1.67 1.67 0 00-2.36 0L19.71 38.28a.83.83 0 00-.23.49zM44.87 13.04l6.03 6.2'></path>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 64 64'
        strokeWidth='3'
        fill='none'
        style={innerStyle}
        className={style.editIcon}
        onClick={() => {
          data.setGroup((prevGroup) => prevGroup.filter((_, index) => index !== data.nowSelect));
        }}
      >
        <path d='M45.49 54.87h-27a1 1 0 01-1-1l-2-36h32.97l-2 36a1 1 0 01-.97 1zM51 17.86H13c-.28 0-.5-.16-.5-.35l.93-4.35a.49.49 0 01.5-.3h36.14a.49.49 0 01.5.3l.93 4.35c0 .19-.22.35-.5.35zM24 23.44v25M32 23.44v25M40 23.44v25'></path>
        <path d='M25.73 12.86V7.57a1 1 0 011-1h10.54a1 1 0 011 1v5.29'></path>
      </svg>
    </div>
  );
};

export default EditButton;

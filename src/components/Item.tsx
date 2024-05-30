import React, { createContext, useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import EditButton from './EditButton';
import style from './../assets/style/Item.module.scss';
import { DataContext } from '../App';

type ItemProps = {
  item: string;
  active: boolean;
};

type IsEditContextType = {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

export const IsEditContext = createContext<IsEditContextType | null>(null);

const Item: React.FC<ItemProps> = (props) => {
  const data = useContext(DataContext) as DataContextType;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const { item, active } = props;
  const [isEdit, setIsEdit] = useState(false);
  const context = { isEdit, setIsEdit };

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  const onBlur = (e: React.FocusEvent) => {
    const target = e.target as HTMLInputElement;
    setIsEdit(false);
    data.setGroup((prevGroup) => prevGroup.map((value, index) => (index === data.nowSelect ? target.value : value)));
  };

  return (
    <IsEditContext.Provider value={context}>
      <>
        {isEdit ? (
          <>
            <InputGroup size='sm'>
              <Form.Control
                aria-label='Small'
                aria-describedby='inputGroup-sizing-sm'
                name='編集中'
                autoComplete='off'
                defaultValue={item}
                className={style.input}
                onBlur={onBlur}
                ref={inputRef}
              />
            </InputGroup>
          </>
        ) : (
          <div>{item}</div>
        )}
      </>
      <div
        aria-label='編集ボタン'
        className={`${active ? style.visible : ''} ${style.editButtons}`}
      >
        <EditButton />
      </div>{' '}
    </IsEditContext.Provider>
  );
};

export default Item;

import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
    
    //enter 누르면 onInsert 실행
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );
};

export default TodoInput;
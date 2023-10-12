import { useState, useEffect } from 'react';
//useEffect는 두 개의 argument를 가지는 function임
//첫 번째 argument는 딱 한번만 실행하고 싶은 코드

import Button from './Button';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log('I run all the time');
  //useEffect에는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어줌
  const iRunOnlyOnce = () => {
    console.log('i run only once.');
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Continue'} />
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;

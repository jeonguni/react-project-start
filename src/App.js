import { useState, useEffect } from 'react';
//useEffect는 두 개의 argument를 가지는 function임
//첫 번째 argument는 딱 한번만 실행하고 싶은 코드

import Button from './Button';
import Cleanup from './Cleanup';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue(prev => prev + 1);
  const onChange = event => setKeyword(event.target.value);
  //useEffect에는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어줌
  useEffect(() => {
    console.log('I run only once');
  }, []);
  //여기는 배열안에 react가 지켜볼 게 아무것도 없기때문에 처음 한번만 실행됨

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);
  // [keyword] 배열 안의 state가 변화할 때, 앞의 코드를 실행할 것이라고 알려주는것

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here" />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Continue'} />
      <button onClick={onClick}> click me</button>
      <Cleanup />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Button from './Button';
import styles from './App.module.css';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue(prev => prev + 1);
  console.log('render');
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'Continue'} />
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;

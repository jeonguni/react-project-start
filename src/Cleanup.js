import React from 'react';
import { useState, useEffect } from 'react';

export const Cleanup = () => {
  function Hello() {
    // case1
    useEffect(() => {
      console.log('hi');
      return () => console.log('bye');
    }, []);

    //case2
    useEffect(() => {
      console.log('hi');
      return function () {
        console.log('bye');
      };
    }, []);

    return <h1>Hello</h1>;
  }
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </div>
  );
};

export default Cleanup;

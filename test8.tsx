import React from 'react';

const a: JSX.Element = <div tabIndex={0}></div>

const b: JSX.Element = React.createElement('div', {tabIndex: 1+1}, 'a')
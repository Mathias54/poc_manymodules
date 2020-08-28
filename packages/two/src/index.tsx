import React, { useState } from 'react';

const myComponent = () => {
  const [ nome ] = useState('Mathias');
  return (
    <div>Meu nome é: {nome}</div>
  )
}

export default myComponent;

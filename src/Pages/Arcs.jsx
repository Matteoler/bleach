import React from 'react';
import { useParams } from 'react-router-dom';

function arcs( ) {
    const { name } = useParams();
  return (
    <div>
      <h1>Arcs</h1>
        <h1>{name}</h1>
    </div>
  );
}

export default arcs;
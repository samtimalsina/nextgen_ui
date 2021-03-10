import React from 'react';
// import type { FC } from 'react';

export interface Person {
  name: string;
  age: number;
}

const PersonTag = (props: Person) => {
  const { name, age } = props;

  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
}

export default PersonTag;

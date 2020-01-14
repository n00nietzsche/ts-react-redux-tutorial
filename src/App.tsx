import React from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

const App: React.FC = () => {
  return (
    <>
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
    </>
  );
};

export default App;

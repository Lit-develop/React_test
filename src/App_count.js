import { useState } from "react";

export default function MyApp_count() {
  return (
    <div className="App_count">
      <h1>Считаем нажатия на кнопки отдельно для каждой</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

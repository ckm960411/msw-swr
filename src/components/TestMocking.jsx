import React, { useState } from "react";

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=Chelsea";

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        if (json.errorMessage) throw new Error(json.errorMessage)
        setData(json.data)
        console.log(JSON.stringify(json))
      })
      .catch((err) => setError(`something wrong: ${err}`));
  };
  const handleClick2 = () => {
    fetch("https://localhost:3000/login")
      .then(response => response.json())
      .then(json => console.log(JSON.stringify(json)))
  };

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

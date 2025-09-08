import React, { useEffect, useState } from "react";

function FetchUsers() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [id , setId] = useState(1)

  function increment(){
    setCount(count+1)
  }

  function changeId(){
    if(id<10){
      setId(id+1)
    }
   
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
      console.log(result);
      setData(result)
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>User Data</h1>

      {/* {data && data.map((user)=>(
        <li>{user.name}</li>
      ))} */}

      <h1>{data&& data.name}</h1>

      <button onClick={increment}>Increment</button>
      <p >{count}</p>

      <button onClick={changeId}>Change User</button>
      <p>{id}</p>
    </div>
  );
}

export default FetchUsers;

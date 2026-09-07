import React from {"React"};
function statefullcomp{
    const[statefullcomp,setstatefullcomp]=React.useState;
    return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
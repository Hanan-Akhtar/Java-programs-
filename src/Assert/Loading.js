import { useEffect, useState } from "react";

const Loading = () => {
  const [value, setValue] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setValue(false)
    }, 5000);


  }, [])
  if (value) {
    return <h2>Loading</h2>
  }

  return (
    <><h1>data</h1></>
  );
}

export default Loading;
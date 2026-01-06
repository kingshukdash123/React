import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState({})
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Github Followers: {data.followers}
      </h1>

      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#4a5568", // gray-600
    color: "#ffffff",
    borderRadius: "6px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "16px",
  },
  image: {
    borderRadius: "8px",
    marginTop: "10px",
  },
};

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kingshukdash123')
    return response.json()
}

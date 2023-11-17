import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Avi2492")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  //   useLoaderdata
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-lg">
      <p className="p-2 m-2 text-black rounded-md bg-orange-500">{data.name}</p>
      <img
        src={data.avatar_url}
        alt="Gitimage"
        width={300}
        height={300}
        className="mx-auto rounded-xl"
      />
      <button className="bg-orange-500 p-2 m-2 rounded-lg text-black">
        Total Repos: {data.public_repos}
      </button>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Avi2492");
  return response.json();
};

import { useState, useEffect } from "react";
import {
  useLoaderData,
  Link,
  useRouteLoaderData,
  json,
} from "react-router-dom";

function AboutUs() {
  // const [joke, setJoke] = useState("");
  // const [error, setError] = useState(null);
  // const [status, setStatus] = useState("pending");

  //   useEffect(() => {
  //     async function fetchJoke() {
  //       const res = await fetch("https://api.chucknorris.io/jokes/random");
  //       if (!res.ok) {
  //         setStatus("rejected)");
  //       } else {
  //         const data = await res.json();
  //         setJoke(data.value);
  //         setStatus("resolved");
  //         return data.value;
  //       }
  //     }

  //     fetchJoke();
  //   }, []);

  //   if (status === "pending") {
  //     return (
  //       <>
  //         <h1> About our founder! </h1>
  //         <h2>here is his favourite joke:</h2>
  //         <div>loading...</div>
  //       </>
  //     );
  //   } else if (status === "rejected") {
  //     return <h1>Theres an error</h1>;
  //   } else if (status === "resolved") {
  //     return (
  //       <>
  //         <h1> About our founder! </h1>
  //         <h2>here is his favourite joke:</h2>
  //         <div>{joke}</div>
  //       </>
  //     );
  //   }
  // }image.png

  const data = useRouteLoaderData("about-loader");
  const joke = data.value;

  return (
    <>
      <h1> About our founder! </h1>
      <h2>here is his favourite joke:</h2>
      <div>{joke}</div>
      <p>
        Click <Link to="bonus">here</Link> for his second favourite joke
      </p>
    </>
  );
}

export default AboutUs;

export async function loader() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  if (!res.ok) {
    throw json(
      { message: "Cannot fetch data", contact: "admin@helpdesk.co.uk" },
      { status: 500 }
    );
  } else {
    return res.json();
  }
}

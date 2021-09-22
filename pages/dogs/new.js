import { useState } from "react";
import { useRouter } from "next/router";

export default function New(props) {
  // get nextjs router
  const router = useRouter();

  const [formState, setFormState] = useState({
    name: null,
    age: null,
    breed: null,
    image: null,
  });

  const handleChange = (event) => {
    const newState = { ...formState }; //make a copy of old state
    newState[event.target.name] = event.target.value; // update the form property edited
    setFormState(newState); // update the state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/dogs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    router.push("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="number"
          name="age"
          value={formState.age}
          onChange={handleChange}
          placeholder="age"
        />
        <input
          type="text"
          name="breed"
          value={formState.breed}
          onChange={handleChange}
          placeholder="breed"
        />
        <input
          type="text"
          name="image"
          value={formState.image}
          onChange={handleChange}
          placeholder="image"
        />
        <input type="submit" value="Create Dog" />
      </form>
    </div>
  );
}

export async function getStaticProps(ctx) {
  return {
    props: {
      title: "Dogs App - New Dog Form",
      description: "This page is for adding a new dog to the list",
    },
  };
}

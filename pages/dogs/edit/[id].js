import { useState } from "react";
import { useRouter } from "next/router";
import { getDog } from "../../../utils/actions";

export default function New({dog}) {
  // get nextjs router
  const router = useRouter();

  // initialize the form with the existing dogs data
  const [formState, setFormState] = useState(dog);

  const handleChange = (event) => {
    const newState = { ...formState }; //make a copy of old state
    newState[event.target.name] = event.target.value; // update the form property edited
    setFormState(newState); // update the state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("/api/dogs/" + dog._id, {
      method: "put",
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
        <input type="submit" value="Update Dog" />
      </form>
    </div>
  );
}

export async function getServerSideProps(ctx) {

  const id = ctx.query.id
  const dog = JSON.parse(JSON.stringify(await getDog(id)))

  return {
    props: {
      title: "Dogs App - Edit Dog Form",
      description: "This page is for editing an existing dog",
      dog
    },
  };
}

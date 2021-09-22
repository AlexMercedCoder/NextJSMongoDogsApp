import { getDogs, getDog, updateDog, destroyDog } from "../../../utils/actions";

export default async function handler(req, res) {
  console.log(req.body);
  try {
    // GET THE URL PARAM
    const id = req.query.id;

    // SHOW ROUTE
    if (req.method === "GET") res.json(await getDog(id));

    // UPDATE ROUTE
    if (req.method === "PUT") res.json(await updateDog(req.body, id));

    // DESTROY ROUTE
    if (req.method === "DELETE") res.json(await destroyDog(id));

    // ANYTHING ELSE
    if (!["GET", "PUT", "DELETE"].includes(req.method))
      res.status(404).send("no response for that method");
  } catch (error) {
    res.status(400).json({ error });
  }
}

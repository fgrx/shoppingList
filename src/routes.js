class Routes {
  app;
  datas;

  constructor(app, datas) {
    app.get("/", (req, res) =>
      res
        .status(200)
        .send(
          "Bienvenue sur ma shopping list! les noeuds commencent pas /shopping"
        )
    );

    app.get("/shopping", (req, res) => res.status(200).send(datas));

    app.get("/shopping/:id", (req, res) => {
      const id = parseInt(req.params.id);
      const result = datas.find((data) => data.id === id);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Aucun item trouvé");
      }
    });

    app.post("/shopping", (req, res) => {
      const newItem = req.body;
      newItem.id = datas.length + 1;
      datas.push(newItem);

      res.status(200).json(newItem);
    });

    app.delete("/shopping/:id", (req, res) => {
      const id = parseInt(req.params.id);
      const itemToDelete = datas.find((data) => data.id === id);

      if (itemToDelete) {
        const indexItem = datas.indexOf(itemToDelete);
        datas.splice(indexItem, 1);

        res.status(200).json(datas);
      } else {
        res.status(400).send("Aucun item trouvé");
      }
    });
  }
}

export default Routes;

const handleProfileGet = (req, res, db) => {
  const { id } = req.params;

  db.select("*")
    .from("users")
    .where({ id: id })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(404).json("We do not have that user in the database");
      }
    })
    .catch((err) => res.status(400).json("Error getting the user"));
  /* if (!found) {
    res.status(404).json("we do not have that user in database");
  } */
};

module.exports = {
  handleProfileGet: handleProfileGet,
};

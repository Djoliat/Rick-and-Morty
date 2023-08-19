const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, status, species, origin, image } = (
      await axios.get(URL + Number(id))
    ).data;

    let character = {
      id: +id,
      name,
      gender,
      origin,
      status,
      image,
      species,
    };

    return character.name
      ? res.status(200).json(character)
      : (error) => res.status(404).send("not found");
  } catch (error) {
    (error) => res.status(500).send(error.message);
  }
};

module.exports = { getCharById };

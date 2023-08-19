import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setFavs] = useState(false);

  const handleFavorite = () => {
    // if(isFav){
    // removeFav(id)
    // } else {
    // addFav({id, name, status,species, gender, origin, image, onClose}
    // }
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });

    setFavs(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFavs(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.conteiner}>
      {isFav ? (
        <button className={styles.botonFav} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={styles.botonFav} onClick={handleFavorite}>
          🤍
        </button>
      )}

      <img className={styles.imgen} src={image} alt={name} />

      <NavLink to={`/detail/${id}/`}>
        <h4 className={styles.letraTitulo}>{name}</h4>
      </NavLink>

      <div className={styles.leter}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>Status: {status}</h2> */}
        {/* <h2>Origin: {origin}</h2> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

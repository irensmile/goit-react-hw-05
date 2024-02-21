import { buildPicturePath } from "../api";
import css from "./CastCard.module.css";

export const CastCard = ({ cast }) => (
  <li className={css.card}>
    <div>Name: {cast.name}</div>
    <div>Character: {cast.character}</div>
    {cast.profile_path && (
      <img
        src={buildPicturePath(cast.profile_path)}
        alt={cast.character}
        width="100"
      />
    )}
  </li>
);
export default CastCard;

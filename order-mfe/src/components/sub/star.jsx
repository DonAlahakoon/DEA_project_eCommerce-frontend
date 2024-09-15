import {
  FontAwesomeIcon,
  STAR_FILLED,
  STAR_EMPTY,
} from "../../configs/config.jsx";

/**
 * Stars component which uses to symbolize ratings with stars upto 5
 * Owner: Demesh Fernando
 * Last Updated Date: 22 July 2024
 * @component
 * @param {string} props star count
 * @returns generated star component with generated stars
 * @example
 * <Stars star="5">: This will generate five filled stars.
 */
export default function Stars(props) {
  var stars = 0;
  const starImgGallery = [];
  switch (props.star) {
    case "1":
      stars = 1;
      break;
    case "2":
      stars = 2;
      break;
    case "3":
      stars = 3;
      break;
    case "4":
      stars = 4;
      break;
    case "5":
      stars = 5;
      break;
    default:
      stars = 0;
      break;
  }

  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starImgGallery.push(
        <FontAwesomeIcon key={i} icon={STAR_FILLED} className="star-filled" />
      );
      continue;
    }
    starImgGallery.push(<FontAwesomeIcon icon={STAR_EMPTY} />);
  }

  return <div className="stars">{starImgGallery}</div>;
}

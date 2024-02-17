import * as utils from "../utils/constents"
const RestaurantCard = ({ resData }) => {


    return (
      <div className="card">
        <img
          src={`${utils.CDN_URL+resData.cloudinaryImageId}`}
        />
        <h3>
          {resData.name.length > 23
            ? resData.name.slice(0, 23) + "..."
            : resData.name}
        </h3>
        {/* <img src={star} alt={"star img for rating"}/> */}
        <div className="delivery-details">
          <span className="rating">{resData.avgRating + " . "}</span>
          {resData.sla.slaString}
        </div>
        <p className="res-description">
          {resData.cuisines.join(", ").length > 20
            ? resData.cuisines.join(", ").slice(0, 20) + "..."
            : resData.cuisines.join(", ")}
        </p>
        <p className="res-location">{resData.areaName}</p>
      </div>
    );
  };
  export default RestaurantCard;
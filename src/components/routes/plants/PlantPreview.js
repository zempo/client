import React from "react";
import { connect } from "react-redux";
import { useModal } from "../../../utils/useModal";
import PlantModal from "./PlantModal";
import { prettyDate, wateringDate } from "../../utils/DateFormatters"

const PlantPreview = (props) => {
  const { isShowing: isShowingPlant, toggle: togglePlant } = useModal();
  const {
    id,
    nickname,
    species,
    h2o_frequency,
    image,
    group,
    instructions,
    last,
    next,
  } = props.plant;

  return (
    <div className='plant-list-item'>
      <div className='plant-preview' onClick={togglePlant}>
        <div className="preview-header">
          <h3>{nickname}</h3>
          <p>Last watered on {prettyDate(last)}</p>
        </div>
        <img
          src={
            image
              ? image
              : "https://mk0punsjokesui4twax7.kinstacdn.com/wp-content/uploads/2020/07/funny-plant-puns-950x500.jpg"
          }
          alt='plant preview'
        />
      </div>
      <PlantModal
        id={id}
        payload={props.plant}
        isShowing={isShowingPlant}
        hide={togglePlant}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, {})(PlantPreview);

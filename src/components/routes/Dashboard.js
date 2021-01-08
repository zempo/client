import React, { useEffect, useState } from "react";
import getPlants, { START_PLANTS_GET } from "../../store/actions/getPlants";
import { connect } from "react-redux";
import "../sass/Dashboard.scss";
import { prettyDate, wateringDate } from "../utils/DateFormatters";
// components
import AddPlant from "./plants/AddPlant";
import PlantPreview from "./plants/PlantPreview";

const Dashboard = (props) => {
  const { getPlants } = props;
  const { plants } = props.state.plantsReducer;
  const [editing, setEditing] = useState(false);
  const [wateringDays, setWateringDays] = useState([]);

  useEffect(() => {
    const uniqueDateStrings = [...new Set(plants.map((plant) => plant.next))];
    const waterDays = uniqueDateStrings.sort(
      (a, b) => new Date(a) - new Date(b)
    );
    setWateringDays(waterDays);
  }, [plants]);

  useEffect(() => {
    getPlants();
  }, [getPlants]);

  return (
    <section className="pg dash-pg">
      <section className="header">
        <div>
          <h1>Your Watering Schedule</h1>
        </div>
        <div>
          {editing ? (
            <button
              onClick={() => {
                setEditing(false);
              }}
            >
              Cancel
            </button>
          ) : (
            <button
              onClick={() => {
                setEditing(true);
              }}
            >
              Add Plant
            </button>
          )}
        </div>
      </section>
      <div className="wrapper">
        <section className="plants">
          {wateringDays.map((day, i) => (
            <section key={i} className="day">
              <h3>{wateringDate(day.toString())}</h3>
              <hr></hr>
              <div className="plant-list">
                {plants
                  .filter((plant) => plant.next === day.toString())
                  .map((plant) => (
                    <PlantPreview plant={plant} key={plant.id} />
                  ))}
              </div>
            </section>
          ))}
        </section>
        <section className="newPlant">
          {editing ? <AddPlant setEditing={setEditing} /> : null}
        </section>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { getPlants })(Dashboard);

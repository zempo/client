import React, { useState } from "react";
import getPlants from "../../../store/actions/getPlants";
import addPlant from "../../../store/actions/addPlant";
import { connect } from "react-redux";
import * as Yup from 'yup';
import FormBuilder from '../../utils/FormBuilder'

const plantSchema = Yup.object().shape({
  nickname: Yup.string().required("Please enter a name"),
  species: Yup.string(),  
  h20_frequency: Yup.number("Please enter a watering frequency").required(),
  group: Yup.string(),
  img: Yup.string(),
  instructions: Yup.string(),
});

const fields = [
  { id: "nickname", type: "text", label: "Nickname" },
  { id: "species", type: "text", label: "Species" },
  { id: "h20_frequency", type: "number", label: "Water Every # Days" },
  { id: "group", type: "text", label: "Group" },
  { id: "img", type: "text", label: "Image URL" },
  { id: "instructions", type: "textarea", label: "Special Instructions" },
];

let init = {};
fields.forEach((field) => (init[field.id] = ""));

const AddPlant = (props) => {

  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);

  const onCancel = (e) => {
    e.preventDefault();
    props.setEditing(false);
    setValues(init);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // new plant goes here
    const newPlant = values;
    console.log(newPlant);
    props.addPlant(newPlant);
    setValues(init);
    props.setEditing(false);
  };

 const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }
  
  return (
    <div className="form-container">
      <h2>Add New Plant</h2>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={plantSchema}
          getFormState={getFormState}
        />
      <button type="submit" disabled={disabled}>
        Add Plant
      </button>
      </form>
    </div>
  )

};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, { addPlant, getPlants })(AddPlant);



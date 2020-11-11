import React from "react";
import Styles from "./LoadApproveForm.module.scss";
import { getLoads, updateLoads, deleteLoad } from "./../../../../services/LoadsService";
import { useForm } from "react-hook-form";

const LoadApproveForm = (props) => {
  
  const { index, load } = props;
  const { driver, currentDate } = load;

  const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
      deleteLoad(load);
      let newLoad = {
        ...load,
        ...data,
        isSignedOff: data.isApproved == 1 ? true : false,
      }
      updateLoads(newLoad)
  }


  return (
    <>
      <form className={Styles.approveLoadForm} onSubmit={handleSubmit(submitForm)}>
          <h5>{driver}</h5>
          <h5>{currentDate}</h5>

          <label htmlFor={`yes${index}`}>
          Approve 
          <input 
              type="radio"
              ref={register}
              id={`yes${index}`}
              name="isApproved"
              value={1}
              />
          </label>

          <label htmlFor={`no${index}`}>
          Reject
          <input 
              type="radio"
              ref={register}
              id={`no${index}`}
              name="isApproved"
              value={0}
              />
          </label>

          <label htmlFor={`material${index}`}>
          Material
          <input 
              type="text" 
              placeholder="Enter material here"
              ref={register}
              id={`material${index}`}
              name="material"
              />
          </label>

          <label htmlFor={`mass${index}`}>
          Weight
          <input 
              type="number" 
              placeholder="KG"
              ref={register}
              id={`mass${index}`}
              name="mass"
              />
          </label>
          <input type="submit" />
      </form>
    </>
  );
};

export default LoadApproveForm;

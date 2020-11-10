import React, { useContext } from "react";
import Styles from "./LoadApproveForm.module.scss";
import { getLoads, updateLoad, deleteLoad } from "./../../../../services/LoadsService";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../context/userContext";
import { createNewsItem } from "../../../../services/newsItemsService";

const LoadApproveForm = (props) => {
  
  const {user} = useContext(UserContext)
  const { index, load } = props;
  const { driver, currentDate } = load;

  const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
      let newLoad = {
        ...load,
        ...data,
        isSignedOff: data.isApproved == 1 ? true : false,
      }
      delete newLoad.id;
      delete newLoad.isApproved;
      updateLoad(load.id, newLoad)

      ////
      createNewsItem({
        dateCreated: new Date(),
        title: data.isApproved == 1 ? "Load Approved" : "Load Rejected",
        message: `Load ${ data.isApproved == 1 ? "approved" : "rejected" } by ${user.fullNameStr}`,
        team: user.currentTeam,
        type: "loadApproved",
        seenBy: [],
        isImportant: false,
        info: {
            driver: load.driver,
            mass: data.mass,
            material: data.material,
            approvedBy: user.userID
        }
      })
  }

  const date = currentDate.toDate().toString().substring(0, 21);

  return (
    <>
      <form className={Styles.approveLoadForm} onSubmit={handleSubmit(submitForm)}>
          <h5>{driver}</h5>
          <h5>{date}</h5>

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

import { useState } from "react";
import "./CandidateCreatePage.css";
export const CandidateCreationPage = () => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([formData]);
  };
  console.log(data);
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="leftSide">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={handleChange}
            placeholder="enter your name"
          />
          <br /> <br />
          <label htmlFor="DOB">Date of Birth</label>
          <br />
          <input
            type="date"
            id="DOB"
            onChange={handleChange}
            placeholder="enter your Date of Birth"
          />
          <br />
          <br />
          <label htmlFor="age">Age</label>
          <br />
          <input
            type="number"
            id="age"
            onChange={handleChange}
            placeholder="enter your age"
          />
          <br />
        </div>
        <div className="rightSide">
          <label htmlFor="name">Address</label>
          <br />
          <input
            type="text"
            id="address"
            onChange={handleChange}
            placeholder="enter your address"
          />
          <br />
          <br />

          <label htmlFor="state">State</label>
          <br />
          <select name="select" id="select" onChange={handleChange}>
            <option value="">Select your state</option>
            <option value="sortlist">Sortlist</option>
            <option value="rejected">Rejected</option>
          </select>
          <br />
          <br />
          <label htmlFor="pinCode">Pin Code</label>
          <br />
          <input
            type="number"
            id="pincode"
            onChange={handleChange}
            placeholder="enter your 6-digit pin code"
          />
        </div>
        <div className="formButtons">
          <input type="button" id="cancelBtn" value={"Cancel"} />
          <input type="submit" id="createBtn" value={"Create"} />
        </div>
      </form>
    </>
  );
};

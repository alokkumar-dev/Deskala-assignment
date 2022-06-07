import "./CandidateCreatePage.css"
export const CandidateCreationPage = () => {
  return (
    <>
      <form action="">
        <div className="leftSide">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" placeholder="enter your name" />
          <br /> <br />
          <label htmlFor="DOB">Date of Birth</label><br />
          <input type="date" id="DOB" placeholder="enter your Date of Birth" />
          <br /><br />
          <label htmlFor="age">Age</label>
          <br />
          <input type="number" id="age" placeholder="enter your age" />
          <br />
        </div>
        <div className="rightSide">
          <label htmlFor="name">Address</label>
          <br />
          <input type="text" id="address" placeholder="enter your address" />
          <br /><br />

          <label htmlFor="state">State</label>
          <br />
          <select name="select" id="">
            <option value="">Select your state</option>
            <option value="sortlist">Sortlist</option>
            <option value="rejected">Rejected</option>
          </select>
          <br /><br />
          <label htmlFor="pinCode">Pin Code</label>
          <br />
          <input
            type="number"
            id="pincode"
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

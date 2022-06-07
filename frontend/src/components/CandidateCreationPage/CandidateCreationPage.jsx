export const CandidateCreationPage = () => {
  return (
    <>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="enter your name" />
        <label htmlFor="name">Address</label>
        <input type="text" id="address" placeholder="enter your address" />
        <label htmlFor="DOB">Date of Birth</label>
        <input type="text" id="DOB" placeholder="enter your Date of Birth" />
        <label htmlFor="state">State</label>
        <select name="select" id="">
          <option value="">Select your state</option>
          <option value="sortlist">Sortlist</option>
          <option value="rejected">Rejected</option>
        </select>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="enter your age" />
        <label htmlFor="pinCode">Pin Code</label>
        <input
          type="number"
          id="pincode"
          placeholder="enter your 6-digit pin code"
        />
      </form>
    </>
  );
};

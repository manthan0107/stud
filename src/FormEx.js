import React from "react";
// form example component
function FormEx() {
  return (
    <div>
      <form className="formmargin">
        <fieldset>
          <legend>Student's personal information</legend>
          <label>Name: (Surname first)</label>
          <br />
          <input type="text" />
          <br />
          <label>Enter your password</label>
          <br />
          <input type="password" />
          <br /> <br />
          <label>Enter your email</label>
          <br />
          <input type="email" />
          <br />
          Enter your Address:
          <br />
          <textarea></textarea>
          <br /> <br />
          <label>Enter your gender</label>
          <br />
          <input type="radio" value="male" />
          Male
          <input type="radio" value="female" />
          Female
          <input type="radio" value="others" />
          others <br />
          <label>Select couse: </label>
          <select>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Com">B.Com</option>
          </select>
          <br />
          <br />
          <input type="submit" value="sign-up" />
        </fieldset>
      </form>
    </div>
  );
}

export default FormEx;

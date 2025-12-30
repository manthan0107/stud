import { useState } from "react";

const FormEx2 = () => {
  let [msg, setMsg] = useState("");
  let [dispmsg, setDispmsg] = useState("");

  const changeHandler = (event) => {
    setMsg(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setDispmsg(msg);
    setMsg("");
  };

  return (
    <div>
      <form className="formmargin" onSubmit={submitHandler}>
        <label>Enter message:</label>
        <br />
        <input type="text" value={msg} onChange={changeHandler} />
        <br />
        <br />
        <input type="submit" value="Submit Message" />
        <br />
        <br />
        <label>Your message is </label>
        <br />
        <input type="text" value={dispmsg} />
      </form>
    </div>
  );
};

export default FormEx2;

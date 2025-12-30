import {useState} from "react";

const FormEx1 = () => {
  let [msg, setMsg] = useState("");
  const changeHandler = (event) => {
    setMsg(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    alert(msg);
    setMsg("");
  };

  return (
    <div>
      <form className="formmargin" onSubmit={submitHandler}>
        <label>Enter message:</label>
        <br />
        <input type="text" value={msg} onChange={changeHandler} />
        <br />
        <input type="submit" value="Submit Message" />
      </form>
    </div>
  );
};

export default FormEx1;

import {useState} from "react"
export default function HelloMyNamePage() {
  const [name,setName] = useState("");
  const [result,setResult] = useState("Please insert your name.");
  const [isGreetOk,setGreet] = useState(false);
  const nameInput = (event:any) => {
    setName(event.target.value);
  }
  const greetBtn = () => {
    if(name.trim() === ""){
      setResult("Please insert your name.");
      setGreet(false);
    } else {
      setResult( `Hello, ${name}`);
      setGreet(true);
    }
  }
  
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange = {nameInput}
      />
      <button className="btn btn-primary" onClick={greetBtn}>Greet Me</button>
      {/* Result Text */}
      <p className={isGreetOk ? "text-success" : "text-danger"}>{result}</p>
    </div>
  );
}

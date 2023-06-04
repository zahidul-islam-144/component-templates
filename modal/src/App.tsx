import { useState } from "react";
import "./App.css";
import Modal2 from "./components/Modal2";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const handeClose = (value:boolean):void => {
  setOpen(value)
}
  return (
    <>
      <div
        className="py-2 px-3 bg-green-500 text-bl
        h-[3rem] w-[8rem] mx-auto mt-[25%] flex justify-center items-center font-bold rounded-md cursor-pointer"

        onClick={()=> setOpen(true)}
      >
        Open Modal
      </div>
   
      <Modal2 open={open} handeClose={handeClose}/>
    </>
  );
}

export default App;

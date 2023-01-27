import { useRef } from "react";
import Button from "../UI/Button";

export default function EventsSearch({ onSearch }) {
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  const submitHandler = () => {
    const month = monthRef.current.value;
    const year = yearRef.current.value;
    onSearch(month, year);
  };

  return (
    <div className="flex justify-between items-center  px-4 py-2 my-20 rounded-md border-2 border-black-900 shadow-md ">
      <div>
        <label htmlFor="year" className="mr-4">
          Year:
        </label>
        <select id="year" className="px-2 py-1 rounded-md" ref={yearRef}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div>
        <label htmlFor="month" className="mr-4">
          Month:
        </label>
        <select id="month" className="px-2 py-1  rounded-md" ref={monthRef}>
          <option value="1">January</option>
          <option value="2">Febuary</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </div>
  );
}

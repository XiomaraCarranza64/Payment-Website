import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  AiOutlineLine,
  AiFillCheckCircle,
  AiFillCreditCard,
} from "react-icons/ai";
import { RxSlash } from "react-icons/rx";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:8080/payment", {
        name: name,
        number: number,
        expiring: `${year}-${month}`,
        cvv: cvv,
      });
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(data.message);
    } catch (error) {
      console.log(error.response.data);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      toast.error("Invalid Information", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleClick = () => {
    setName("");
    setNumber("");
    setYear("");
    setMonth("");
    setCvv("");
  };

  return (
    <div className="flex flex-col w-2/3 h-full pb-10 bg-third shadow-lg rounded-xl md:p-10 lg:w-1/3">
      <div className=" flex w-full justify-evenly items-center invisible md:visible">
        <h1 className="text-fifth font-semibold">Account</h1>
        <AiOutlineLine />
        <AiFillCheckCircle className="text-lg" />
        <AiOutlineLine />
        <h1 className="text-fifth font-semibold">Payment</h1>
        <AiOutlineLine />
        <AiFillCheckCircle className="text-lg" />
        <AiOutlineLine />
        <h1 className="text-gray-400 font-semibold">Shipping</h1>
      </div>

      <h1 className="p-10 text-xl font-primary font-semibold">
        Payment Details
      </h1>

      <form
        className="flex px-10 flex-col  justify-center items-center w-full gap-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex  w-full gap-3 ">
          <div className="flex flex-col w-full gap-3">
            <label className="text-fourth font-primary font-medium ">
              Name on card
            </label>
            <input
              className="rounded-lg h-8 border-4 focus:outline-fourth bg-secondary px-5 "
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>

        <div className="flex  w-full gap-3 ">
          <div className="flex flex-col w-full gap-3">
            <label className="text-fourth font-primary font-medium ">
              Card number
            </label>
            <input
              className="rounded-lg h-8 border bg-secondary px-5 focus:outline-fourth"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="flex w-full gap-3 ">
            <div className="flex flex-col w-full gap-3">
              <div className="flex items-center gap-1">
                <label className="text-fourth font-primary font-medium ">
                  Expiration
                </label>
                <label className="text-fourth font-primary font-medium text-xss">
                  (mm/yyyy)
                </label>
              </div>

              <div className="flex items-center gap-0.5">
                <input
                  className="rounded-lg h-8 border w-1/2 bg-secondary px-5 focus:outline-fourth"
                  type="text"
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                />
                <RxSlash className="text-xl" />
                <input
                  className="rounded-lg h-8 border w-1/2  bg-secondary px-2 focus:outline-fourth"
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex  w-full gap-3 justify-center">
            <div className="flex flex-col justify-center w-full gap-3">
              <label className="text-fourth font-primary font-medium ">
                CVV
              </label>
              <input
                className="rounded-lg h-8 border w-full bg-secondary px-2 md:px-5  focus:outline-fourth"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="my-2 border w-full"></div>

        <div className="flex flex-col justify-center items-center gap-6 font-primary">
          <button
            type="button"
            className="text-xs hover:text-sm "
            onClick={handleClick}
          >
            Clear Information
          </button>
          <input
            value="Complete Order"
            type="submit"
            className="cursor-pointer bg-fifth p-3 text-white rounded-xl shadow-lg hover:text-lg hover:shadow-xl"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;

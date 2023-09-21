import {
  AiOutlineLine,
  AiFillCheckCircle,
  AiFillCreditCard,
} from "react-icons/ai";
import { RxSlash } from "react-icons/rx";

const Form = () => {
  return (
    <div className="flex flex-col w-2/3 h-full pb-10 bg-third rounded-xl md:p-10 lg:w-1/3">
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

      <h1 className="p-10 text-xl font-primary font-semibold">Payment Details</h1>

      <div className="flex px-10 flex-col  justify-center items-center w-full gap-4">
        <div className="flex  w-full gap-3 ">
          <div className="flex flex-col w-full gap-3">
            <label className="text-fourth font-primary font-medium ">
              Name on card
            </label>
            <input className="rounded-lg h-8 border-4 focus:outline-fourth bg-secondary px-5 " type="text"/>
          </div>
        </div>

        <div className="flex  w-full gap-3 ">
          <div className="flex flex-col w-full gap-3">
            <label className="text-fourth font-primary font-medium ">
              Card number
            </label>
            <input className="rounded-lg h-8 border bg-secondary px-5 focus:outline-fourth"  />
          </div>
        </div>

        <div className="flex w-full gap-5">
          <div className="flex w-full gap-3 ">
            <div className="flex flex-col w-full gap-3">
              <label className="text-fourth font-primary font-medium ">
                Expiration
              </label>
              <div className="flex items-center gap-0.5">
                <input className="rounded-lg h-8 border w-1/2 bg-secondary px-5 focus:outline-fourth" />
                <RxSlash className="text-xl"/>
                <input className="rounded-lg h-8 border w-1/2 bg-secondary px-5 focus:outline-fourth"  />

              </div>
              
            </div>
          </div>

          <div className="flex  w-full gap-3 justify-center">
            <div className="flex flex-col justify-center w-full gap-3">
              <label className="text-fourth font-primary font-medium ">
                CV
              </label>
              <input className="rounded-lg h-8 border w-full bg-secondary px-5 focus:outline-fourth" />
            </div>
          </div>

        </div>
        
        <div className="my-2 border w-full"></div>

        <div className="flex flex-col justify-center items-center gap-6 font-primary">
          <button type="button" className="text-sm hover:text-base">Cancel Order</button>
          <button type="button" className="bg-fifth p-3 text-white rounded-xl shadow-lg hover:text-lg hover:shadow-xl">Complete Order</button>
        </div>

      </div>

    </div>
  );
};

export default Form;

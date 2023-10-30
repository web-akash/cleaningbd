import Modal from "react-modal";
import {
  AiOutlineCalendar,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineReload,
} from "react-icons/ai";
import Input from "../Shared/Input/Input";
import RadioButton from "../Shared/RadioButton/RadioButton";
import CheckBox from "../Shared/CheckBox/CheckBox";
import SelectBox from "../Shared/SelectBox/SelectBox";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalWapper = ({ modalIsOpen, setModalIsOpen }) => {
  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center">
          <h4 className="text-2xl font-bold font-Roboto text-main">
            Book A Service
          </h4>
          <button
            className="absolute right-1 top-3 bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center"
            onClick={closeModal}
          >
            <AiOutlineClose />
          </button>
        </div>
        <hr />
        <div className="mt-5">
          <div>
            <form action="">
              <div>
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  CONTACT INFORMATION
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <Input type={"text"} placeholder={"First Name"} />
                  <Input type={"text"} placeholder={"Last Name"} />
                  <Input type={"email"} placeholder={"Email"} />
                  <Input type={"number"} placeholder={"Number"} />
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  SERVICE ADDRESS
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <Input type={"text"} placeholder={"Service Address"} />
                  <Input type={"text"} placeholder={"City"} />
                  <Input type={"text"} placeholder={"State / Division"} />
                  <Input type={"text"} placeholder={"Zip Code"} />
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  SERVICE DATE
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <Input type={"date"} placeholder={"Service Address"} />
                  <Input type={"time"} placeholder={"City"} />
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  FREQUENCY
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <RadioButton name={"One Time"} />
                  <RadioButton name={"Weekly"} />
                  <RadioButton name={"Bi-weeklay"} />
                  <RadioButton name={"Monthly"} />
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  SERVICE ADD-ONS
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <CheckBox id={"house"} name={"House Cleaning"} />
                  <CheckBox id={"window"} name={"Window Cleaning"} />
                  <CheckBox id={"batchroom"} name={"Batchroom Cleaning"} />
                  <CheckBox id={"office"} name={"Office Cleaning"} />
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  TYPE OF SERVICE
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <SelectBox>
                    <option value="">Room</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </SelectBox>
                  <SelectBox>
                    <option value="">Toilet</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </SelectBox>
                </div>
              </div>
              <div className="mt-8">
                <h5 className="font-Roboto font-semibold text-[15px] mb-1">
                  FLEXIBILITY TIME YOUR APPOINTMENT?
                </h5>
                <div className="grid grid-cols-2 gap-5">
                  <CheckBox id={"morning"} name={"Morning"} />
                  <CheckBox id={"afternoon"} name={"Afternoon"} />
                  <CheckBox id={"evening"} name={"Evening"} />
                </div>
              </div>
              {/* ----------- Booking Summary */}
              <div className="mt-12">
                <h5 className="font-Roboto font-semibold text-xl py-3  text-main">
                  BOOKING SUMMARY
                </h5>
                <hr />
                <div className="mt-7">
                  <ul className="space-y-5 mb-5">
                    <li className="font-semibold flex items-center space-x-3 ">
                      <AiOutlineHome className="text-xl" />
                      <span>House Clening</span>
                    </li>
                    <li className="font-semibold flex items-center space-x-3">
                      <AiOutlineCalendar className="text-xl" />
                      <span>Service Date</span>
                    </li>
                    <li className="font-semibold flex items-center space-x-3">
                      <AiOutlineReload className="text-xl" />
                      <span>Bi-Weekly</span>
                    </li>
                  </ul>
                  <hr />
                  <div className="mt-7">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Sub-Total</span>
                      <span>$320.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Sales-Tax</span>
                      <span>$20.00</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xl font-bold">Total</span>
                      <span>$340.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-main text-white font-medium mt-10 transition-all hover:bg-main/95"
              >
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalWapper;

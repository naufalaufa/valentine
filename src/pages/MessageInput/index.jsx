import { Button, Modal, message } from "antd";
import Cookies from "js-cookie";
import { useState } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
// import ValentineUndraw from "../../assets/images/undraw-valentine.png";
import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { FaSmileBeam } from "react-icons/fa";
import Kenny1 from "../../assets/images/kenny-2.png";

const MessageInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBack = () => {
    Cookies.remove("firstname");
    Cookies.remove("lastname");
    navigate("/");
  };

  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const image = Cookies.get("image");

  console.log({ image });

  console.log(lastname);
  console.log(firstname);

  return (
    <>
      <div className="grid min-h-screen place-content-center">
        <div className="p-4 bg-pink-800 rounded-e-xl rounded-b-xl relative">
          <span className="absolute top-[-20px] left-[-5px]">
            <FaSmileBeam size={35} className="text-yellow-200" />
          </span>
          <h2 className="text-white">
            Hello{" "}
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold">{`${firstname} ${lastname}`}</p>
              <span>
                <MdOutlineWavingHand size={40} />
              </span>
            </div>
          </h2>
        </div>
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <div className="flex justify-between">
              <Button onClick={() => message.info("Why not? 😞")}>No</Button>
              <Button
                onClick={() => {
                  message.success("YEAY!!!");
                  navigate("/nextInput");
                }}
              >
                Yes
              </Button>
            </div>
          }
        >
          <img src={Kenny1} alt={Kenny1} />

          <p className="whitespace-nowrap text-xs">
            Hello {`${firstname}  ${lastname}`} will you be my{" "}
            <span className="font-bold">Valentine ?</span>
          </p>
        </Modal>
        <div className="flex items-center gap-5">
          <Button
            onClick={handleBack}
            className="mt-3 bg-red-600 text-white shadow-md shadow-slate-700"
          >
            Back
          </Button>
          <Button
            className="mt-3 text-white bg-pink-500 shadow-md shadow-slate-700"
            onClick={showModal}
          >
            <div className="flex items-center justify-evenly">
              <p>PENCET DONG !</p>

              <span>
                <BsFillHandIndexThumbFill size={20} />
              </span>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MessageInput;

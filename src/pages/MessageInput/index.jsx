import { Button, Modal } from "antd";
import Cookies from "js-cookie";
import { useState } from "react";
import { MdOutlineWavingHand } from "react-icons/md";
import ValentineUndraw from "../../assets/images/undraw-valentine.png";
import { BsFillHandIndexThumbFill } from "react-icons/bs";

const MessageInput = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");

  console.log(lastname);
  console.log(firstname);

  return (
    <>
      <div className="grid min-h-screen place-content-center">
        <div className="p-4 bg-pink-800 rounded-e-xl rounded-b-xl">
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
              <Button onClick={handleCancel}>Cancel</Button>
              <Button>Next</Button>
            </div>
          }
        >
          <img src={ValentineUndraw} alt={ValentineUndraw} />
          <p>
            <span className="font-bold">Valentine</span>, sebuah cerita yang
            terpahat, Di dalam benak kita, abadi terkenang, Setiap detik
            berharga dalam kebersamaan, Di dalam cinta, kita temukan keajaiban.
          </p>
        </Modal>
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
    </>
  );
};

export default MessageInput;

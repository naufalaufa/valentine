import { Button, Form, Input, Modal, message } from "antd";
import Cookies from "js-cookie";
import { useState } from "react";
import { LuMailQuestion } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import kennyImage2 from "../../assets/images/kenny-4.png";

const ModalNext = () => {
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModalOpen = () => {
    setIsModalOpen(true);
  };
  const onOk = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    if (values.number === "14") {
      message.success("Happy valentine ❤️💕");
      navigate("/endPage");
    } else {
      message.error("Jawaban mu kurang tepat");
    }
  };

  return (
    <>
      <div className="min-h-screen grid place-content-center">
        <p className="text-white">
          Before the next step i have a question for u
        </p>
        <p className="font-bold text-white ">{`${firstname} ${lastname}`}</p>
        <span>😁😍</span>
        <Button
          onClick={showModalOpen}
          className="mt-3 w-[50%] bg-pink-800 shadow-lg shadow-slate-700 text-white flex items-center gap-3"
        >
          <p>Get a question</p>
          <span>
            <LuMailQuestion size={20} />
          </span>
        </Button>
        <Modal open={isModalOpen} onCancel={handleCancel} onOk={onOk} footer="">
          <img src={kennyImage2} alt={kennyImage2} />
          <p className="text-2xl font-bold my-3">10 + 4 = ?</p>
          <Form onFinish={onFinish}>
            <Form.Item name="number">
              <Input
                type="number"
                className="w-20"
                onChange={(e) => e.target.value}
              />
            </Form.Item>
            <div className="flex justify-end">
              <Button className="bg-pink-700 text-white" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default ModalNext;

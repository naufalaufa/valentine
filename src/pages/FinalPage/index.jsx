import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import { IoPerson } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AudioFile from "../../../public/musicFolder/y2mate.com - Cant Help Falling In Love  Elvis Presley  Lyrics video dan terjemahan  Alexandra Porat Cover.mp3";

const FinalPage = () => {
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const navigate = useNavigate();

  const onFinish = (values) => {
    Cookies.set("yourName", values.yourName);
    navigate("/messagePeople");
  };
  return (
    <>
      <div className="min-h-screen grid place-content-center ">
        <div className="bg-white p-4 rounded shadow-sm shadow-slate-700 text-sm max-w-[250px]">
          <h1 className="text-black flex items-center">
            Siapa orang yang mau lo temuin dihari valentine ini{" "}
            {`${firstname} ${lastname}`}?
            <span>
              <IoPerson size={20} />
            </span>
          </h1>
          <Form onFinish={onFinish}>
            <Form.Item
              name="yourName"
              rules={[
                {
                  message: "Harus diisi dong hehe",
                  required: true,
                },
              ]}
            >
              <Input className="mt-4" placeholder="Siapa nih ?" />
            </Form.Item>
            <Button
              htmlType="submit"
              className="bg-pink-500 text-white flex items-center gap-2 hover:bg-white"
            >
              <p>Kirim</p>
              <span>
                <FaHandHoldingHeart />
              </span>
            </Button>
          </Form>
        </div>
      </div>
      <audio src={AudioFile} autoPlay controls className="opacity-0" />
    </>
  );
};

export default FinalPage;

import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import AudioFile from "../../../public/musicFolder/y2mate.com - Cant Help Falling In Love  Elvis Presley  Lyrics video dan terjemahan  Alexandra Porat Cover.mp3";
import { useNavigate } from "react-router-dom";

const MessagePeople = () => {
  const navigate = useNavigate();
  const yourName = Cookies.get("yourName");
  const onFinish = (values) => {
    Cookies.set("message", values.message);
    navigate("/ending");
  };
  return (
    <>
      <div className="grid min-h-screen place-content-center">
        <h1 className="text-white">
          Mau kasih pesan apa buat{" "}
          <span className="font-bold text-xl">{`${yourName}`}</span> ?
        </h1>
        <Form onFinish={onFinish}>
          <Form.Item
            name="message"
            rules={[
              {
                message: "Harus diisi dong hehe",
                required: true,
              },
            ]}
          >
            <Input placeholder="Message" className="mt-3 text-xs p-2" />
          </Form.Item>
          <Button
            htmlType="submit"
            className="mt-1 w-[50%] m-auto bg-pink-700 text-white"
          >
            Submit
          </Button>
        </Form>
      </div>
      <audio src={AudioFile} autoPlay controls className="opacity-0" />
    </>
  );
};

export default MessagePeople;

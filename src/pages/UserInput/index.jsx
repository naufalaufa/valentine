import { Button, Form, Input, Typography, Upload, message } from "antd";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa6";
import LogoValentine1 from "../../assets/images/logo-valentine-1.png";
import LogoValentine2 from "../../assets/images/logo-valentine-2.png";
import LogoValentine3 from "../../assets/images/logo-valentine-3.png";
import LogoValentine5 from "../../assets/images/logo-valentine-5.png";

const UserInput = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    Cookies.set("firstname", values.firstname);
    Cookies.set("lastname", values.lastname);
    navigate("/messageInput");
    message.success(`Hello ${values.firstname} ${values.lastname}`);
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        style={{
          minHeight: "100vh",
          display: "grid",
          placeContent: "center",
          color: "white",
        }}
      >
        <div className="flex items-center justify-between">
          <img
            src={LogoValentine2}
            alt={LogoValentine2}
            className="w-[100px] h-[100px]"
          />
          <img
            src={LogoValentine3}
            alt={LogoValentine3}
            className="w-[100px] h-[100px]"
          />
        </div>

        <div
          className="shadow-md shadow-slate-700 relative"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <Typography.Title level={3}>Masukin nama lo dong</Typography.Title>
          <Form.Item
            name="firstname"
            rules={[
              {
                message: "Harus diisi dong hehe",
                required: true,
              },
            ]}
          >
            <Input placeholder="Your first name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[
              {
                message: "Harus diisi dong hehe",
                required: true,
              },
            ]}
          >
            <Input placeholder="Your last name" />
          </Form.Item>

          <div>
            <img
              src={LogoValentine1}
              className="w-[100px] h-[100px] absolute bottom-[-60px] left-[-30px]"
            />
            <img
              src={LogoValentine5}
              alt={LogoValentine5}
              className="w-[130px] h-[130px] absolute bottom-[-60px] right-[-50px]"
            />
          </div>
        </div>

        <Button
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white flex items-center justify-evenly p-5 gap-3 px-5 shadow-md shadow-slate-700 "
          htmlType="submit"
          style={{
            margin: "auto",
          }}
        >
          <p>Kirim</p>
          <span>
            <FaHandHoldingHeart />
          </span>
        </Button>
      </Form>
    </>
  );
};

export default UserInput;

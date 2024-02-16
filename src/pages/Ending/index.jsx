import Cookies from "js-cookie";
import AudioFile from "../../../public/musicFolder/y2mate.com - Cant Help Falling In Love  Elvis Presley  Lyrics video dan terjemahan  Alexandra Porat Cover.mp3";
import { TypeAnimation } from "react-type-animation";
import Message2 from "../../assets/images/message-2.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Ending = () => {
  const message = Cookies.get("message");
  const yourName = Cookies.get("yourName");
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen grid place-content-center">
        <div className="m-8">
          <img
            src={Message2}
            alt={Message2}
            className="w-[100px] h-[100px] rounded mb-9"
          />
          <p className="text-white text-md">
            From{" "}
            <span className="font-bold text-xl">{`${firstname} ${lastname}`}</span>{" "}
            to <span className="font-bold text-xl ">{`${yourName}`}</span>{" "}
          </p>
          <p className="text-white">
            This message : <span className="font-bold text-sm">{message}</span>
          </p>
          <p className="max-w-[250px] mt-10 text-white text-sm">
            <TypeAnimation
              speed={20}
              sequence={[
                '"Setiap momen bersamamu adalah hadiah yang tak ternilai.',
                1000,
                "Selamat Hari Valentine, terima kasih telah membuat hidupku berwarna like a rainbow xixixi ngakak abiezzz",
                1000,
              ]}
            />
          </p>
        </div>
        <Button
          onClick={() => navigate("/messageForKenny")}
          className="bg-blue-500 text-white"
        >
          Next
        </Button>
      </div>

      <audio src={AudioFile} controls autoPlay className="opacity-0" />
    </>
  );
};

export default Ending;

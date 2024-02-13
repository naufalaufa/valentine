import Cookies from "js-cookie";
import MessageImage from "../../assets/images/message.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import AudioFile from "../../assets/audio/music-1.mp4";
const EndPage = () => {
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const navigate = useNavigate();

  const handleCancel = () => {
    Cookies.remove("firstname");
    Cookies.remove("lastname");
    navigate("/");
  };

  return (
    <div className="min-h-screen grid place-content-center text-white">
      <h1 className="relative text-2xl">
        <span className="text-6xl font-bold text-white ">H</span>appy Valentine
        <p className="rounded-e-lg rounded-se-sm bg-pink-300 p-2 my-4 text-white text-md relative">{`${firstname} ${lastname}`}</p>
        <img
          src={MessageImage}
          alt={MessageImage}
          className="w-[130] h-[130px] absolute bottom-[100px] right-[100px]"
        />
        <span className="absolute right-0 top-0">
          <FaHeart
            size={40}
            className="text-red-300 shadow-sm shadow-slate-700 p-2 hover:bg-white duration-75 "
          />
        </span>
      </h1>

      <p className="text-xs">Selamat tanggal 14</p>
      <p className="text-xs mt-1">
        Selamat hari valentine , selamat hari kasih sayang
      </p>
      <audio controls autoPlay src={AudioFile} className="opacity-0" />
      <Button
        onClick={handleCancel}
        className="mt-10 bg-pink-800 text-white font-bold w-[50%] flex items-center justify-evenly"
      >
        <p>Back</p>
        <span>
          <IoMdArrowBack />
        </span>
      </Button>
    </div>
  );
};

export default EndPage;

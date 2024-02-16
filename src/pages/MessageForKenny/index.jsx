import Cookies from "js-cookie";

const MessageForKenny = () => {
  const firstname = Cookies.get("firstname");
  const lastname = Cookies.get("lastname");
  const yourName = Cookies.get("yourName");

  console.log(firstname);
  console.log(lastname);

  return (
    <>
      <div className="min-h-screen grid place-content-center">
        <p className="text-white">
          Gue tantang lo screenshot ke{" "}
          <span className="font-bold">{yourName}</span>
        </p>
      </div>
    </>
  );
};

export default MessageForKenny;

import { Spin } from "antd";

const Loading = () => {
  return (
    <>
      <Spin
        style={{
          minHeight: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      />
    </>
  );
};

export default Loading;

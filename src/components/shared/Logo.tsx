import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img src="bvdu_logo.png" alt="logo" width={"30px"} height={"30px"} />
      </Link>
    </div>
  );
};

export default Logo;

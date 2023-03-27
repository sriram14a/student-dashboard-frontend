import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="body  ">
      <div>
        <img
          className="zen-logo"
          src="https://www.pngkit.com/png/detail/359-3598370_logos-google-code-icon-windows-8-iconset-icons8.png"
          alt="img"
        />
      </div>
      <div className="d-flex text-center justify-content-around align-items-center ">
        <div className="admin-card rounded">
          <h2>Mentor</h2>
          <div className="mt-5">
            <IconButton
              sx={{ backgroundColor: "#4b0dba", color: "black" }}
              onClick={() => navigate("register-admin")}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </div>
        <div className="admin-card rounded">
          <h2>Student</h2>
          <div className="mt-5">
              
            <IconButton sx={{ backgroundColor: "#4b0dba", color: "black" }}  onClick={() => navigate("register")}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="text-center">
        <img src="https://ca01001129.schoolwires.net/cms/lib/CA01001129/Centricity/Domain/612/REGISTRATION.gif" alt=""/>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../source";

export function Studentdashboard() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch(`${API}/user/userdata`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data.data));
  }, []);
  const navigate = useNavigate();

  return (
    <div className="body">
      <div className="d-flex studentdashboard">
        <div className="list-width">
          <div>
            <p className="dash-logo">
              <img
                className="zen-logo-dash"
                src="https://www.pngkit.com/png/detail/359-3598370_logos-google-code-icon-windows-8-iconset-icons8.png"
                alt="img"
              />
              <span className="pl-3">Student</span>
            </p>
          </div>
          <div className="scroll">
            <div onClick={() => navigate("/studentdashboard/classes")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://www.freeiconspng.com/thumbs/classes-icon/classes-icon-17.png"
                  alt=""
                />
                <span className="pl-3">Class</span>
              </p>
            </div>
            <div
              onClick={() =>
                navigate(`/studentdashboard/dashboard/${userData.email}`)
              }
            >
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
                  alt=""
                />
                <span className="pl-3">Dashboard</span>
              </p>
            </div>
            <div
              onClick={() =>
                navigate(`/studentdashboard/tasks/${userData.email}`)
              }
            >
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png"
                  alt=""
                />
                <span className="pl-3">Tasks</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/webcode/")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/icon-code/icon-code-4.jpg"
                  alt=""
                />
                <span className="pl-3">Webcode</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/capstone")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/review-icon-png/review-icon-png-18.jpg"
                  alt=""
                />
                <span className="pl-3">Capstone</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/queries")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/help-icon-transparent-background/help-icon-transparent-background-24.jpg"
                  alt=""
                />
                <span className="pl-3">Queries</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/requirements")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/criteria-icon/criteria-icon-6.jpg"
                  alt=""
                />
                <span className="pl-3">Requirements</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/portfolio")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/portfolio-icon/portfolio-icon-3.jpg"
                  alt=""
                />
                <span className="pl-3">Portfolio-Submission</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/application")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/web-application-icon/web-application-icon-13.jpg"
                  alt=""
                />
                <span className="pl-3">Application</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/interview-tasks")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/interview-icon-png/interview-icon-png-5.jpg"
                  alt=""
                />
                <span className="pl-3">Interview-Tasks</span>
              </p>
            </div>
            <div
              onClick={() => navigate("/studentdashboard/leave-application")}
            >
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://play-lh.googleusercontent.com/IsZXVDI016W3wktweOtcz7iy9KLGWcO2iLr1F3lkJj8hWHR9vfYSn3KFc5suCF4Ohhk"
                  alt=""
                />
                <span className="pl-3">Leave-application</span>
              </p>
            </div>
            <div onClick={() => navigate("/studentdashboard/mock-interview")}>
              <p className="listname overflow-hidden">
                <img
                  className="icon"
                  src="https://icon-library.com/images/interview-icon-png/interview-icon-png-14.jpg"
                  alt=""
                />
                <span className="pl-3">Mock interviews</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

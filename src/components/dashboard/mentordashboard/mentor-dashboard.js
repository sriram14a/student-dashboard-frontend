import { useNavigate } from "react-router-dom";

export function Mentordashboard() {
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
              <span className="pl-3">Mentor</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/classes")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://www.freeiconspng.com/thumbs/classes-icon/classes-icon-17.png"
                alt=""
              />
              <span className="pl-3">Class</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/dashboard")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://www.freeiconspng.com/thumbs/dashboard-icon/dashboard-icon-3.png"
                alt=""
              />
              <span className="pl-3">Dashboard</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/tasks")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png"
                alt=""
              />
              <span className="pl-3">Tasks</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/webcode")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/icon-code/icon-code-4.jpg"
                alt=""
              />
              <span className="pl-3">Webcode</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/capstone")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/review-icon-png/review-icon-png-18.jpg"
                alt=""
              />
              <span className="pl-3">Capstone</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/queries")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/help-icon-transparent-background/help-icon-transparent-background-24.jpg"
                alt=""
              />
              <span className="pl-3">Queries</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/requirements")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/criteria-icon/criteria-icon-6.jpg"
                alt=""
              />
              <span className="pl-3">Requirements</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/portfolio")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/portfolio-icon/portfolio-icon-3.jpg"
                alt=""
              />
              <span className="pl-3">Portfolio-Submission</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/application")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/web-application-icon/web-application-icon-13.jpg"
                alt=""
              />
              <span className="pl-3">Application</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/interview-tasks")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://icon-library.com/images/interview-icon-png/interview-icon-png-5.jpg"
                alt=""
              />
              <span className="pl-3">Interview-Tasks</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/leave-application")}>
            <p className="listname overflow-hidden">
              <img
                className="icon"
                src="https://play-lh.googleusercontent.com/IsZXVDI016W3wktweOtcz7iy9KLGWcO2iLr1F3lkJj8hWHR9vfYSn3KFc5suCF4Ohhk"
                alt=""
              />
              <span className="pl-3">Leave-application</span>
            </p>
          </div>
          <div onClick={() => navigate("/mentordashboard/mock-interview")}>
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
  );
}

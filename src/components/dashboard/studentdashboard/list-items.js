import { useState } from "react";
import { Charts, Content, Task } from "./class-content";
import { Studentdashboard } from "./studen-dashboard";
import { API } from "../../../source";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";

const data = [
  {
    id: 1,
    heading: "Class 1 -Heading: HTML ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/html/",
    task: "Create webpage using Forms-HTML",
  },
  {
    id: 2,
    heading: "Class 2 -Heading: CSS ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/css/",
    task: "Style Forms webpage using CSS",
  },
  {
    id: 3,
    heading: "Class 3 -Heading: Javascript ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/js/",
    task: "Implement toggle function and create responsive webpage",
  },
  {
    id: 4,
    heading: "Class 4 -Heading: React ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/react/",
    task: "Create webpage using React components and Render using routes",
  },
  {
    id: 5,
    heading: "Class 5 -Heading: Node js ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/nodejs/",
    task: "Create Server API using node and express-js",
  },
  {
    id: 6,
    heading: "Class 6 -Heading: MongoDB ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/mongodb/",
    task: "Create connection to mongo db and server",
  },
];

export function Userdata() {
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState(false);

  const Createstl = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
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

  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h3 className="align-items-center text-capitalize">
        {userData.firstname} {userData.lastname}
        <span>
          <IconButton
            sx={{ position: "relative" }}
            onClick={() => setShow(!show)}
          >
            <AccountCircleIcon sx={{ fontSize: "40px" }} />
          </IconButton>
          <div className=" position-absolute profile-logo" style={Createstl}>
            <span
              onClick={() => navigate("/studentdashboard/profile")}
              className="d-block mb-1"
            >
              Profile
            </span>
            <span onClick={logout}>Logout</span>
          </div>
        </span>
      </h3>
    </div>
  );
}

export function Classes() {
  const [active, setActive] = useState("class1");
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

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Class</h1>
            <Userdata />
          </div>
          <div className="d-flex">
            <div className="classes-left m-2 rounded">
              {active === "class1" && <Content data={data[0]} />}
              {active === "class2" && <Content data={data[1]} />}
              {active === "class3" && <Content data={data[2]} />}
              {active === "class4" && <Content data={data[3]} />}
              {active === "class5" && <Content data={data[4]} />}
              {active === "class6" && <Content data={data[5]} />}
            </div>
            <div className="classes-right m-2 rounded">
              <div>
                <h4 className="bg-light text-dark rounded p-3 m-3">
                  Session Road Map
                </h4>
                <div className="pl-3">
                  <button
                    onClick={() => setActive("class1")}
                    className="session-button"
                  >
                    1
                  </button>
                  <button
                    onClick={() => setActive("class2")}
                    className="session-button"
                  >
                    2
                  </button>
                  <button
                    onClick={() => setActive("class3")}
                    className="session-button"
                  >
                    3
                  </button>
                  <button
                    onClick={() => setActive("class4")}
                    className="session-button"
                  >
                    4
                  </button>
                  <button
                    onClick={() => setActive("class5")}
                    className="session-button"
                  >
                    5
                  </button>
                  <button
                    onClick={() => setActive("class6")}
                    className="session-button"
                  >
                    6
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {active === "class1" && <Task userData={userData} data={data[0]} />}
            {active === "class2" && <Task userData={userData} data={data[1]} />}
            {active === "class3" && <Task userData={userData} data={data[2]} />}
            {active === "class4" && <Task userData={userData} data={data[3]} />}
            {active === "class5" && <Task userData={userData} data={data[4]} />}
            {active === "class6" && <Task userData={userData} data={data[5]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Dashboard() {
  const { email } = useParams();
  const [task, setTask] = useState([]);
  const [details, setDetails] = useState([]);
  const [capstone, setCapstone] = useState([]);
  const [web, setWeb] = useState([]);
  const [cap, setCap] = useState([]);

  const getWeb = () => {
    fetch(`${API}/user/webcode/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch));
  };

  useEffect(() => getWeb(), []);

  const getCap = () => {
    fetch(`${API}/user/capstone/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setCapstone(tch));
  };

  useEffect(() => getCap(), []);

  const getDetails = () => {
    fetch(`${API}/user/tasks/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setTask(tch));
  };

  useEffect(() => getDetails(), []);

  const getWebcode = () => {
    fetch(`${API}/admin/webcode`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setWeb(tch));
  };

  useEffect(() => getWebcode(), []);

  const getCapstone = () => {
    fetch(`${API}/admin/capstone`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setCap(tch));
  };

  useEffect(() => getCapstone(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Dashboard</h1>
            <Userdata />
          </div>
          <div>
            <Charts
              tasks={task.length}
              webcode={details.length}
              capstone={capstone.length}
              datas={data.length}
              web={web.length}
              cap={cap.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tasks() {
  const [task, setTask] = useState([]);
  const { email } = useParams();

  const getDetails = () => {
    fetch(`${API}/user/tasks/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setTask(tch));
  };

  useEffect(() => getDetails(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Tasks</h1>
            <Userdata />
          </div>
          <div className="webcode m-5">
            <h3 className="text-center mb-3">Tasks</h3>
            {task.map((dt) => (
              <div key={dt.id} className="webcode-right p-3 m-4 ">
                <div className="d-flex justify-content-between">
                  <div className="content">
                    <h5>Heading:- {dt.tasks}</h5>
                    <h6>
                      Source Code:{" "}
                      <a className="text-warning" href={dt.tasks}>
                        {dt.link}
                      </a>
                    </h6>
                  </div>
                  <div className="marks">
                    <h6>Marks:-</h6>
                    <h6>{dt.marks}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Queries() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Queries</h1>
            <Userdata />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Webcode() {
  const [details, setDetails] = useState([]);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
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

  const getDetails = () => {
    fetch(`${API}/admin/webcode`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch));
  };

  useEffect(() => getDetails(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Webcode</h1>
            <Userdata />
          </div>

          <div className="d-flex ">
            <div className="webcode m-5">
              <h3 className="text-center mb-3">Webcode Projects</h3>
              {details.map((dt) => (
                <div className="webcode-right p-3 m-1 d-flex justify-content-between align-items-center">
                  <div className="content">
                    <h6>webcode:-{dt.id}</h6>
                    <h5>Title:-{dt.title}</h5>
                  </div>
                  <div className="marks">
                    <h6>Marks:-</h6>
                    <h6>{dt.marks}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(
                          `/studentdashboard/webcode/${dt.id}/${userData.email}`
                        )
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Capstone() {
  const [details, setDetails] = useState([]);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
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

  const getDetails = () => {
    fetch(`${API}/admin/capstone`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch));
  };

  useEffect(() => getDetails(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Capstone</h1>
            <Userdata />
          </div>

          <div className="d-flex ">
            <div className="webcode m-5">
              <h3 className="text-center mb-3">Capstone Projects</h3>
              {details.map((dt) => (
                <div className="webcode-right p-3 m-1 d-flex justify-content-between  align-items-center">
                  <div className="content">
                    <h6>Capstone:-{dt.id}</h6>
                    <h5>Title:-{dt.title}</h5>
                  </div>
                  <div>
                    <h6>Marks:-</h6>
                    <h6>{dt.marks}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(
                          `/studentdashboard/capstone/${dt.id}/${userData.email}`
                        )
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Requirements() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Requirements</h1>
            <Userdata />
          </div>
          <div>
            <h3 className="text-center mt-5">No Requirements Assigned</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Application() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Application</h1>
            <Userdata />
          </div>
          <div>
            <h3 className="text-center mt-5">No Application Assigned</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeaveApplication() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Leave Application</h1>
            <Userdata />
          </div>
          <div>
            <h3 className="text-center mt-5">No Leave application created</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [git, setGit] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState("");
  const [details, setDetails] = useState([]);
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

  const email = userData.email;

  async function createPort(event) {
    event.preventDefault();
    const response = await fetch(`${API}/user/portfolio`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git: git,
        portfolio: portfolio,
        resume: resume,
        email: email,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      window.location.reload();
    }
  }

  const getDetails = () => {
    fetch(`${API}/user/portfolio`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch[0]));
  };

  useEffect(() => getDetails(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Portfolio</h1>
            <Userdata />
          </div>
          <div className="d-flex justigy-content-around align-items-center">
            <div className="  portfolio">
              <h3 className="m-3 p-2">Create webcode project for students</h3>
              <form onSubmit={createPort}>
                <label for="id">Enter Git URL</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="Git url"
                  id="id"
                  onChange={(event) => setGit(event.target.value)}
                  value={git}
                />
                <br />
                <label for="id">Enter Portfolio Link</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="Portfolio"
                  id="title"
                  onChange={(event) => setPortfolio(event.target.value)}
                  value={portfolio}
                />
                <br />
                <label for="id">Enter Resume link</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="Resume Link"
                  id="marks"
                  value={resume}
                  onChange={(event) => setResume(event.target.value)}
                />
                <br />
                <button className="taskbutton" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-center ">Portfolio submitted</h3>

              <div className="webcode-right p-3 m-1 ml-3 d-flex justify-content-between  align-items-center">
                <div className="content">
                  <h6>Git:-{details.git}</h6>
                  <h6>Portfolio:-{details.portfolio}</h6>
                  <h6>Resume:-{details.resume}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InterviewTask() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>InterviewTask</h1>
            <Userdata />
          </div>
          <div>
            <h3 className="text-center mt-5">No Interview task Assigned</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockInterview() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>MockInterview</h1>
            <Userdata />
          </div>
          <div>
            <h3 className="text-center mt-5">No MockInterview Assigned</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

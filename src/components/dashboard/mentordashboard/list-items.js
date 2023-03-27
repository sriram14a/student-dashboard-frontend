import { useState } from "react";
import { Content } from "./class-content";
import { Mentordashboard } from "./mentor-dashboard";
import { API } from "../../../source";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const data = [
  {
    heading: "Class 1 -Heading: HTML ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/html/",
    task: "Create webpage using Forms-HTML",
  },
  {
    heading: "Class 2 -Heading: CSS ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/css/",
    task: "Style Forms webpage using CSS",
  },
  {
    heading: "Class 3 -Heading: Javascript ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/js/",
    task: "Implement toggle function and create responsive webpage",
  },
  {
    heading: "Class 4 -Heading: React ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/react/",
    task: "Create webpage using React components and Render using routes",
  },
  {
    heading: "Class 5 -Heading: Node js ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/nodejs/",
    task: "Create Server API using node and express-js",
  },
  {
    heading: "Class 6 -Heading: MongoDB ",
    d1: "-Introduction",
    d2: "-Practical",
    d3: "-Practice",
    heading1: "Pre-Read",
    link: "https://www.w3schools.com/mongodb/",
    task: "Create connection to mongo db and server",
  },
];

export function Userdata1() {
  const [userData, setUserData] = useState("");
  const [show, setShow] = useState(false);

  const Createstl = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${API}/admin/userdata`, {
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
              onClick={() => navigate("/mentordashboard/profile")}
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

export function Classes1() {
  const [active, setActive] = useState("class1");
  

  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Class</h1>
            <Userdata1 />
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
        </div>
      </div>
    </div>
  );
}

export function Dashboard1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Dashboard</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Tasks1() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const getDetails = () => {
    fetch(`${API}/user`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setStudents(tch));
  };

  useEffect(() => getDetails(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Tasks</h1>
            <Userdata1 />
          </div>
          <div>
            <div>
              <h3 className="p-2 m-2">Students-Task details</h3>
            </div>
            {students.map((st) => (
              <div className="webcode-right p-3 m-1  ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>
                      Student Name:- {st.firstname} {st.lastname}
                    </h5>
                    <h6>{st.email}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(`/mentordashboard/task/${st.email}`)
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
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

export function Queries1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Queries</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Webcode1() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState("");
  const [details, setDetails] = useState([]);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const getStudents = () => {
    fetch(`${API}/user`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setStudents(tch));
  };

  useEffect(() => getStudents(), []);

  async function createWebcode(event) {
    event.preventDefault();
    const response = await fetch(`${API}/admin/webcode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        title: title,
        marks: marks,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.message === "choose differnt id") {
      alert("Id taken try unique id");
    }
    if (data.status === "ok") {
      window.location.reload();
    }
  }

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
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Webcode</h1>
            <Userdata1 />
          </div>
          <div className="d-flex">
            <div className="webcode">
              <h3 className="m-3 p-2">Create webcode project for students</h3>
              <form onSubmit={createWebcode}>
                <label for="id">Enter webcode id</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="webcode-id"
                  id="id"
                  onChange={(event) => setId(event.target.value)}
                />
                <br />
                <label for="id">Enter Title</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <label for="id">Enter marks</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="yet to be graded"
                  id="marks"
                  onChange={(event) => setMarks(event.target.value)}
                />
                <br />
                <button className="taskbutton" type="submit">
                  Create webcode
                </button>
              </form>
            </div>
            <div className="webcode m-2">
              <h3 className="text-center mb-3">Webcode Projects Created</h3>
              {details.map((dt) => (
                <div className="webcode-right p-3 m-1 d-flex justify-content-between">
                  <div>
                    <h6>webcode:-{dt.id}</h6>
                    <h5>Title:-{dt.title}</h5>
                  </div>
                  <div>
                    <h6>Marks:-{dt.marks}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3 className="p-2 m-2">Students-webcode details</h3>
            </div>
            {students.map((st) => (
              <div className="webcode-right p-3 m-1  ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>
                      Student Name:- {st.firstname} {st.lastname}
                    </h5>
                    <h6>{st.email}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(`/mentordashboard/web/${st.email}`)
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
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

export function Capstone1() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [marks, setMarks] = useState("");
  const [details, setDetails] = useState([]);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const getStudents = () => {
    fetch(`${API}/user`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setStudents(tch));
  };

  useEffect(() => getStudents(), []);

  async function createCapstone(event) {
    event.preventDefault();
    const response = await fetch(`${API}/admin/capstone`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        title: title,
        marks: marks,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.message === "choose differnt id") {
      alert("Id taken try unique id");
    }
    if (data.status === "ok") {
      window.location.reload();
    }
  }

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
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Capstone</h1>
            <Userdata1 />
          </div>
          <div className="d-flex">
            <div className="webcode">
              <h3 className="m-3 p-2">Create Capstone project for students</h3>
              <form onSubmit={createCapstone}>
                <label for="id">Enter capstone id</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="capstone-id"
                  id="id"
                  onChange={(event) => setId(event.target.value)}
                />
                <br />
                <label for="id">Enter Title</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="Title"
                  id="title"
                  onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <label for="id">Enter marks</label>
                <br />
                <input
                  required
                  className="webcodeinput"
                  type="text"
                  placeholder="yet to be graded"
                  id="marks"
                  onChange={(event) => setMarks(event.target.value)}
                />
                <br />
                <button className="taskbutton" type="submit">
                  Create Capstone
                </button>
              </form>
            </div>
            <div className="webcode m-2">
              <h3 className="text-center mb-3">Capstone Projects Created</h3>
              {details.map((dt) => (
                <div className="webcode-right p-3 m-1 d-flex justify-content-between">
                  <div>
                    <h6>Capstone:-{dt.id}</h6>
                    <h5>Title:-{dt.title}</h5>
                  </div>
                  <div>
                    <h6>Marks:-{dt.marks}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3 className="p-2 m-2">Students-capstone details</h3>
            </div>
            {students.map((st) => (
              <div className="webcode-right p-3 m-1  ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>
                      Student Name:- {st.firstname} {st.lastname}
                    </h5>
                    <h6>{st.email}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(`/mentordashboard/capstone/${st.email}`)
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
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

export function Requirements1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Requirements</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Application1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Application</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeaveApplication1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Leave Application</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Portfolio1() {
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  const getStudents = () => {
    fetch(`${API}/user`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setStudents(tch));
  };

  useEffect(() => getStudents(), []);
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Portfolio</h1>
            <Userdata1 />
          </div>
          <div>
            {students.map((st) => (
              <div className="webcode-right p-3 m-1  ">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>
                      Student Name:- {st.firstname} {st.lastname}
                    </h5>
                    <h6>{st.email}</h6>
                  </div>
                  <div>
                    <IconButton
                      onClick={() =>
                        navigate(`/mentordashboard/port/${st.email}`)
                      }
                      sx={{ backgroundColor: "white" }}
                    >
                      <KeyboardArrowRightIcon />
                    </IconButton>
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

export function InterviewTask1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Interview Task</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockInterview1() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Mock Interview</h1>
            <Userdata1 />
          </div>
        </div>
      </div>
    </div>
  );
}

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../source";
import { Studentdashboard } from "./studen-dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dashboard, Userdata } from "./list-items";
import { Pie, PieChart, Tooltip } from "recharts";

export function Content({ data }) {
  return (
    <div>
      <div>
        <h4 className="bg-light text-dark rounded p-3 m-3">
          Join the class on Time
        </h4>
        <div className="p-4">
          <h3 className="border-bottom border-light p-2">{data.heading} </h3>
          <p className="p-2">{data.d1}</p>
          <p className="p-2">{data.d2}</p>
          <p className="p-2">{data.d3}</p>
          <h3 className="border-bottom border-light p-2">{data.heading1}</h3>
          <h6 className="p-2">{data.link}</h6>
        </div>
      </div>
    </div>
  );
}

export function Task({ data, userData }) {
  const [show, setShow] = useState(false);
  const [tasks, setTask] = useState("");

  const navigate = useNavigate();
  const data1 = userData;
  const id = data.id + data1.email;
  const email = data1.email;
  const data2 = data.task;
  const marks = "Yet to be graded";

  const createstyle = {
    display: show ? "block" : "none",
  };
  const handlesubmit = (event) => {
    fetch(`${API}/user/tasks`, {
      method: "POST",
      body: JSON.stringify({
        tasks: data2,
        link: tasks,
        marks: marks,
        id: id,
        email: email,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate(`/studentdashboard/tasks/${data1.email}`));
    event.preventDefault();
  };

  return (
    <div className="p-2 task">
      <h4 className="border-bottom border-light d-flex justify-content-between align-items-center">
        <div>Task:- {data.task}</div>
        <div>
          <IconButton onClick={() => setShow(!show)}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
      </h4>
      <div style={createstyle}>
        <form onSubmit={handlesubmit}>
          <label for="git">Submit Your Front-end source code</label>
          <input
            className="taskinput"
            type="text"
            name="task"
            id="git"
            placeholder="Enter git URL"
            required
            onChange={(event) => setTask(event.target.value)}
          />
          <br />
          <button className="taskbutton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export function Profile() {
  const [userData, setUserData] = useState([]);

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
            <h1>Profile</h1>
            <Userdata />
          </div>
          <h1 className="p-3 m-3 text-center text-capitalize">
            {userData.firstname} {userData.lastname}
            <IconButton>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
            </IconButton>
          </h1>
          <h5 className="text-center">{userData.email}</h5>
        </div>
        
      </div>
    </div>
  );
}

export function Web() {
  const [sourcecode, setSourcecode] = useState("");
  const [deploy, setDeploy] = useState("");
  const [details, setDetails] = useState("");
  const [webcode, setWebcode] = useState([]);

  const { email, id } = useParams();
  const unique = id + email;
  const title = details.title;

  const getDetails = () => {
    fetch(`${API}/admin/webcode/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch));
  };

  useEffect(() => getDetails(), []);

  const marks = "Yet to be graded";

  const handlesubmit = (event) => {
    fetch(`${API}/user/webcode`, {
      method: "POST",
      body: JSON.stringify({
        sourcecode: sourcecode,
        deploy: deploy,
        marks: marks,
        id: unique,
        email: email,
        title: title,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => getWeb());
    event.preventDefault();
  };

  const getWeb = () => {
    fetch(`${API}/user/webcode/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setWebcode(tch));
  };

  useEffect(() => getWeb(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>

        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Webcode submitted</h1>
            <Userdata />
          </div>

          <div className="d-flex justify-content-around align-items-center">
            <div className="webcode-right p-3 m-1 ">
              <div>
                <h6>webcode:-{details.id}</h6>
                <h5>Title:-{details.title}</h5>
              </div>
            </div>
            <div>
              <div className="mt-3">
                <form onSubmit={handlesubmit}>
                  <h3 className="m-3 text-center mb-3">{details.title}</h3>
                  <label for="git">Submit Your Front-end source code</label>
                  <input
                    className="taskinput"
                    type="text"
                    name="task"
                    id="git"
                    placeholder="Enter git URL"
                    required
                    onChange={(event) => setSourcecode(event.target.value)}
                  />
                  <br />
                  <label for="git">Submit Your Front-end deploy Url</label>
                  <input
                    className="taskinput"
                    type="text"
                    name="task"
                    id="git"
                    placeholder="Enter deploy URL"
                    required
                    onChange={(event) => setDeploy(event.target.value)}
                  />
                  <br />
                  <button className="taskbutton" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center bg-success p-2 rounded text-light">
              webcode submitted
            </h3>
            <div>
              {webcode.map((wb) => (
                <div className="webcode-right p-3 ml-5 mr-5 mb-2 d-flex justify-content-between ">
                  <div>
                    <h6>webcode:-{wb.title}</h6>
                    <h5>
                      source code:-
                      <a className="text-warning" href={wb.sourcecode}>
                        {wb.sourcecode}
                      </a>
                    </h5>
                    <h5>
                      deploy:-
                      <a className="text-warning" href={wb.deploy}>
                        {wb.deploy}
                      </a>
                    </h5>
                  </div>
                  <div className="marks">
                    <h6>Marks:-</h6>
                    <h6>{wb.marks}</h6>
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

export function Cap1() {
  const [sourcecode, setSourcecode] = useState("");
  const [deploy, setDeploy] = useState("");
  const [details, setDetails] = useState("");
  const [capstone, setCapstone] = useState([]);

  const { email, id } = useParams();
  const unique = id + email;
  const title = details.title;

  const getDetails = () => {
    fetch(`${API}/admin/capstone/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setDetails(tch));
  };

  useEffect(() => getDetails(), []);

  const marks = "Yet to be graded";

  const handlesubmit = (event) => {
    fetch(`${API}/user/capstone`, {
      method: "POST",
      body: JSON.stringify({
        sourcecode: sourcecode,
        deploy: deploy,
        marks: marks,
        id: unique,
        email: email,
        title: title,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() =>getWeb());
    event.preventDefault();
  };

  const getWeb = () => {
    fetch(`${API}/user/capstone/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setCapstone(tch));
  };

  useEffect(() => getWeb(), []);

  return (
    <div>
      <div className="d-flex">
        <div>
          <Studentdashboard />
        </div>

        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Capstone submitted</h1>
            <Userdata />
          </div>

          <div className="d-flex justify-content-around align-items-center">
            <div className="webcode-right p-3 m-1 ">
              <div>
                <h6>Capstone:-{details.id}</h6>
                <h5>Title:-{details.title}</h5>
              </div>
            </div>
            <div>
              <div className="mt-3">
                <form onSubmit={handlesubmit}>
                  <h3 className="m-3 text-center mb-3">{details.title}</h3>
                  <label for="git">Submit Your Front-end source code</label>
                  <input
                    className="taskinput"
                    type="text"
                    name="task"
                    id="git"
                    placeholder="Enter git URL"
                    required
                    onChange={(event) => setSourcecode(event.target.value)}
                  />
                  <br />
                  <label for="git">Submit Your Front-end deploy Url</label>
                  <input
                    className="taskinput"
                    type="text"
                    name="task"
                    id="git"
                    placeholder="Enter deploy URL"
                    required
                    onChange={(event) => setDeploy(event.target.value)}
                  />
                  <br />
                  <button className="taskbutton" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-center bg-success p-2 rounded text-light">
              Capstone submitted
            </h3>
            <div>
              {capstone.map((wb) => (
                <div className="webcode-right p-3 ml-5 mr-5 mb-2 d-flex justify-content-between ">
                  <div>
                    <h6>Capstone:-{wb.title}</h6>
                    <h5>
                      source code:-
                      <a className="text-warning" href={wb.sourcecode}>
                        {wb.sourcecode}
                      </a>
                    </h5>
                    <h5>
                      deploy:-
                      <a className="text-warning" href={wb.deploy}>
                        {wb.deploy}
                      </a>
                    </h5>
                  </div>
                  <div className="marks">
                    <h6>Marks:-</h6>
                    <h6>{wb.marks}</h6>
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

export function Charts({ tasks, webcode, capstone, datas, web, cap }) {
  const data = [
    {
      name: "Task completed",
      value: tasks,
    },
    {
      name: "Total tasks",
      value: datas,
    },
  ];

  const data1 = [
    {
      name: "Webcode completed",
      value: webcode,
    },
    {
      name: "Total webcode",
      value: web,
    },
  ];
  const data2 = [
    {
      name: "Capstone completed",
      value: capstone,
    },
    {
      name: "Total Capstone",
      value: cap,
    },
  ];
  return (
    <div>
      <div className="d-flex justify-content-around align-items-center">
        <div className="text-center">
          <div>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#01FF70"
                label
              />
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#4b0dba"
                label
              />
              <Tooltip />
            </PieChart>
          </div>

          <div>
            <h6>Total Tasks: {datas}</h6>
            <h6>Tasks completed: {tasks}</h6>
          </div>
        </div>

        <div className="text-center">
          <div>
            <PieChart width={300} height={300}>
              <Pie
                data={data1}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#B10DC9"
                label
              />
              <Pie
                data={data1}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#4b0dba"
                label
              />
              <Tooltip />
            </PieChart>
          </div>

          <div>
            <h6>Total webcode: {web}</h6>
            <h6>webcode completed: {webcode}</h6>
          </div>
        </div>

        <div className="text-center">
          <div>
            <PieChart width={300} height={300}>
              <Pie
                data={data2}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
                fill="#FF851B"
                label
              />
              <Pie
                data={data2}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#4b0dba"
                label
              />
              <Tooltip />
            </PieChart>
          </div>

          <div>
            <h6>Total Capstone: {cap}</h6>
            <h6>Capstone completed: {capstone}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

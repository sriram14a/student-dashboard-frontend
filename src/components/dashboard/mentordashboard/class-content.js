import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { API } from "../../../source";
import { Mentordashboard } from "./mentor-dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Userdata1 } from "./list-items";

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

export function Task1() {
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
          <Mentordashboard />
        </div>
        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Tasks</h1>
            <Userdata1 />
          </div>

          {task.map((dt) => (
            <div className="d-flex justify-content-around align-items-center">
              <div key={dt.id} className=" col-8 webcode-right p-3 m-4 ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="content">
                    <h5>Heading:- {dt.tasks}</h5>
                    <h6>
                      Source Code:{" "}
                      <a
                        className="text-warning"
                        target="_blank"
                        href={dt.tasks}
                      >
                        {dt.link}
                      </a>
                    </h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="marks">
                      <h6>Marks:-</h6>
                      <h6>{dt.marks}</h6>
                    </div>
                    <div className="marks-btn">
                      <EditTasks task={dt} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Web1() {
  const [webcode, setWebcode] = useState([]);

  const { email } = useParams();

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
      <div>
        <div className="d-flex">
          <div>
            <Mentordashboard />
          </div>
          <div className="item-width">
            <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
              <h1>Webcode submitted</h1>
              <Userdata1 />
            </div>
            <div className=" mt-2">
              {webcode.map((wb) => (
                <div className="d-flex  justify-content-around align-items-center">
                  <div className="webcode-right p-3 mb-2 d-flex justify-content-between ">
                    <div className="content">
                      <h6>webcode:-{wb.title}</h6>
                      <h6>
                        source code:-{" "}
                        <a className="text-warning" href={wb.sourcecode}>
                          {wb.sourcecode}
                        </a>
                      </h6>
                      <h6>
                        deploy url:-{" "}
                        <a className="text-warning" href={wb.deploy}>
                          {wb.deploy}
                        </a>
                      </h6>
                    </div>
                    <div className="marks ">
                      <h6>Marks:-</h6>
                      <h6>{wb.marks}</h6>
                    </div>
                    <div className="marks-btn">
                      <EditWeb webcode={wb} />
                    </div>
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

export function Cap() {
  const [capstone, setCapstone] = useState([]);

  const { email } = useParams();

  const getCap = () => {
    fetch(`${API}/user/capstone/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setCapstone(tch));
  };

  useEffect(() => getCap(), []);

  return (
    <div>
      <div>
        <div className="d-flex">
          <div>
            <Mentordashboard />
          </div>
          <div className="item-width">
            <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
              <h1>Capstone submitted</h1>
              <Userdata1 />
            </div>
            <div className=" mt-2">
              {capstone.map((cp) => (
                <div className="d-flex  justify-content-around align-items-center">
                  <div className="webcode-right p-3 mb-2 d-flex justify-content-between ">
                    <div className="content">
                      <h6>capstone:-{cp.title}</h6>
                      <h6>
                        source code:-{" "}
                        <a className="text-warning" href={cp.sourcecode}>
                          {cp.sourcecode}
                        </a>
                      </h6>
                      <h6>
                        deploy url:-{" "}
                        <a className="text-warning" href={cp.deploy}>
                          {cp.deploy}
                        </a>
                      </h6>
                    </div>
                    <div className="marks ">
                      <h6>Marks:-</h6>
                      <h6>{cp.marks}</h6>
                    </div>
                    <div className="marks-btn">
                      <EditCap capstone={cp} />
                    </div>
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

export function Profile1() {
  const [userData, setUserData] = useState("");

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

  return (
    <div>
      <div className="d-flex">
        <div>
          <Mentordashboard />
        </div>

        <div className="item-width">
          <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
            <h1>Profile</h1>
            <Userdata1 />
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

function EditTasks({ task }) {
  const [marks, setMarks] = useState(task.marks);

  return (
    <div className="align-items-center">
      <form>
        <div>
          <div>
            <input
              required
              className="markinput"
              type="text"
              placeholder="marks"
              id="marks"
              onChange={(event) => setMarks(event.target.value)}
              value={marks}
            />
            <br />
          </div>
          <div>
            <button
              className="markbutton bg-success text-light"
              type="submit"
              onClick={() => {
                const updatedTask = {
                  marks: marks,
                };

                fetch(`${API}/admin/${task.id}`, {
                  method: "PUT",
                  body: JSON.stringify(updatedTask),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((data) => data.json())
                  .then(() => window.location.reload());
              }}
            >
              Provide marks
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function EditWeb({ webcode }) {
  const [marks, setMarks] = useState(webcode.marks);

  return (
    <div className="align-items-center">
      <form>
        <div>
          <div>
            <input
              required
              className="markinput"
              type="text"
              placeholder="marks"
              id="marks"
              onChange={(event) => setMarks(event.target.value)}
              value={marks}
            />
            <br />
          </div>
          <div>
            <button
              className="markbutton bg-success text-light"
              type="submit"
              onClick={() => {
                const updatedweb = {
                  marks: marks,
                };

                fetch(`${API}/admin/webcode/${webcode.id}`, {
                  method: "PUT",
                  body: JSON.stringify(updatedweb),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((data) => data.json())
                  .then(() => window.location.reload());
              }}
            >
              Provide marks
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function EditCap({ capstone }) {
  const [marks, setMarks] = useState(capstone.marks);

  return (
    <div className="align-items-center">
      <form>
        <div>
          <div>
            <input
              required
              className="markinput"
              type="text"
              placeholder="marks"
              id="marks"
              onChange={(event) => setMarks(event.target.value)}
              value={marks}
            />
            <br />
          </div>
          <div>
            <button
              className="markbutton bg-success text-light"
              type="submit"
              onClick={() => {
                const updatedcap = {
                  marks: marks,
                };

                fetch(`${API}/admin/capstone/${capstone.id}`, {
                  method: "PUT",
                  body: JSON.stringify(updatedcap),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((data) => data.json())
                  .then(() => window.location.reload());
              }}
            >
              Provide marks
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function Port() {
  const [portfolio, setPortfolio] = useState([]);

  const { email } = useParams();

  const getWeb = () => {
    fetch(`${API}/user/portfolio/${email}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((tch) => setPortfolio(tch));
  };

  useEffect(() => getWeb(), []);

  return (
    <div>
      <div>
        <div className="d-flex">
          <div>
            <Mentordashboard />
          </div>
          <div className="item-width">
            <div className="d-flex  p-3 pl-5 border-bottom border-secondary justify-content-between align-items-center">
              <h1>Webcode submitted</h1>
              <Userdata1 />
            </div>
            <div className=" mt-2">
              <div className="webcode-right p-3 m-1 ml-3 d-flex justify-content-between  align-items-center">
                <div className="content">
                  <h6>
                    Git:-{" "}
                    <a className="text-warning" href={portfolio.git}>
                      {portfolio.git}
                    </a>{" "}
                  </h6>
                  <h6>
                    Portfolio:-
                    <a className="text-warning" href={portfolio.portfolio}>
                      {portfolio.portfolio}
                    </a>
                  </h6>
                  <h6>
                    Resume:-
                    <a className="text-warning" href={portfolio.resume}>
                      {portfolio.resume}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

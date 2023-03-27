import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../../source";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch(`${API}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.message === "Successfully login") {
      localStorage.setItem("token", data.email);
      window.localStorage.setItem("token", data.data);
      navigate("/studentdashboard/classes");
    } else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div className="body">
      <div className="d-flex flex-wrap">
        <div className="login-left col-md-8">
          <div>
            <img
              className="zen-logo"
              src="https://www.pngkit.com/png/detail/359-3598370_logos-google-code-icon-windows-8-iconset-icons8.png"
              alt="img"
            />
          </div>
          <form className="form-size " onSubmit={loginUser}>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                required
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                required
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" class="btn-color">
              Login
            </button>
            <div className="text-center mt-3">
              <p
                className=" text-decoration-none hover"
                onClick={() => navigate("/forgotpassword")}
              >
                Forget Pasword?
              </p>
            </div>
          </form>
        </div>
        <div className="login-right col-md-4">
          <img
            className="ml-5 pl-5 login-image"
            src="https://www.zenclass.in/static/media/login_img.cbed4040.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

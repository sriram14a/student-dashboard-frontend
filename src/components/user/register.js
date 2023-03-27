import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../../source";

export function Register() {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch(`${API}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.message === "Username Already Exists") {
      alert("User already exist try Another mail id");
    }

    if (data.message === "Password strength") {
      alert(
        "Password must have 1 caps 1 small letter , number, special charecter and should be min 8 characters"
      );
    }

    if (data.status === "ok") {
      alert("Successfully Registered");
      navigate("/login");
    }
  }

  return (
    <div className="body">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <img
          className="zen-logo "
          src="https://www.pngkit.com/png/detail/359-3598370_logos-google-code-icon-windows-8-iconset-icons8.png"
          alt="img"
        />
      <h3 className="register-heading">Register your Student Account</h3>
        
      </div>
      <div className="d-flex justify-content-around">
        <div className="left-register ">
          <img
            className="register-image"
            src="https://ehub.iesmaster.org/assets/images/student-login-2.svg"
            alt="img"
          />
        </div>
        <div className="right-register">
          <form onSubmit={registerUser}>
            <div class="form-group">
              <label for="firstname">First Name</label>
              <input
                className="input-width"
                required
                type="text"
                class="form-control"
                id="firstname"
                placeholder="Enter first name"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="lastname">Last Name</label>
              <input
                required
                type="text"
                class="form-control"
                id="lastname"
                placeholder="Enter last name"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
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
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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
              Register
            </button>
          </form>

          <div className="mt-4">
            <span>Already have an account?</span>
            <p
              className="d-inline-block pl-3 text-decoration-none hover"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

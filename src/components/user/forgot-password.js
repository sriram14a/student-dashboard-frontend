import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { API } from "../../source";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function handlePassword(event) {
    event.preventDefault();

    const response = await fetch(`${API}/user/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "User Not Exists") {
      alert("User does Not Exists");
    }
    if (data.status === "verified") {
      navigate("/login");
    }
    if (data.status === "ok") {
      alert("password reset LINK sent to your Mail check your Inbox");
    }
  }
  return (
    <div className="body">
      <div className="d-flex ">
        <div className="login-left col-md-8">
          <div>
            <img
              className="zen-logo"
              src="https://www.pngkit.com/png/detail/359-3598370_logos-google-code-icon-windows-8-iconset-icons8.png"
              alt="img"
            />
          </div>
          <form className="form-size " onSubmit={handlePassword}>
            <div class="form-group">
              <label for="email">Enter Registered Email </label>
              <input
                required
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Eg:John@abc.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <button type="submit" class="btn-color">
              submit
            </button>
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

import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import accountService from "../../_services/account.service";


interface Props {}

export const LoginMenu: React.FC<Props> = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = React.useState("");

  let navigate = useNavigate();

  const [credentials, setCredentials] = React.useState({
    email: "test@test.com",
    password: "azertyuiop",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setCredentials({
      ...credentials,
      [event.currentTarget.name]: value,
    });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    accountService
      .login(credentials)
      .then((res) => {
        console.log(res);
        accountService.saveToken(res.data.access_token);
        //setUser({
        //   id: res.data.id,
        //   username: res.data.username,
        //   email: res.data.email,
        // });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
  <div>
     {error !== "" && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span> {error} </span>
                </div>
              </div>
      )}
      <form onSubmit={onSubmit}>
        <div className="w-full md:mt-0 sm:max-w-md xl:p-0 flex flex-col items-center">
          <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Connexion
            </h1>

            <div className="block mb-2 text-sm">
              <label htmlFor="email">Email </label>
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="block mb-2 text-sm">
              <label htmlFor="password">Mot de passe </label>
              <input
                type="text"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="grblock mb-2 text-sm ">
              <button className="bg-gradient-to-b from-yellow-500 to-amber-200 p-2">Se connecter</button>
            </div>
          </div>
        </div>
    </form>

  </div>
  )};

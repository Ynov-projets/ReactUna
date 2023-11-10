import React from "react";
import { useNavigate } from "react-router-dom";
import accountService from "../../_services/account.service";
import { Link } from "react-router-dom";
import { Menu } from "./Menu";

export default function RegistrationMenu() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setCredentials({
      ...credentials,
      [event.currentTarget.name]: value,
    });
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (credentials.password !== credentials.passwordConfirm) {
      setError("Les mots de passe ne correspondent pas");
      console.log(error);
      return;
    }

    accountService
      .register({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
    return (
      <Menu children={ 
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
        <div className="w-full">
          <div className="w-full p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="font-font italic bold uppercase text-orange text-center text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Connexion
            </h1>

            <div className="block mb-2 text-sm">
              <label className="pl-1 font-font" htmlFor="email">Email </label>
              <br></br>
              <input className="font-font placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                type="text"
                placeholder="Identifiant..."
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="block mb-2 text-sm">
              <label className="pl-1 font-font" htmlFor="password">Mot de passe </label>
              <br></br>
              <input className="font-font placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                type="text"
                placeholder="Mot de passe..."
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
            </div>
            <div className="grblock mb-2 text-sm text-center">
              <button
                className="font-font w-[200px] h-[50px] bg-orange text-xl m-5 cursor-pointer text-white rounded-3xl hover:bg-gradient-to-r"
                >
                Se connecter
              </button>
            </div>
            <div className="grblock mb-2 text-sm text-center">
              <button 
                className="text-orange font-font text-center p-2"
              >
                <Link to={"/registration"}>Je n'ai pas de compte</Link>
              </button>
            </div>
          </div>
        </div>
    </form>
  </div>
      } />
      );
}

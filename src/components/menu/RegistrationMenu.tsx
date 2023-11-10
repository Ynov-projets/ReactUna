import React from "react";
import { Link, useNavigate } from "react-router-dom";
import accountService from "../../_services/account.service";
import { Menu } from "./Menu";

interface props {}

export const RegistrationMenu: React.FC<props> = () => {
    const navigate = useNavigate()

  const [credentials, setCredentials] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });


  const [error, setError] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    setCredentials({
      ...credentials,
      [event.currentTarget.name]: value
    });

  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    if (credentials.password !== credentials.passwordConfirm) {
        setError("Les mots de passe ne correspondent pas");
        console.log(error);
        return;
    }

    accountService.register({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password
    })
    .then(
        res => {
          navigate('/menu/login');
        }
      )
      .catch(err => console.log(err))
  };
  return (
      <Menu children={
        <form onSubmit={onSubmit}>
          <div className="w-full">
              <div className="w-full space-y-6 md:space-y-6">
                <h1 className="font-font italic bold uppercase text-orange text-center text-xl font-bold leading-tight tracking-tight md:text-2xl">
                    S'inscrire
                </h1>
            
                { error !== "" &&
                <div className="alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span> { error }</span>
                    </div>
                </div>
                }
    
                <div className="block mb-2 text-sm">
                  <label className="pl-1 font-font" htmlFor="username">Nom d'utilisateur </label>
                  <br></br>
                  <input className="font-font placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                  type="text" 
                  placeholder="Pseudo..."
                  name="username"  
                  value={credentials.username} 
                  onChange={onChange}/>
                </div>

                <div className="block mb-2 text-sm">
                    <label className="pl-1 font-font" htmlFor="email">Email </label>
                    <br></br>
                    <input className="font-font placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                    type="text" 
                    placeholder="Email..."
                    name="email"  
                    value={credentials.email} onChange={onChange}/>
                </div>

                <div className="block mb-2 text-sm">
                    <label className="pl-1 font-font" htmlFor="password">Mot de passe </label>
                    <br></br>
                    <input className="font-font placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                    type="text" 
                    placeholder="Mot de passe..."
                    name="password" 
                    value={credentials.password} onChange={onChange}/>
                </div>

                <div className="block mb-2 text-sm">
                    <label className="pl-1" htmlFor="passwordConfirm">Confirmer le mot de passe </label>
                    <br></br>
                    <input className="placeholder:italic placeholder:text-slate-400 bg-grey w-full rounded-2xl leading-7 pl-1"
                    type="text" 
                    placeholder="Même mot de passe..."
                    name="passwordConfirm" 
                    value={credentials.passwordConfirm} onChange={onChange}/>
                </div>
                <div className="grblock mb-2 text-sm text-center">
                  <button
                    className="font-font w-[200px] h-[50px] bg-orange text-xl cursor-pointer text-white rounded-3xl hover:bg-gradient-to-r"
                  >
                  S'inscrire
                  </button>
                </div>
                <div className="grblock mb-2 text-sm text-center">
                  <button 
                    className="text-orange font-font text-center p-2"
                  >
                    <Link to={"/login"}>J'ai déjà un compte</Link>
                  </button>
                </div>
              </div>
          </div>
        </form>
      } />
      );
};

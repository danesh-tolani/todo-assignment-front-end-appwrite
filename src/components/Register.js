import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
// * appwrite
import { ID } from "appwrite";
import { account } from "../appwrite/appwriteConfig";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  // Appwrite signup

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(values.name && values.email && values.password)) {
      console.log("Please enter all the fields");
    } else {
      try {
        const promise = account.create(ID.unique(), values.email, values.password, values.name);
        promise.then(
          function (response) {
            console.log(response);
            navigate("/");
          },
          function (error) {
            setError(true);
            setErrorText("User already exists");
            console.log(error);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className=" h-screen flex justify-center item-center pt-24 md:pt-10">
        <div className="glass w-[90%] md:w-[40%] h-[75%] md:h-[95%] rounded-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 items-center pt-5">
            <h1 className="pt-6 font-bold text-4xl">TODO APP</h1>
            <h2 className="text-xl">Name</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.name} name="name" onChange={handleInputChange} />
            <h2 className="text-xl">email</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.email} name="email" onChange={handleInputChange} />
            <h2 className="text-xl">password</h2>
            <input className="rounded-2xl px-4 py-2 border-none input-style w-[80%] text-xl" type="text" value={values.password} name="password" onChange={handleInputChange} />
            <h2>{error && errorText}</h2>
            <button type="submit" className="btn mt-4">
              Submit
            </button>
            <h3>
              If you already have an account, please{" "}
              <span
                className="text-blue-700 cursor-pointer underline"
                onClick={() => {
                  navigate("/");
                }}>
                sign in
              </span>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

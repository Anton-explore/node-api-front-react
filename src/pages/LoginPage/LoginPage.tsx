import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Signup from "../../components/Signup/Signup";
import Login from "../../components/Login/Login";


const LoginPage: React.FC = () => {
    const { type } = useParams<{ type?: string }>();
    const navigate = useNavigate();

    const toggleFormType = () => {
        if (type === "signup") {
            navigate("/auth/login");
        } else {
            navigate("/auth/signup");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {type === "signup" ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <Signup />
                            <p>
                                Already have account?{" "}
                                <a role="button" onClick={toggleFormType}>
                                    {" "}
                                    Sign In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <Login />
                            <p>
                                Dont have account?{" "}
                                <a role="button" onClick={toggleFormType}>
                                    {" "}
                                    Sign Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

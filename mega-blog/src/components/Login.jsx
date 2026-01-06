import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "80vh",
  },

  card: {
    width: "100%",
    maxWidth: "512px", // max-w-lg
    backgroundColor: "#F3F4F6", // gray-100
    borderRadius: "12px",
    padding: "40px",
    border: "1px solid rgba(0,0,0,0.1)",
  },

  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
  },

  logoInner: {
    width: "100%",
    maxWidth: "100px",
  },

  heading: {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.3,
    margin: 0,
  },

  subText: {
    marginTop: "8px",
    textAlign: "center",
    fontSize: "16px",
    color: "rgba(0,0,0,0.6)",
  },

  link: {
    fontWeight: 500,
    color: "#2563EB",
    textDecoration: "none",
    marginLeft: "4px",
  },

  error: {
    marginTop: "32px",
    textAlign: "center",
    color: "#DC2626", // red-600
    fontSize: "14px",
  },

  form: {
    marginTop: "32px",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "20px", // space-y-5
  },

  fullWidthButton: {
    width: "100%",
  },
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logoWrapper}>
          <span style={styles.logoInner}>
            <Logo width="100%" />
          </span>
        </div>

        {/* Heading */}
        <h2 style={styles.heading}>Sign in to your account</h2>

        {/* Sub text */}
        <p style={styles.subText}>
          Don&apos;t have any account?
          <Link to="/signup" style={styles.link}>
            Sign Up
          </Link>
        </p>

        {/* Error */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit(login)} style={styles.form}>
          <div style={styles.fieldGroup}>
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" style={styles.fullWidthButton}>
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

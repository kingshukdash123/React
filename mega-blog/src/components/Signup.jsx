import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
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
    maxWidth: "512px",
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
    color: "#DC2626",
    fontSize: "14px",
  },

  form: {
    marginTop: "32px",
  },

  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  fullWidthButton: {
    width: "100%",
  },
};

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const create = async (data) => {
    setError("");
    try {
      const account = await authService.createAccount(data);
      if (account) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
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
        <h2 style={styles.heading}>Sign up to create account</h2>

        {/* Sub text */}
        <p style={styles.subText}>
          Already have an account?
          <Link to="/login" style={styles.link}>
            Sign In
          </Link>
        </p>

        {/* Error */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Form */}
        <form onSubmit={handleSubmit(create)} style={styles.form}>
          <div style={styles.fieldGroup}>
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />

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
              {...register("password", { required: true })}
            />

            <Button type="submit" style={styles.fullWidthButton}>
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

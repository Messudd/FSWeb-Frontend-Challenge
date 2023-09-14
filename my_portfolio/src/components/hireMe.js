import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { dataContext } from "../context/dataContext";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import "../css/hireMe.css";

const HireMe = () => {
  const myState = useContext(dataContext);
  const resetData = {
    name: "",
    surname: "",
    email: "",
    topic: "",
    comment: "",
  };
  const { formData, setFormData, data, mode } = myState;
  const [formErrors, setFormErrors] = useState({ ...resetData });
  const [isValid, setFormValid] = useState(false);

  const history = useHistory();
  const form = useRef();

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Name required ...")
      .min(3, "Must be at least 3 characters !"),
    surname: Yup.string()
      .strict()
      .uppercase("Write in capital letters")
      .required("Surname required..."),
    email: Yup.string()
      .email("Invalid email !")
      .required("Please enter an e-posta adress..."),
    topic: Yup.string()
      .required("Specify a topic !")
      .max(20, "Up to 20 characters !"),
    comment: Yup.string()
      .required("Write a comment ...")
      .min(10, "Must be at least 10 characters "),
  });

  const toast_data = {
    position: "top-right",
    autoClose: 400,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: mode ? 'light' : 'dark'
  };
  const colorGround = {
    backgroundColor: !mode && "rgb(55, 50, 59)",
    borderBottom: !mode && "2px solid #fff",
  };

  const handleReset = () => {
    setFormData({ ...resetData });
  };
  const goMainPage = () => {
    history.push("/");
  };
  const handleInputChange = (e) => {
    const { value, type, name } = e.target;
    Yup.reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormData({
      ...formData,
      [name]:
        (type === "text" || type === "textarea" || type === "email") && value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_qonlnrv",
        "template_ejsj4sn",
        form.current,
        "rAqsOSdtv8rSok_lm"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            console.log("Email - gönderildi ...", result.text);
            setTimeout(() => {
              setFormData({ ...resetData });
              toast.success("Mesaj Gönderildi ! 👍", { ...toast_data });
            }, 200);
            setTimeout(() => {
              history.push("/");
            }, 2000);
          }
        },
        (error) => {
          console.log(error.status, error.text);
          setTimeout(() => {
            toast.error("Hay Aksi Başarısız Gönderi ! ⚠️", { ...toast_data });
          }, 200);
        }
      );
  };

  useEffect(() => {
    console.log("form_data : ", form.current);
    schema.isValid(formData).then((valid) => setFormValid(valid));
  }, [formData, schema]);

  return (
    <div
      style={{ backgroundColor: !mode && "rgb(37, 33, 40)" }}
      className="container"
    >
      <div
        style={{ ...colorGround, borderRadius: "4px" }}
        className="form-container"
      >
        <span
          className="back"
          onClick={goMainPage}
          style={{
            fontSize: "1.5rem",
            cursor: "pointer",
            color: !mode && "#fff",
          }}
        >
          ⬅
        </span>
        <h2 style={{ color: !mode && "#fff" }}>
          {data.other.con}
          <span>👇</span>
        </h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="name">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter Name "
              onChange={handleInputChange}
              style={colorGround}
            />
          </div>
          {!!formErrors.name && (
            <p style={{ color: "darkred", fontSize: "0.8rem" }}>
              {formErrors.name}
            </p>
          )}
          <div className="surname">
            <input
              id="surname"
              type="text"
              value={formData.surname}
              name="surname"
              placeholder="Enter Surname "
              onChange={handleInputChange}
              style={colorGround}
            />
          </div>
          {!!formErrors.surname && (
            <p style={{ color: "darkred", fontSize: "0.8rem" }}>
              {formErrors.surname}
            </p>
          )}
          <div className="email">
            <input
              id="email"
              type="email"
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              style={colorGround}
            />
          </div>
          {!!formErrors.email && (
            <p style={{ color: "darkred", fontSize: "0.8rem" }}>
              {formErrors.email}
            </p>
          )}
          <div className="topic">
            <input
              id="topic"
              type="text"
              value={formData.topic}
              name="topic"
              placeholder="Enter a Topic ..."
              onChange={handleInputChange}
              style={colorGround}
            />
          </div>
          {!!formErrors.topic && (
            <p style={{ color: "darkred", fontSize: "0.8rem" }}>
              {formErrors.topic}
            </p>
          )}
          <div className="comment">
            <textarea
              id="comment"
              type="textarea"
              value={formData.comment}
              name="comment"
              placeholder="Message..."
              rows={4}
              cols={20}
              onChange={handleInputChange}
              style={colorGround}
            />
          </div>
          {!!formErrors.comment && (
            <p style={{ color: "darkred", fontSize: "0.8rem" }}>
              {formErrors.comment}
            </p>
          )}
          <div className="button-form">
            <button
              type="submit"
              disabled={!isValid}
              style={{
                backgroundColor: !mode && "rgb(56, 56, 56)",
                color: !mode && "rgb(225,225,225",
                border: !mode && '1px solid #fff'
              }}
            >
              {data.other.send}
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                backgroundColor: !mode && "rgb(56, 56, 56)",
                color: !mode && "rgb(225,225,225",
                border: !mode && '1px solid #fff'
              }}
            >
              {data.other.res}
            </button>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={400}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme= {mode ? "light" : 'dark'}
          />
        </form>
      </div>
    </div>
  );
};

export default HireMe;

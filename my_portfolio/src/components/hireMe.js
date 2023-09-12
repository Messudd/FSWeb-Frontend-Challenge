import React, { useContext, useEffect, useRef } from "react";
import {useHistory} from 'react-router-dom';
import { dataContext } from "../context/dataContext";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import* as Yup from 'yup';
import "react-toastify/dist/ReactToastify.css";
import "../css/hireMe.css";

const HireMe = () => {
  const myState = useContext(dataContext);
  const { formData, setFormData } = myState;

  const history = useHistory();

  const form = useRef();

  const toast_data = {
    position: "top-right",
    autoClose: 400,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  const resetData = {
    name : '',
    surname: '',
    email: '',
    topic: '',
    comment: ''
};

  const handleReset = () => {
    setFormData({...resetData});
  }
  const goMainPage = () => {
    history.push('/');
  }
  const handleInputChange = (e) => {
    const { value, type, name } = e.target;
    setFormData({
      ...formData,
      [name]:
        (type === "text" || type === "textarea" || type === "email") && value,
    });
  };

  const handleSubmit = async(e) => {
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
                setFormData({...resetData});
              toast.success("Mesaj Gönderildi ! 👍", { ...toast_data });
            }, 200);
            setTimeout(() => {
                history.push('/');
            },2000);
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
    console.log("form_data : ", formData);
  }, [formData]);

  return (
    <div className="container">
      <div className="form-container">
        <span className="back" onClick={goMainPage} style={{fontSize:'1.5rem' , cursor: 'pointer'}}>⬅</span>
        <h2>
          Bana Ulaş !<span>👇</span>
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
            />
          </div>
          <div className="surname">
            <input
              id="surname"
              type="text"
              value={formData.surname}
              name="surname"
              placeholder="Enter Surname "
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <input
              id="email"
              type="email"
              value={formData.email}
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="topic">
            <input
              id="topic"
              type="text"
              value={formData.topic}
              name="topic"
              placeholder="Enter a Topic ..."
              onChange={handleInputChange}
            />
          </div>
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
            />
          </div>
          <div className="button-form">
            <button type="submit">Send</button>
            <button type="button" onClick={handleReset}>Reset</button>
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
            theme="light"
          />
        </form>
      </div>
    </div>
  );
};

export default HireMe;

import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "../context/dataContext";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "../css/hireMe.css";

const HireMe = () => {
  const myState = useContext(dataContext);
  const { formData, setFormData } = myState;

  const form = useRef();

  const toast_data = {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleInputChange = (e) => {
    const { value, type, name } = e.target;
    setFormData({
      ...formData,
      [name]:
        (type === "text" || type === "textarea" || type === "email") && value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qonlnrv",
        "template_ejsj4sn",
        form.current,
        "rAqsOSdtv8rSok_lm"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            console.log("Email - gönderildi ... ", result.text);
            setTimeout(() => {
              toast.success("Mesaj Gönderildi ! ", { ...toast_data });
            }, 200);
          }
        },
        (error) => {
          console.log(error.status, error.text);
          setTimeout(() => {
            toast.error("Hay Aksi Başarısız Gönderi !", { ...toast_data });
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
        <form ref={form} onSubmit={handleSubmit}>
          <div className="name">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter Name "
              onChange={handleInputChange}
            />
          </div>
          <div className="surname">
            <input
              id="surname"
              type="text"
              name="surname"
              placeholder="Enter Surname "
              onChange={handleInputChange}
            />
          </div>
          <div className="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="topic">
            <input
              id="topic"
              type="text"
              name="topic"
              placeholder="Enter a Topic ..."
              onChange={handleInputChange}
            />
          </div>
          <div className="comment">
            <textarea
              id="comment"
              type="textarea"
              name="comment"
              placeholder="Message..."
              rows={8}
              cols={30}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-form">
            <button type="submit">Send</button>
            <button type="button">Reset</button>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={500}
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

//############### Axios Post Request --  Form Submit #######################################

// e.preventDefault();
// await axios
//   .post("https://reqres.in/api/users", formData)
//   .then((res) => {
//     if(res.status === 201){
//         setFormData(res.data);
//         setTimeout(() => {
//             toast.success('Mesaj Gönderildi ! ', {...toast_data});
//         },200);
//     }
//   })
//   .catch((err) => {
//     console.log(("Sunucu Hatası :( ", err));
//     setTimeout(() => {
//         toast.error('Hay Aksi Başarısız Gönderi !', {...toast_data});
//     },200);
//   })

//############### Axios Post Request --  Form Submit #######################################

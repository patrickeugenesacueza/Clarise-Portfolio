import React, { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    // Simulating a download delay (replace this with your actual download logic)
    setTimeout(() => {
      // After some delay (simulating download completion), set loading back to false
      setLoading(false);
    }, 2000); // Adjust the duration as needed for your use case
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_2m23u2o";
    const templateID = "template_yobt8hb";
    const publicKey = "prZeT6Ij7StN9MqGj";

    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: email,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the email sending process completes
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="emailForm">
        <input
          type="text"
          placeholder="sample@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full h-12 bg-[#fff] text-[#495057] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4"
        />

        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          className="w-full h-12 bg-[#fff] text-[#495057] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full h-48 bg-[#fff] border-[1px] border-[#ced4da] py-2 px-4 rounded-md mb-4 resize-none"
        ></textarea>

        <button
          // onClick={handleDownload}
          // disabled={loading}
          type="submit"
          className="px-4 py-1 w-full bg-[#b37eb5] font-bold font-maven text-[#fff] border-2 border-[#b37eb5] rounded-3xl mx-auto hover:bg-[#fff] hover:text-[#b37eb5] duration-500 md:mx-0 md:mr-3 2xl:text-2xl 2xl:rounded-[4em] "
        >
          {loading && <i className="fa fa-spinner fa-spin"></i>}
          {loading ? "Sending..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

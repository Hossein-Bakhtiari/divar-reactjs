import React from "react";
import { checkOtp } from "../services/auth";
import { setCookei } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const submitHandelr = async (event) => {
    event.preventDefault();
    console.log({ code, mobile });

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      setCookei(response.data);
      console.log(response);
      navigate("/");
      refetch();
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <form onSubmit={submitHandelr}>
      <p>تایید کد</p>
      <span>کد ارسال شده به شماره "{mobile}" را وارد کنید</span>
      <label htmlFor="input">کد تأیید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تأیید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;

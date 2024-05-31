import React from "react";
import { sendOtp } from "../services/auth";

function SendOtpFrom({ mobile, setMobile, setStep}) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });

    if (response) setStep(2);

    if (error) console.log(error.response.data.message);
  };
  
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد بکنید. کد
        تأیید ب این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد بکنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تأیید</button>
    </form>
  );
}

export default SendOtpFrom;

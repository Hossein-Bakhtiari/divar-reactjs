import React from "react";

function CheckOtpForm({ code, setCode, mobile, setStep }) {

    const submitHandelr = (event) => {
        event.preventDefault();
        console.log({code , mobile})
    }

  return (
    <form onSubmit={submitHandelr} >
        <h1>Hi</h1>
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

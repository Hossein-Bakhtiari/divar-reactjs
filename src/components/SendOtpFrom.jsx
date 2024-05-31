import React from "react";

function SendOtpFrom({ mobile, setMoblie, setStep }) {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
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
        onChange={(e) => setMoblie(e.target.value)}
      />
      <button type="submit">ارسال کد تأیید</button>
    </form>
  );
}

export default SendOtpFrom;

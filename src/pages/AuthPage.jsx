import React, { useState } from "react";
import SendOtpFrom from "../components/SendOtpFrom";
import CheckOtpForm from "../components/CheckOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpFrom setStep={setStep} mobil={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtpForm />}
    </div>
  );
}

export default AuthPage;
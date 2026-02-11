import { useRef, useState } from "react";

function MixedRegistrationForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // First Name
    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "First name must contain only alphabets";
      isValid = false;
    }

    // Last Name
    if (!lastName || !/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Last name must contain only alphabets";
      isValid = false;
    }

    // Email
    const emailPattern =
      /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)*@([a-z][a-zA-Z0-9-]*)\.[a-z]+(\.[a-z]+)?$/;

    if (!email || !emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    // Password
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!password || !passPattern.test(password)) {
      newErrors.password =
        "Password must have 8 chars, uppercase, lowercase, number & special char";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setStatus("Registration Successful ✅");

      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } else {
      setStatus("");
    }
  };

  return (
    <div className="form-card">
      <h2>Employee Registration</h2>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>First Name</label>
          <input type="text" ref={firstNameRef} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="field">
          <label>Last Name</label>
          <input type="text" ref={lastNameRef} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="field">
          <label>Email</label>
          <input type="text" ref={emailRef} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="field">
          <label>Password</label>
          <input type="password" ref={passwordRef} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      {status && <p className="success">{status}</p>}
    </div>
  );
}

export default MixedRegistrationForm;
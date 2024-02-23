import { FormEvent, useState } from "react";
import "./Login.css";

interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const [inputValue, setInputValue] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev: ILogin) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // gửi dữ liệu lên server

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    //bắn dữ liệu
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmitForm}>
        <label htmlFor="email"> Email </label>
        <input
          type="text"
          name="email"
          id="email"
          value={inputValue.email}
          onChange={handleInputOnChange}
        />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={inputValue.password}
          onChange={handleInputOnChange}
        />

        <button type="submit"> Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;

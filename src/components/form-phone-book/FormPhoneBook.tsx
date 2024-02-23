import React, { useState } from "react";

interface IFormProps {
  setHidden: (item: boolean) => void;
}
const FormPhoneBook = (props: IFormProps) => {
  const { setHidden } = props;

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    url: "",
  });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // đi lấy data trên local
    const dataPhoneBook = JSON.parse(
      localStorage.getItem("phone-book") as string
    );

    if (dataPhoneBook) {
      const newDataPhoneBook = [...dataPhoneBook, inputValue];
      localStorage.setItem("phone-book", JSON.stringify(newDataPhoneBook));
    } else {
      localStorage.setItem("phone-book", JSON.stringify([inputValue]));
    }

    setHidden(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Tạo mới liên hệ</h2>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Họ"
          name="firstName"
          onChange={handleOnChange}
          value={inputValue.firstName}
        />
        <input
          type="text"
          placeholder="Tên"
          name="lastName"
          onChange={handleOnChange}
          value={inputValue.lastName}
        />
        <input
          type="text"
          placeholder="Đường dẫn ảnh"
          name="url"
          onChange={handleOnChange}
          value={inputValue.url}
        />

        <button type="submit">tạo mới </button>
      </form>
    </div>
  );
};

export default FormPhoneBook;

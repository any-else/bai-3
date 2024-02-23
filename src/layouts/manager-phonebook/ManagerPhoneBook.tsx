import { useEffect, useState } from "react";
import FormPhoneBook from "../../components/form-phone-book/FormPhoneBook";
import ListPhoneBook from "../../components/list-phonebook/ListPhoneBook";

const ManagerPhoneBook = () => {
  const dataPhoneBook =
    JSON.parse(localStorage.getItem("phone-book") as string) ?? [];

  const [hidden, setHidden] = useState(true);

  useEffect(() => {}, [hidden]);

  return (
    <div className="w-[350px] bg-black text-cyan-50">
      <div className="flex justify-between p-3 text-center items-center">
        <p>Danh sách liên hệ</p>
        <span
          className="text-2xl"
          onClick={() => setHidden(false)}
          style={{ cursor: "pointer" }}
        >
          {" "}
          +{" "}
        </span>
      </div>

      <input
        type="text"
        className="px-1 py-2 bg-transparent outline-none border  rounded-sm border-red-500 w-[80%] "
        placeholder="Tìm kiếm"
      />
      {dataPhoneBook?.map((item: any, index: number) => {
        return <ListPhoneBook key={index} dataPhoneBook={item} />;
      })}

      {hidden ? "" : <FormPhoneBook setHidden={setHidden} />}
    </div>
  );
};

export default ManagerPhoneBook;

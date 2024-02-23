import "./App.css";
import CardStory from "./components/card-story/CardStory";
import CountNumber from "./components/count-number/CountNumber";
import Login from "./components/login/Login";
import ManagerPhoneBook from "./layouts/manager-phonebook/ManagerPhoneBook";

function App() {
  const dataStory: any = [
    {
      name: "Quang Nguyễn",
      icon: "https://picsum.photos/200/200",
      image: "https://picsum.photos/200/502",
    },
    {
      name: "Chính gà",
      icon: "https://picsum.photos/200/202",
      image: "https://picsum.photos/200/450",
    },
    {
      name: "Hiệp Quốc",
      icon: "https://picsum.photos/200/201",
      image: "https://picsum.photos/200/350",
    },
  ];
  return (
    <>
      {/* <h1> Learn props</h1>
      <div
        className="root"
        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
      >
        {dataStory &&
          dataStory.map((item: any, idex: any) => {
            return <CardStory key={idex} dataStory={item} />;
          })}
      </div>

      <hr />

      <h1> Learn State </h1>
      <CountNumber />

      <h1> Learn Form React</h1>
      <Login /> */}

      {/* <h1>Bài 3 </h1> */}
      <ManagerPhoneBook />
    </>
  );
}

export default App;

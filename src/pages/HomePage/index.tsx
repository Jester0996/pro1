import { selectUser } from "@/store/auth/selectors";
import { useAppSelector } from "@/store/hooks";

const HomePage = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className="home-page">
      <h1>Главная страница</h1>
      <p>Добро пожаловать, {user?.login || "гость"}!</p>
    </div>
  );
};

export default HomePage;

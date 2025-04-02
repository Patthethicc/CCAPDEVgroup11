import "./Home.css";
import Content from "../components/Home/Content.jsx";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const { category } = useOutletContext();
  return (
    <div className="home-main">
      <Content category={category}/>
    </div>
  );
}

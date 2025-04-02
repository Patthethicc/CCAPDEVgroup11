import "./Home.css";
import Content from "../components/Home/Content.jsx";
import { useOutletContext } from "react-router-dom";


export default function Home({ search, setSearch }) {
  const { category } = useOutletContext();
  return (
    <div className="home-main">
      <Content search={search} setSearch={setSearch} category={category}/>
    </div>
  );
}

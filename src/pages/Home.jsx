import "./Home.css";
import Content from "../components/Home/Content.jsx";

export default function Home({ search, setSearch }) {
  return (
    <div className="home-main">
      <Content search={search} setSearch={setSearch} />
    </div>
  );
}

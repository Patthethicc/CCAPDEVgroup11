import { useEffect } from "react";

export default function ImageContainer() {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
    import("bootstrap/dist/js/bootstrap.bundle.min");

    return () => {
      document.body.style.backgroundColor = "#373d3b";
    };
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            className="d-block w-100"
            alt="astronomy 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/460985/pexels-photo-460985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="astronomy 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="astronomy 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

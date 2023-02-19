import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center my-5 py-5">
        <div className="text-center mb-3">
          <h1 className="fw-bold text-warning" style={{ fontSize: "190px" }}>
            404
          </h1>
          <p className="fs-1">
            <span className="text-success">Ohh no!</span> Page not found.
          </p>
          <p className="col-8 mx-auto">
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Link to="/" className="btn btn-success btn-lg px-5 mt-3">
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;

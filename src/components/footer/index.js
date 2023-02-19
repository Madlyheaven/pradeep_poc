import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-light text-center">
        <div
          className="container-fluid p-4 pb-0 text-light"
          style={{ backgroundColor: "#0d1117c9" }}
        >
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our updates</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="mb-4">
                    <input
                      type="email"
                      id="form5Example27"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-success mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div
          className="text-center p-3 bg-dark text-light"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <span className="ms-2 fw-bold">SP Bank</span>
        </div>
      </footer>
    </>
  );
}

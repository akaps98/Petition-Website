import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../user-routes/Home/home.css";
import Spinner from "react-bootstrap/Spinner";
import CardAd from "../../components/Card/cardAdmin";

// This is the home page of the web application
const Home = () => {
  const admin = sessionStorage.getItem("admin");
  const navigate = useNavigate();

  const authenticate = () => {
    if (!admin) {
      navigate("/admin/login");
    }
  };

  useEffect(() => {
    authenticate();
  });

  const [billboards, setBillboard] = useState([]);
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("Checked");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/billboards`)
      .then((res) => res.json())
      .then((data) => {
        setBillboard(data);
        setLoading(true);
      });
  }, []);
  return (
    <div>
      <h1>Petitions</h1>
      <div className="row filters">
        <div className="col-6 col-sm-4 col-md-4 filter-container">
          Category
          <select
            className="form-select"
            aria-label="Select Category"
            onChange={(e) => {
              let selectedType = e.target.value;
              setCategory(selectedType);
            }}
          >
            <option defaultValue="All">All</option>
            <option value="Sport">Sport</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Animal">Animal</option>
            <option value="Health">Health</option>
          </select>
        </div>

        <div className="col-6 col-sm-4 col-md-4 filter-container">
          Status
          <select
            className="form-select"
            aria-label="Select status"
            onChange={(e) => {
              let selectedType = e.target.value;
              setStatus(selectedType);
            }}
          >
            <option defaultValue="Checked">Approved</option>
            <option value="Unchecked">Pending</option>
          </select>
        </div>
      </div>

      {!loading ? (
        <div>
          <Spinner animation="grow" />
          <Spinner animation="grow" />
          <Spinner animation="grow" />
        </div>
      ) : null}

      <div className="row" id="items">
        {billboards
          .filter((item) => {
            if (category == "All") {
              return item.status == status;
            }  else {
              return item.type == category && item.status == status;
            }
          })
          .map((filteredItem) => (
            <CardAd
              id={filteredItem?._id}
              title={filteredItem?.title}
              description={filteredItem?.description}
              goal={filteredItem?.goal}
              current={filteredItem?.current}
              day={filteredItem?.day}
              status={filteredItem?.status}
              billboardImg={filteredItem.billboardImg}
            ></CardAd>
          ))}
      </div>
    </div>
  );
};

export default Home;

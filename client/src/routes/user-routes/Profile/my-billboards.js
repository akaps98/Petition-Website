import Card from "../../../components/Card/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./profile.css";
import AddBillBoardModal from "../../../components/Add Billboard Modal/index";
import Spinner from "react-bootstrap/Spinner";

const MyBillboards = () => {
  const [ownerEmail] = useState(sessionStorage.getItem("userEmail"));
  const [billboards, setBillboards] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const userToken = () => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    userToken();
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/billboards/my-billboards/${ownerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setBillboards(data);
        setLoading(true);
      });
  }, [billboards]);

  userToken();

  return (
    <div>
      <hr />
      <div>
        <h2 className="col col-lg-auto tab-header">My Petition</h2>
        <div className="row filters">
          <div className="col-12 col-sm-3 filter-container">
            Category
            <select
              className="col-12 col-md-4 form-select"
              aria-label="Select billboard type"
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

          <div className="col-12 col-md-4 btn-container py-3">
            {billboards.length != 0 ? (
              <Button disabled>
                Please complete the current petition before creating a new one
              </Button>
            ) : (
              <AddBillBoardModal />
            )}
          </div>
        </div>
        {!loading ? (
          <div className="loadingDiv">
            <Spinner className="spinner" animation="grow" />
            <Spinner className="spinner" animation="grow" />
            <Spinner className="spinner" animation="grow" />
          </div>
        ) : null}
        <div className="row" id="items">
          {billboards
            .filter((item) => {
              if (category == "All") {
                return item.status == "Checked";
              } else {
                return item.type == category && item.status == "Checked";
              }
            })
            .map((filteredItem) => (
              <Card
                id={filteredItem?._id}
                owner={filteredItem?.owner}
                title={filteredItem?.title}
                description={filteredItem?.description}
                goal={filteredItem?.goal}
                current={filteredItem?.current}
                day={filteredItem?.day}
                billboardImg={filteredItem.billboardImg}
              ></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyBillboards;

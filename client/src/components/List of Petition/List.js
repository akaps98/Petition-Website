import { React, useState, useEffect } from "react";
import Card from "../Card/card";
import Spinner from "react-bootstrap/Spinner";

export default function List() {
  const [billboards, setBillboard] = useState([]);
  const [category, setCategory] = useState("All");
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
    <div><hr/>
    <div className="container">
      <div className="row filters">
        <div className="col-6 col-sm-4 col-md-4 filter-container">
          Category
          <select
            className="form-select"
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
}

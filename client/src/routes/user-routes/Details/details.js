import "bootstrap/dist/css/bootstrap.min.css";
// import "./details.css";
import ProfileCard from "../../../components/Profile Card/Card";
import Features from "../../../components/Profile Card/MediaTable";
import EditBillboardModal from "../../../components/Edit Billboard Modal";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";

function Details() {
  const { _id } = useParams();
  const [billboards, setBillboard] = useState();
  const [billboardOwnerEmail, setBillboardOwnerEmail] = useState(null);

  const specificBillboard = async () => {
    await fetch(`http://localhost:5000/api/billboards/specific/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setBillboard(data);
        setBillboardOwnerEmail(data[0].owner);
      }); 
  };

  useEffect(() => {
    specificBillboard();
  }, []);


if (billboards) {
    return (
      <div><hr/>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-auto">
              {billboards && (
                <ProfileCard
                  _id={billboards[0]._id}
                  title={billboards[0].title}
                  type={billboards[0].type}
                  current={billboards[0].current}
                  goal={billboards[0].goal}
                  description={billboards[0].description}
                  billboardImg={billboards[0].billboardImg}
                  billboardOwnerEmail={billboardOwnerEmail}
                  signed={billboards[0].signed}
                />
              )}
            </div>
            <div className="col p-3">
              <Features
                title={billboards[0].title}
                type={billboards[0].type}
                description={billboards[0].description}
                current={billboards[0].current}
                goal={billboards[0].goal}
                day={billboards[0].day}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}else{
  return(
    <div className="loadingDiv">
      <Spinner className="spinner" animation="grow" />
      <Spinner className="spinner" animation="grow" />
      <Spinner className="spinner" animation="grow" />
  </div>
  )
}

}

export default Details;

import React, { useState, useEffect } from "react";

const ListPatients = () => {
  let [patients, setpatients] = useState([]);

  useEffect(() => {
    getPatients();
  }, []);

  let getPatients = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/getPatient");
    let data = await response.json();
    console.log("DATA:", data);
    setpatients(data);
  };
  return (
    <div>
      <div>
        {patients.map((patient, index) => (
          <h3 className="bg-info" key={index}>
            {patient.first_name}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default ListPatients;

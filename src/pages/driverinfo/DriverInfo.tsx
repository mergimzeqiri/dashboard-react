import React from "react";
import Button from "../../components/shared/button/Button";
import "../driverinfo/DriverInfo.scss";
import ChamionPic from "../../assets/lewis-hamilton-mercedes-1.jpeg";
import HelmetPic from "../../assets/helmet.jpeg";
import BritishFlag from "../../assets/britishFlag.png";
import DriverInfoTable from "../../components/driverInfoTable/DriverInfoTable";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  dateOfBirth: number;
  nationality: string;
  team?: string;
  country?: string;
  podiums?: number;
  points?: number;
  grandPrixEnter: number;
  worldChampionship: number;
  highestRace: number;
  highestGrid: number;
}

export default function DriverInfo() {
  const navigate = useNavigate();
  let { driverId, id } = useParams();
  const url = `http://ergast.com/api/f1/drivers/${driverId}.json`;

  const driverInfoApi = async () => {
    const response = await axios.get(url);
    return response.data?.MRData?.DriverTable?.Drivers;
  };
  const { isLoading, data } = useQuery(["driver-api"], driverInfoApi);

  const driverData = data?.map((item: Props) => {
    return {
      team: "Mercedes",
      country: item.nationality,
      podiums: 100,
      points: 20,
      grandPrixEnter: 109,
      worldChampionship: 6,
      highestRace: 1,
      highestGrid: 1,
      DOB: item.dateOfBirth,
      POB: item.nationality,
    };
  });
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="DriverInfoWrapper">
      <div className="leftWrapper">
        <div className="exitButton">
          <Button leftIcon={true} onClick={() => goBack()} />
        </div>
        <h4 className="wrapperYear">{id}</h4>
        <h2 className="wrapperTitle">Champion</h2>
        <img className="championPic" src={ChamionPic} />
        <div className="nameAndNumber">
          <h1 className="championNumber">{data?.permanentNumber}</h1>
          <h1 className="championName">
            {data?.givenName + " " + data?.familyName}
          </h1>
          <img className="Flag" src={BritishFlag} />
        </div>
        <img className="helmetPic" src={HelmetPic} />
      </div>

      <div className="rightWrapper">
        {driverData && <DriverInfoTable data={driverData} />}
      </div>
    </div>
  );
}

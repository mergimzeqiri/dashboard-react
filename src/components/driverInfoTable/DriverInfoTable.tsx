import React from "react";
import "../driverInfoTable/DriverInfoTable.scss";

interface DataProps {
  grandPrixEnter: number;
  worldChampionship: number;
  highestRace: number;
  highestGrid: number;
  DOB: string;
  POB: string;
  team?: string;
  country?: string;
  podiums?: number;
  points?: number;
}
interface Props {
  data: DataProps[];
  visible?: boolean;
}
function DriverInfoTable(props: Props) {
  const { data, visible } = props;
  return (
    <div className="DriverInfoTable">
      <ul className="tableHead">
        <li>Team</li>
        <li>Country</li>
        <li>Podiums</li>
        <li>Points</li>
        <li>Grand Prix Entered</li>
        <li>World Championships</li>
        <li>Highest Race Finish</li>
        <li>Highest Grid Position</li>
        <li>Date of Birth</li>
        <li>Place of Birth</li>
      </ul>
      {data.map((item: DataProps) => {
        return (
          <ul className="tableData">
            <li>{item.team}</li>
            <li>{item.country}</li>
            <li>{item.podiums}</li>
            <li>{item.points}</li>
            <li>{item.grandPrixEnter}</li>
            <li>{item.worldChampionship}</li>
            <li>{item.highestRace}</li>
            <li>{item.highestGrid}</li>
            <li>{item.DOB}</li>
            <li>{item.POB}</li>
          </ul>
        );
      })}
    </div>
  );
}
export default DriverInfoTable;

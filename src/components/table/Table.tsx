import "./Table.scss";
import Button from "../shared/button/Button";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface DataProps {
  name?: string;
  Nationality?: string;
  team?: string;
  points?: number;
  id: string;
}
interface Props {
  data: DataProps[];
  button: boolean;
}
function Table(props: Props) {
  let params = useParams<{ id: string }>();

  const { data, button } = props;

  //This is to redirect to the wanted id , like router.push
  const history = useNavigate();

  const handleOnClickRedirect = (id: string) => {
    history(`/year/${params.id}/driver/${id} `);
  };
  return (
    <table className="tableHeader">
      <tr>
        <th>Name</th>
        <th>Nationality</th>
        <th>Team</th>
        <th>Points</th>
      </tr>
      <hr />
      {data.map((val: DataProps) => {
        return (
          <tr>
            <td>{val.name}</td>
            <td>{val.Nationality}</td>
            <td>{val.team}</td>
            <td>{val.points}</td>
            {!button ? (
              <Button onClick={() => handleOnClickRedirect(val.id)} />
            ) : (
              <td>
                <Button onClick={() => handleOnClickRedirect(val.id)} />
              </td>
            )}
          </tr>
        );
      })}
    </table>
  );
}

export default Table;

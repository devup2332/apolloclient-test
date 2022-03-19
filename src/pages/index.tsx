import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { getPersons } from "../graphql/client/services/persons/queries";

const HomePage = () => {
  const { data, error, loading } = useQuery(getPersons);
  const handleGetPersons = () => {
    console.log("Ger persons", data);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      {loading && <p>Cargando</p>}
      {data?.rates &&
        data?.rates?.map((i: any, index: number) => {
          return <p key={index}>{i.currency}</p>;
        })}
    </div>
  );
};

export default HomePage;

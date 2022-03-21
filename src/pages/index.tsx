import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  CREATE_USER,
  GET_USERS,
} from "../graphql/client/services/persons/queries";

const HomePage = () => {
  const [person, setPerson] = useState<any>({
    name: "",
    password: "",
    phone: "",
    address: "",
  });
  const { data: users, loading, error } = useQuery(GET_USERS);
  const [createPersonMethod, { data: newUser }] = useMutation(CREATE_USER, {
    refetchQueries: [
      {
        query: GET_USERS,
      },
    ],
  });

  const createPerson = async (e: any) => {
    e.preventDefault();
    await createPersonMethod({
      variables: {
        name: person.name,
        password: person.password,
        phone: person.phone,
        address: person.address,
      },
    });
  };
  const onChange = (e: any) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    console.log("users", users);
  }, [users]);

  if (error) return <p>{error}</p>;
  return (
    <div>
      <form onSubmit={createPerson}>
        <input
          placeholder="Name"
          name="name"
          value={person.name}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Password"
          name="password"
          value={person.password}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Phone"
          name="phone"
          value={person.phone}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Address"
          name="address"
          value={person.address}
          onChange={(e) => onChange(e)}
        />
        <button type="submit">Create Person</button>
      </form>
      {users?.getUsers.map((u: any, index: number) => {
        return <p key={index}>{u.name}</p>;
      })}
    </div>
  );
};

export default HomePage;

import axios from "axios";
import React, { useState } from "react";
import { Button } from "reactstrap";
import Router from "next/router";

const AddTodo = () => {
  const [data, setData] = useState({
    todo: "",
    description: "",
    date: ""
  });

  const onChangeHandeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClickHandeler = () => {
    console.log(data);
    if (data.todo.trim() === "" || data.date.trim() === "" || data.description.trim() === "") {
      alert("All fields are required")
    } {
      axios
        .post("http://localhost:3000/api/todoApiPost", data)
        .then((res) => {
          console.log(res.data)
          setData({
            todo: "",
            description: "",
            date: ""
          })
          Router.push('/')
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <h1 align="center" style={{ color: "skyblue" }}>
        Add your todo
      </h1>
      <input
        type="text"
        name="todo"
        value={data.todo}
        onChange={onChangeHandeler}
        placeholder="Enter Your Todo Name"
        style={{
          backgroundColor: "white",
          color: "black",
          marginTop: "3%",
          marginLeft: "30%",
          width: "40%",
        }}
      />
      <br />
      <input
        type="date"
        name="date"
        value={data.date}
        onChange={onChangeHandeler}
        placeholder="Enter Date"
        style={{
          backgroundColor: "white",
          color: "black",
          marginTop: "1%",
          marginLeft: "30%",
          width: "40%",
        }}
      />
      <br />
      <textarea
        type="text"
        name="description"
        onChange={onChangeHandeler}
        value={data.description}
        placeholder="Enter Your Todo Desription"
        style={{
          backgroundColor: "white",
          color: "black",
          marginTop: "1%",
          marginLeft: "30%",
          height: 100,
          width: "40%",
        }}
      />
      <br />
      <Button
        color="primary"
        style={{ marginTop: "1%", marginLeft: "30%", width: "40%" }}
        onClick={onClickHandeler}
      >
        Add Task
      </Button>
    </>
  );
};

export default AddTodo;

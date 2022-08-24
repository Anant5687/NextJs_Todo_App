import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useRouter } from 'next/router'
import axios from 'axios'
import Router from "next/router";

const UpdateTodo = () => {
  const router = useRouter()
  const id = router.query.UpdateTodo
  console.log(id, "from update page")
  const [data, setData] = useState({
    todo: "",
    description: "",
    date: ""
  })

  console.log(data)

  const onChangeHandeler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onClickHandeler = () => {
    console.log(data)
    axios.put(`http://localhost:3000/api/updateTodoApi/${id}`, data).then((res) => {
      setData(res.data)
      console.log(res.data)
      Router.push("/")
    })
  }

  const dataController = () => {
    axios.get(`http://localhost:3000/api/getOneUser/${id}`).then((res) => {
      setData(res.data[0])
    }).catch((err) => console.log(err))
  }

  useEffect(() => {
    dataController()
  }, [])

  return (

    <>
      <h1 align="center" style={{ color: "skyblue" }}>Update your todo</h1>
      <input type="text" name="todo" value={data.todo} onChange={onChangeHandeler} placeholder="Enter Your Todo Name" style={{ backgroundColor: "white", color: "black", marginTop: "3%", marginLeft: "30%", width: "40%" }} />
      <br />
      <input type="date" name="date" value={data.date} onChange={onChangeHandeler} placeholder="Enter Date" style={{ backgroundColor: "white", color: "black", marginTop: "3%", marginLeft: "30%", width: "40%" }} />
      <br />
      <textarea type="text" name="description" onChange={onChangeHandeler} value={data.description} placeholder="Enter Your Todo Desription" style={{ backgroundColor: "white", color: "black", marginTop: "1%", marginLeft: "30%", height: 100, width: "40%" }} />
      <br />
      <Button color="primary" style={{ marginTop: "1%", marginLeft: "30%", width: "40%" }} onClick={onClickHandeler}>Add Task</Button>
    </>

  );
};

export default UpdateTodo;
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";

const Todo = () => {
  const [apiData, setApiData] = useState([]);

  const fetchingData = () => {
    axios
      .get("http://localhost:3000/api/todoApi")
      .then((res) => { setApiData(res.data) })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchingData();
  }, [apiData]);

  const deleteHandeler = (i) => {
    axios.delete(`http://localhost:3000/api/deleteTodoApi/${i}`).then((res) => {
      console.log("User successsfully deleted")
    }).catch((err) => {
      console.log(err)
    })
  }

  const editHandeler = (i) => {
    Router.push(`/components/updateTodo/${i}`)
  }

  return (
    <>
      <Link href="/components/addTodo/AddTodo">
        <Button
          color="primary"
          style={{ marginLeft: "6px", marginTop: "20px" }}
        >
          Add New Todo
        </Button>
      </Link>

      <Row>
        {apiData.map((ele, i) => {
          return (
            <Col sm="3">
              <Card
                key={i}
                style={{
                  width: "18rem",
                  marginLeft: "3%",
                  marginTop: "20px",
                }}
              >
                <CardBody>
                  <CardTitle tag="h5">{ele.todo}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {ele.date}
                  </CardSubtitle>
                </CardBody>
                <CardBody>
                  <CardText>{ele.description}.</CardText>
                  <Button color="danger" onClick={() => deleteHandeler(ele._id)}>Delete</Button>
                  <Button color="primary" style={{ marginLeft: "10px" }} onClick={() => editHandeler(ele._id)}>
                    Edit
                  </Button>
                </CardBody>
              </Card>
            </Col>

          );
        })}
      </Row>
    </>
  );
};

export default Todo;

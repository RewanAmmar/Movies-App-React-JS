import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./../../axiosConfig/instance";
import { Card } from "react-bootstrap";

const Details = () => {
  const params = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`movie/${params.id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h1>{movie.title}</h1>
            </Card.Title>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />

            <Card.Text>
              <h4 className="box-title mt-5">Movie description</h4>
              <p>{movie.overview}</p>
            </Card.Text>
            <Card.Link href="#">previous</Card.Link>
            <Card.Link href="#">Next</Card.Link>
          </Card.Body>
        </Card>
        
      </div>
      <div></div>
    </>
  );
};
export default Details;

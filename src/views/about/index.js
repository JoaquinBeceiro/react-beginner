import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <S.Container>
      <div>
        <S.Title>Hey developer! 👋</S.Title>
        <p>
          Go back to <Link to="/">Home Page</Link>
        </p>
        <p>
          Go to{" "}
          <a
            href="https://github.com/JoaquinBeceiro"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
        </p>
      </div>
    </S.Container>
  );
};

export default About;

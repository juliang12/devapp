import { CardContainer } from "@/styles/CardStyles";
import React, { FC } from "react";

interface Props {
  key: number;
  name?: string;
  image: string;
  description: string;
}

const ProjectCard: FC<Props> = ({ name, image, description }) => {
  return (
    <CardContainer>
      <h1>{name}</h1>

      <img style={{ width: "20%" }} src={image} alt="" />

      <p>{description}</p>
    </CardContainer>
  );
};

export default ProjectCard;

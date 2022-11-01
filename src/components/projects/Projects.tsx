import ProjectCard from "@/components/projectCard/ProjectCard";
import { db } from "@/services/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const ref = collection(db, "projects");

  const getDocsQuery = async () => {
    const res = await getDocs(ref);
    const data: any = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setProjects(data);
  };

  useEffect(() => {
    getDocsQuery();
  }, []);

  return (
    <div>
      {projects.map((item: any) => (
        <ProjectCard
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Projects;

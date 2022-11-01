import Projects from "@/components/projects/Projects";
import { db } from "@/services/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Projects />
    </div>
  );
};

export default Home;

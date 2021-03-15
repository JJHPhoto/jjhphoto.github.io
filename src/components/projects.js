import pooaday from "./photos/Port-Pooaday.jpg";
import progressing from "./photos/Port-Progressing.jpg";
import portfolio from "./photos/Port-Port.jpg";
import employeeDir from "./photos/Port-Emp-Dir.jpg";
import project1 from "./photos/Port-Project1.jpg";
import weather from "./photos/Port-Weather.jpg";
import { FaGithub } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import { Button } from "react-bootstrap";

const projects = [
  {
    id: 1,
    name: "Pooaday",
    image: pooaday,
    repo: (
      <Button variant="secondary" href="https://github.com/JJHPhoto/pooaday">
        <FaGithub /> Project Repository
      </Button>
    ),
    description:
      "Ourapplication to track daily bowel movements in a fun, non-graphic way. With this app, we hope to help users develop healthier habits.",
    teamTitle: <h4>Project Team</h4>,
    team1: (
      <Button variant="secondary" href="https://github.com/davidvargas95">
        <FaGithub /> David Vargas
      </Button>
    ),
    team2: (
      <Button variant="secondary" href="https://github.com/Jr-source">
        <FaGithub /> Jacob Riley
      </Button>
    ),
    team3: (
      <Button variant="secondary" href="https://github.com/lk9988">
        <FaGithub /> Lana Kim
      </Button>
    ),
    team4: (
      <Button variant="secondary" href="https://github.com/JJHPhoto">
        <FaGithub /> Joshua Haller
      </Button>
    ),
    team5: (
      <Button variant="secondary" href="https://github.com/Dilberovicka31">
        <FaGithub /> Mia Dilberovic
      </Button>
    ),
    liveSite: (
      <Button variant="secondary" href="https://pooaday.herokuapp.com">
        <SiHeroku /> Live application
      </Button>
    ),
  },
  {
    id: 2,
    name: "Progressing",
    image: progressing,
    repo: (
      <Button
        variant="secondary"
        href="https://github.com/JJHPhoto/progressing"
      >
        <FaGithub /> Project Repository
      </Button>
    ),
    description:
      "Our application lets you to track your progress on life goals that you set!",
    teamTitle: <h4>Project Team</h4>,
    team1: (
      <Button variant="secondary" href="https://github.com/Bryson-Palmer">
        <FaGithub /> Bryson Palmer
      </Button>
    ),
    team2: (
      <Button variant="secondary" href="https://github.com/Ianaac27">
        <FaGithub /> Ian Fleshman-Cooper
      </Button>
    ),
    team3: (
      <Button variant="secondary" href="https://github.com/ilya-libershteyn">
        <FaGithub /> Ilya Libershteyn
      </Button>
    ),
    team4: (
      <Button variant="secondary" href="https://github.com/JJHPhoto">
        <FaGithub /> Joshua Haller
      </Button>
    ),
    team5: (
      <Button variant="secondary" href="https://github.com/Tskading">
        <FaGithub /> Thomas Kading
      </Button>
    ),
    liveSite: (
      <Button
        variant="secondary"
        href="https://progressing-pod10.herokuapp.com/"
      >
        <SiHeroku /> Live application
      </Button>
    ),
  },
  {
    id: 3,
    name: "Portfolio",
    image: portfolio,
    repo: (
      <Button
        variant="secondary"
        href="https://github.com/JJHPhoto/jjhphoto.github.io"
      >
        <FaGithub /> Project Repository
      </Button>
    ),
    description: "Some explaination of how this app works ro...",
    team: "",
  },
  {
    id: 4,
    name: "Employee Directory",
    image: employeeDir,
    repo: "Repo Live",
    description: "Some explaination of how this app works ro...",
    team: "",
  },
  {
    id: 5,
    name: "Celeb Checker",
    image: project1,
    repo: "Repo Live",
    description: "Some explaination of how this app works ro...",
    team: "Kat, Lana, Max, Rattanak",
  },
  {
    id: 6,
    name: "Weather Me",
    image: weather,
    repo: "Repo Live",
    description: "Some explaination of how this app works ro...",
    team: "",
  },
];

export default projects;

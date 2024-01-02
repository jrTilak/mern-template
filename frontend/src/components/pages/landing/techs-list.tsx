import techs from "@/assets/json/techs.json";
import { Link } from "react-router-dom";
const TechsList = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2>
          <span className="font-semibold text-primary">Frontend: </span>
          {techs.frontendTechs.map((tech, index) => (
            <span key={index}>
              <Link
                to={tech.url}
                target="_blank"
                className="text-muted-foreground hover:underline"
              >
                {tech.name}
              </Link>
              {index !== techs.frontendTechs.length - 1 && " + "}
            </span>
          ))}
        </h2>
        <h2>
          <span className="font-semibold text-primary">Backend: </span>
          {techs.backendTechs.map((tech, index) => (
            <span key={index}>
              <Link
                to={tech.url}
                target="_blank"
                className="text-muted-foreground hover:underline"
              >
                {tech.name}
              </Link>
              {index !== techs.backendTechs.length - 1 && " + "}
            </span>
          ))}
        </h2>
        <div>
          with{" "}
          {techs.with.map((tech, index) => (
            <span key={index}>
              <Link
                to={tech.url}
                target="_blank"
                className="text-muted-foreground hover:underline"
              >
                {tech.name}
              </Link>
              {index !== techs.with.length - 1 && " + "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default TechsList;

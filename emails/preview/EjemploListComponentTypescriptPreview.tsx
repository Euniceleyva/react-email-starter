import { Tailwind } from "react-email";

import {
  EjemploListComponentTypescript,
  type Competencia,
} from "../components/EjemploListComponentTypescript";

const previewCompetencias: Competencia[] = [
  {
    number: 1,
    title: "Innovative Solutions",
    description:
      "We deliver innovative solutions that drive success and growth.",
  },
  {
    number: 2,
    title: "Exceptional Performance",
    description:
      "Our services deliver high-quality performance and efficiency.",
  },
];

export default function EjemploListComponentTypescriptPreview() {
  return (
    <Tailwind>
      <EjemploListComponentTypescript competencias={previewCompetencias} />
    </Tailwind>
  );
}

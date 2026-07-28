import { Tailwind } from "react-email";

import { EjemploListComponentJavascript } from "./EjemploListComponentJavascript";

const previewCompetencias = [
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

export default function EjemploListComponentJavascriptPreview() {
  return (
    <Tailwind>
      <EjemploListComponentJavascript competencias={previewCompetencias} />
    </Tailwind>
  );
}

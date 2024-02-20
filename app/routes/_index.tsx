import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Michal Mackowiak" },
    { name: "description", content: "Michał Maćkowiak - Frontend Engineer / Hobbyist Photographer / Traveler / Gamer" },
  ];
};

export default function Index() {
  return (
    <div></div>
  );
}

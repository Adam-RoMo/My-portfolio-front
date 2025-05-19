import { projects } from "@/data/projects";

export default function Projets() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mes projets</h1>
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <div className="mt-2 text-sm text-gray-500">{project.tags.join(", ")}</div>
            <a
              href={project.link}
              className="inline-block mt-4 text-blue-600 hover:underline"
              target="_blank"
            >
              Voir le projet
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

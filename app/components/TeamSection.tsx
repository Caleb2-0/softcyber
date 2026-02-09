import { teamData } from "../data/teamData";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="text-center text-4xl mb-10">
        Know our team
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}

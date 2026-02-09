"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "../data/teamData";
import { getExperience } from "../lib/getExperience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="rounded-2xl bg-white/80 backdrop-blur dark:bg-gray-800/25 p-5 shadow-sm ring-1 ring-black/5"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={50}
        height={50}
        className="w-full rounded-[50%] object-fit bg-sky-200 dark:bg-gray-800"
        unoptimized
      />

      <h3 className="mt-4 text-lg font-stretch-100%">{member.name}</h3>
      <p className="text-md text-gray-600 font-stretch-200%">{member.designation}</p>

      <p className="mt-1 text-sm text-gray-500">
        {getExperience(member.startYear)}+ years experience
      </p>

      {/* Socials */}
      <div className="mt-4 flex gap-4 text-gray-600">
        {member.socials.github && (
          <a href={member.socials.github} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {member.socials.linkedin && (
          <a href={member.socials.linkedin} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        )}
        {member.socials.twitter && (
          <a href={member.socials.twitter} target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
        {member.socials.website && (
          <a href={member.socials.website} target="_blank">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

"use client";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
}: FloatingInputProps) {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        required
        placeholder=" "
        className="
          peer
          w-full
          px-[4px] py-[7px]
          text-[16px]
          text-white
          bg-transparent
          border border-[#86bfff]
          dark:border-gray-400
          rounded-lg
          outline-none
          focus:outline-none
        "
      />

      <label
        htmlFor={id}
        className="
          absolute
          left-[10px]
          top-1/2
          -translate-y-1/2
          text-[#777]
          text-[16px]

          bg-white
          dark:bg-background
          px-[6px]

          z-10
          pointer-events-none

          transition-all
          duration-300
          ease-in-out

          peer-focus:top-[-1px]
          peer-focus:text-[14px]
          peer-focus:text-[#86bfff]

          peer-valid:top-[-1px]
          peer-valid:text-[14px]
        "
      >
        {label}
      </label>
    </div>
  );
}
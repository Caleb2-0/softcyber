"use client";

interface FloatingInputProps {
  id: string;
  label: string;
}

export default function FloatingInput({ id, label }: FloatingInputProps) {
  return (
    <div className="relative mb-4">
      <textarea
        id={id}
        rows={5}
        required
        placeholder=" "
        className="
          peer
          w-full
          px-2.5
          pt-5.5
          pb-2.5
          text-[16px]
          text-white
          bg-transparent
          border border-[#86bfff]
          dark:border-gray-400
          rounded-lg
          outline-none
          resize-none

          focus:border-[#86bfff]
        "
      />

      <label
        htmlFor={id}
        className="
          absolute
          left-[12px]
          top-[14px]
          text-[#777]
          text-[15px]

          bg-white
          dark:bg-background
          px-[6px]

          pointer-events-none
          transition-all
          duration-300
          ease-in-out

          peer-focus:top-[-8px]
          peer-focus:text-[13px]
          peer-focus:text-[#86bfff]

          peer-valid:top-[-8px]
          peer-valid:text-[13px]
        "
      >
        {label}
      </label>
    </div>
  );
}

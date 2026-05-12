import { cn } from "@/lib/utils";

export function HeroDecorator({ className, ...props }) {
  return (
    <div className={cn("group cursor-default inline-flex", className)} {...props}>
      <svg
        width="119"
        height="24"
        viewBox="0 0 118.207 23.094"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-6"
      >
        <g id="Arrows">
          {/* Central Line with Left Diamond */}
          <path
            id="Vector 20"
            d="M55.547 13.547C56.6516 13.547 57.547 12.6516 57.547 11.547C57.547 10.4424 56.6516 9.54701 55.547 9.54701V11.547V13.547ZM0 11.547L11.547 23.094L23.094 11.547L11.547 0L0 11.547ZM55.547 11.547V9.54701H11.547V11.547V13.547H55.547V11.547Z"
            className="fill-primary-ink group-hover:fill-[#33170E] transition-colors duration-300"
          />
          {/* Center Diamond */}
          <path
            id="Vector 21"
            d="M83.547 13.047C84.3754 13.047 85.047 12.3754 85.047 11.547C85.047 10.7186 84.3754 10.047 83.547 10.047L83.547 11.547L83.547 13.047ZM72.8868 11.547L81.547 20.2073L90.2073 11.547L81.547 2.88675L72.8868 11.547ZM83.547 11.547L83.547 10.047L81.547 10.047L81.547 11.547L81.547 13.047L83.547 13.047L83.547 11.547Z"
            className="fill-[#B8D2EF] group-hover:fill-[#EFD1BC] transition-colors duration-300"
          />
          {/* Right Diamond */}
          <path
            id="Vector 22"
            d="M111.547 13.047C112.375 13.047 113.047 12.3754 113.047 11.547C113.047 10.7186 112.375 10.047 111.547 10.047V11.547V13.047ZM100.887 11.547L109.547 20.2073L118.207 11.547L109.547 2.88675L100.887 11.547ZM111.547 11.547V10.047H109.547V11.547V13.047H111.547V11.547Z"
            className="fill-[#B8D2EF] group-hover:fill-[#EFD1BC] transition-colors duration-300"
          />
        </g>
      </svg>
    </div>
  );
}

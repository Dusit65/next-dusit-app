import React, { ReactElement } from "react";
type SkillCardProps = {
  icon: ReactElement<{ className?: string }>;
  title: string;
  percent: number;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function mergeClass(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SkillCard({
  icon,
  title,
  percent,
  className,
  ...rest
}: SkillCardProps) {
  const safePercent = Math.min(100, Math.max(0, percent));

  const Icon = () =>
    React.cloneElement(icon, {
      className: mergeClass(
        "h-[3.75rem] w-[3.75rem] text-white transition-colors duration-300 group-hover:text-sky-400",
        icon.props.className
      ),
    });

  return (
    <div
      {...rest}
      className={mergeClass("group flex flex-col items-center cursor-pointer", className)}
    >
      <div
        className={mergeClass(
          "grid h-40 w-30 place-items-center rounded-full",
          "border  transition-colors duration-300"
        )}
      >
        <div className="flex flex-col items-center gap-3">
          <Icon />
          <span className=" font-medium text-[#FF5C00]">
            {safePercent}%
          </span>
        </div>
      </div>

      {/* title*/}
      <p className="mt-3 text-center text-sm text-zinc-200">{title}</p>
    </div>
  );
}

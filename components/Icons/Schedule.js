import Image from "next/image";

export default function ScheduleIcon() {
  return (
    <Image
      alt="schedule"
      width={30}
      height={30}
      aria-label="schedule"
      src={"/assets/icons8-calendar-24.png"}
    />
  );
}

import Image from "next/image";

const Circles = () => {
  return (
    <div className="hidden xl:flex w-[200px] xl:w-[300px] absolute -right-4 -bottom-2 animate-pulse duration-75 z-10">
      <Image
        src={"/pochita.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt={""}
      />
    </div>
  );
};

export default Circles;

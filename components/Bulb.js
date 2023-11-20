// Image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="hidden xl:flex mix-blend-color-dodge absolute -left-26 -bottom-0  z-10 w-[300px] xl:w-[360px]">
      <Image
        src={"/casca.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt=""
      />
    </div>
  );
};

export default Bulb;

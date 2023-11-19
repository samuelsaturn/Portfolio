import Image from "next/image";

const Gato = () => {
  return (
    <div className="xl:flex w-full -right-4 -bottom-2 z-10">
      <Image
        src={"/Gato.jpg"}
        width={260}
        height={200}
        className="w-full h-full"
        alt={""}
      />
    </div>
  );
};

export default Gato;
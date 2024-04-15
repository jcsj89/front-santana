import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const ImageCard = (props: ImageCardProps) => {
  const size = 100;
  return (
    <div className="mx-6 p-8 border-2 rounded-full border-[#5d8aa8]">
      <Image
        src={props.src}
        alt={props.alt || "Imagem"}
        width={props.width || size}
        height={props.height || size}
      />
    </div>
  );
};

export default ImageCard;

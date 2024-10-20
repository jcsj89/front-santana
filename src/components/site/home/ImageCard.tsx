import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ImageCard = (props: ImageCardProps) => {
  const size = 50;
  return (
    <div className={`${props.className} flex items-center justify-center my-2`}>
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

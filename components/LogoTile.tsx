import Image, { type StaticImageData } from "next/image";

type LogoTileProps = {
  name: string;
  logo?: StaticImageData;
  variant?: "default" | "compact-left";
};

export function LogoTile({ name, logo, variant = "default" }: LogoTileProps) {
  const className = `cusec-school-item${
    variant === "compact-left" ? " cusec-logo-tile--compact-left" : ""
  }`;

  return (
    <div className={className} title={name}>
      {logo ? (
        <Image src={logo} alt={`${name} Logo`} quality={95} sizes="160px" />
      ) : (
        <span className="cusec-school-name-fallback">{name}</span>
      )}
    </div>
  );
}

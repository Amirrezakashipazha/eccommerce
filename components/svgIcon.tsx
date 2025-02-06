"use client"
import { useEffect, useState } from "react";

interface SvgIconProps {
  src: string;
  size?:string;
  color?: string; // Tailwind-compatible color, e.g., "text-blue-500"
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, color,size, className }) => {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    const fetchSvg = async () => {
      const response = await fetch(src);
      const svgText = await response.text();
      setSvgContent(svgText);
    };

    fetchSvg();
  }, [src]);

  return (
    <span
    className={`group w-[${size}px] h-[${size}px] group-[&>svg]:!w-full group-[&>svg]:!h-full ${color ? `text-${color}` : ""} ${className}`}
    dangerouslySetInnerHTML={{ __html: svgContent }}
  />
  
  );
};

export default SvgIcon;

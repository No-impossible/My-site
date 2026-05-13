
import { FOOTER_DATA } from "@/constants";

interface FooterProps {
  year?: number;
  name?: string;
  prefixText?: string;
  highlightedTexts?: Array<{ text: string; className: string }>;
}

const Footer = ({
  year = FOOTER_DATA.year,
  name = FOOTER_DATA.name,
  prefixText = FOOTER_DATA.prefixText,
  highlightedTexts = FOOTER_DATA.highlightedTexts,
}: FooterProps) => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      <div className="container mx-auto flex items-center justify-center px-4 py-6 md:px-6">
        <p className="text-center text-sm text-slate-400 md:text-base">
          © {year} <span className="font-semibold text-slate-100">{name}</span>.{" "}
          {prefixText}{" "}
          {highlightedTexts.map((item, index) => (
            <span key={index}>
              <span className={item.className}>{item.text}</span>
              {index < highlightedTexts.length - 1 && " and "}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

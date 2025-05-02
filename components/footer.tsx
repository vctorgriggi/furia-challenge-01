import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: <FaWhatsapp className="size-5" />,
    href: "https://wa.me/5511993404466",
    label: "WhatsApp",
  },
];

const mainLinks = [{ href: "/", label: "Início" }];

const legalLinks = [
  { href: "/privacy", label: "Política de Privacidade" },
  { href: "/terms", label: "Termos de Uso" },
];

export function Footer() {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <Link
            href="/"
            className="flex items-center gap-x-2"
            aria-label="FURIA"
          >
            <Image
              src="/logo2.svg"
              alt="Representação tipográfica da marca FURIA Esports, com a palavra 'FURIA' em letras maiúsculas pretas e estilizadas, com cortes angulados e aparência agressiva"
              priority
              width={500}
              height={500}
              className="h-10 w-auto"
            />
          </Link>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <Link
                    href={link.href}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <p>{`Copyright © ${new Date().getFullYear()} Victor Griggi`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

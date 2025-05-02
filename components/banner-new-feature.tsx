import { Banner } from "@/components/ui/banner";
// import { ArrowRight } from "lucide-react";

export default function BannerNewFeature() {
  return (
    <Banner variant="muted" className="dark text-foreground">
      <div className="w-full">
        <p className="text-sm text-center">
          <span className="me-1 text-base leading-none">🔥</span>
          Tecnologia e paixão pelo game: descubra a FURIA com IA
          {/* <ArrowRight
              className="-mt-0.5 ms-2 inline-flex opacity-60 transition-transform group-hover:translate-x-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            /> */}
        </p>
      </div>
    </Banner>
  );
}

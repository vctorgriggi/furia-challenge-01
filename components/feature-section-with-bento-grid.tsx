import { MessageCircle, Gamepad2, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>IA</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Experiência de jogo imersiva com IA
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Descubra uma nova dimensão de interação com a FURIA. Nossa IA
                oferece uma experiência personalizada, trazendo informações
                relevantes e atualizações em tempo real sobre jogos e eventos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <MessageCircle className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Conversa inteligente</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Converse naturalmente com nossa IA sobre jogos e eventos da
                  FURIA.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md  aspect-square p-6 flex justify-between flex-col">
              <Gamepad2 className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Resultados em tempo real
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Acesse rapidamente resultados e estatísticas ao vivo das
                  partidas.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <Trophy className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Destaques da equipe</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Saiba as últimas notícias e conquistas dos jogadores da FURIA.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <MessageCircle className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">
                  Interatividade avançada
                </h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Explore informações detalhadas com nossa IA integrada à
                  PandaScore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getFuriaTeamData, getFuriaMatches } from "@/lib/furia-api";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const team = await getFuriaTeamData();
  const { upcoming, past } = await getFuriaMatches();

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const pastFormatted = past
    // eslint-disable-next-line
    .map((m: any) => {
      const adversario = m.opponents
        // eslint-disable-next-line
        .filter((o: any) => o.opponent.name !== "FURIA")
        // eslint-disable-next-line
        .map((o: any) => o.opponent.name)
        .join(" & ");

      const placar =
        // eslint-disable-next-line
        m.results?.map((r: any) => r.score).join("x") ?? "sem resultado";
      const data = formatDate(m.begin_at);

      return `• Contra ${adversario}: ${placar} (${data})`;
    })
    .join("\n");

  const upcomingFormatted = upcoming
    // eslint-disable-next-line
    .map((m: any) => {
      const adversario = m.opponents
        // eslint-disable-next-line
        .filter((o: any) => o.opponent.name !== "FURIA")
        // eslint-disable-next-line
        .map((o: any) => o.opponent.name)
        .join(" & ");

      const data = new Date(m.begin_at).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      return `• Contra ${adversario} em ${data}`;
    })
    .join("\n");

  const SYSTEM_PROMPT = {
    role: "system",
    content: `
  Você é o assistente oficial da FURIA Esports.
  
  Seu estilo é direto, informal e com personalidade — como um torcedor apaixonado, mas articulado. Use frases curtas, linguagem de torcida, e sempre fale como quem representa o manto.
  
  Se a pergunta não for sobre a FURIA, responda com leveza, zoando de forma educada e puxando o foco de volta.
  
  Contexto atualizado:
  
  [ELENCO ATUAL]
  - Time: ${team.name}
  - Jogadores: ${
    // eslint-disable-next-line
    team.players.map((p: any) => p.name).join(", ")
  }
  
  [ÚLTIMOS JOGOS]
  ${pastFormatted || "Ainda sem jogos recentes."}
  
  [PRÓXIMOS JOGOS]
  ${upcomingFormatted || "Nenhuma partida agendada por enquanto."}
  `,
  };

  const result = streamText({
    model: openai("gpt-4o"),
    messages: [SYSTEM_PROMPT, ...messages],
  });

  return result.toDataStreamResponse();
}

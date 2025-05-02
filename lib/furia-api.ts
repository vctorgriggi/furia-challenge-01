// @ts-nocheck

import { createApiClient } from "./http";

// Pandascore API
const PANDASCORE_API_KEY = process.env.PANDASCORE_API_KEY!;
const PANDASCORE_BASE_URL = "https://api.pandascore.co";

// FURIA Team ID
const FURIA_TEAM_ID = 124530;

// Client for Pandascore API
const client = createApiClient(PANDASCORE_API_KEY, PANDASCORE_BASE_URL);

export async function getFuriaTeamData() {
  const res = await client.get(`/teams/${FURIA_TEAM_ID}`);
  return res.data;
}

export async function getFuriaMatches(limit = 5) {
  const res = await client.get(`/teams/${FURIA_TEAM_ID}/matches`);
  const matches = res.data;

  const now = new Date();

  const past = matches
    .filter((m) => new Date(m.begin_at) < now)
    .sort(
      (a, b) => new Date(b.begin_at).getTime() - new Date(a.begin_at).getTime()
    )
    .slice(0, limit);

  const upcoming = matches
    .filter((m) => new Date(m.begin_at) >= now)
    .sort(
      (a, b) => new Date(a.begin_at).getTime() - new Date(b.begin_at).getTime()
    )
    .slice(0, limit);

  return { past, upcoming };
}

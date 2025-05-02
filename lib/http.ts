import axios from "axios";

export function createApiClient(token: string, baseURL?: string) {
  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 45000, // 45 seconds
  });
}

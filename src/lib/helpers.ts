import { ApiResult } from '@/types/dto';

export interface FetcherOptions extends RequestInit {
  parseJson?: boolean;
}

export class FetchError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export const fetcher = async <T>(url: string, options?: RequestInit): Promise<ApiResult<T>> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}${url}`, options);
    if (!res.ok) {
      const text = await res.text();
      return { error: text || res.statusText };
    }
    const data = await res.json();
    return { data };
  } catch (err: unknown) {
    return { error: (err as Error).message || 'Unknown error' };
  }
};

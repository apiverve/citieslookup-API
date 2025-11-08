declare module '@apiverve/citieslookup' {
  export interface citieslookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface citieslookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class citieslookupWrapper {
    constructor(options: citieslookupOptions);

    execute(callback: (error: any, data: citieslookupResponse | null) => void): Promise<citieslookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: citieslookupResponse | null) => void): Promise<citieslookupResponse>;
    execute(query?: Record<string, any>): Promise<citieslookupResponse>;
  }
}

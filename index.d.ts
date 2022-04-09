declare module "rangeevents-api" {
    export class client {
        public token: string
        public requestHandler: RequestHandler
        public constructor(token: string)
        private _request(endpoint: string, method?: string, query: any): Promise<any>
    }

    export class APIError extends Error {
        public constructor(response: any)
        public name: string
        public status: number
        public message: string
    }

    export class RatelimitError extends Error {
        public constructor(response: any)
        public name: string
        public status: number
        public remaining: number
        public message: string
    }

    export class RequestHandler {
        public constructor(public _client: RangeEvents)
        private request(endpoint: string, method: string, query?: any): Promise<any>
    }
}
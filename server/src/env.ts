import {config} from "dotenv";

config();

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production" | "test" | "staging";

            // SERVER
            HOST: string;
            PORT: string;

            // DB
            POSTGRES_URL: string;

            // AUTH
            JWT_SECRET_KEY: string;
        }
    }
}
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_ID: string;
    readonly VITE_CLIENT_SECRET: string;
    readonly VITE_SPOTIFY_BASE_URL: string;
    readonly VITE_MOCKED_API: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

/// <reference types="vite/client" />

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_CORE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

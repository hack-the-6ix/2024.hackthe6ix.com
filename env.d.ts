import { ComponentPropsWithRef } from 'react';

interface CloudflareEnv {
  // Add here the Cloudflare Bindings you want to have available in your application
  // (for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
  //
  // KV Example:
  // MY_KV: KVNamespace
}

declare module 'react' {
  export type PolymorphicRef<T extends ElementType> =
    ComponentPropsWithRef<T>['ref'];
}

/// <reference types="vite/client" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare type SetTimeoutReturn = ReturnType<typeof setTimeout>;
declare type SetIntervalReturn = ReturnType<typeof setInterval>;
declare type SetImmediateReturn = ReturnType<typeof setImmediate>;
declare type RequestIdleCallbackReturn = ReturnType<typeof requestIdleCallback>;
declare type RequestAnimationFrameReturn = ReturnType<typeof requestAnimationFrame>;

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare global {
    var nuiHandoverData: () => void;
    var invokeNative: (native: string, ...arg: string[]) => void;

    type NullableTimer = NodeJS.Timeout | null;
}

declare type ChildrenProps = { children?: React.ReactNode };
declare type ChildrenfulReactFC = React.FC<ChildrenProps>;

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
        > & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

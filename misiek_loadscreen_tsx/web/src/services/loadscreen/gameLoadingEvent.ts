import React from "react";

export type WindowEventListener<T> = (data: T) => void;
export type WindowMessageListener = (data: any, origin: string) => void;

export type WindowEventType = string;

const loadingEventListeners: Record<string, Set<WindowEventListener<unknown>>> = Object.create(null);

interface LoadingScreenEvent {
    eventName: string,
    [key: string]: any,
}

function isLoadingScreenEvent(data: unknown): data is LoadingScreenEvent {
    if (typeof data !== 'object') {
        return false;
    }

    if (data === null) {
        return false;
    }

    return typeof (<LoadingScreenEvent>data).eventName === 'string';
}

export const onGameLoadingEvent = <DataType>(eventName: string, listener: WindowEventListener<DataType>): (() => void) => {
    if (!loadingEventListeners[eventName]) {
        loadingEventListeners[eventName] = new Set();
    }

    loadingEventListeners[eventName].add(listener);

    return () => loadingEventListeners[eventName].delete(listener);
};
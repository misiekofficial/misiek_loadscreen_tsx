import { makeAutoObservable, runInAction } from "mobx"

export const GameLoadingState = new class GameLoadingState {
    public loadingProgress = 0;
    public loadingText = '';

    constructor() {
        makeAutoObservable(this);
    }
}();

var thisCount = 0;
const handlers = {
    loadProgress(data)
    {
        GameLoadingState.loadingProgress = data.loadFraction
    },
    startInitFunction(data)
    {
        //@param [type]
    },
    startInitFunctionOrder(data)
    {
        //@param [type, order, count]

        GameLoadingState.loadingProgress = data.count;
    },
    initFunctionInvoking(data)
    {
        //@param [typ, name, idx]
        GameLoadingState.loadingText = `Invoking ${data.name}...`
    },
    initFunctionInvoked(data)
    {
        //@param [typ, name]

        GameLoadingState.loadingText = `Invoked ${data.name}...`
    },
    startDataFileEntries(data)
    {
        //@param [count]

        GameLoadingState.loadingProgress = data.count;
        console.log(GameLoadingState.loadingProgress);
    },
    performMapLoadFunction(data)
    {
        //@param [idx]

        thisCount++;
    },
    onLogLine(data)
    {
        //@param [message]
        GameLoadingState.loadingText = `${data.message}...`
    }
};

window.addEventListener('message', function(e) {
    (handlers[e.data.eventName] || function() {})(e.data);
});
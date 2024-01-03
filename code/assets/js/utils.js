// fn: function
// ms: milliseconds
export function executeFunctionWithDelay(fn, ms, param) {
    setTimeout(() => {
        if(param != null) {
            fn(param);
            return;
        }
        fn();
    }, ms);
}
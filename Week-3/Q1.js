function add(a,b) {
    return a+b;
}

const memoizeAdd = memoize(add);

// Memoize Function
function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if (cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

// To Calculate time
function time(fn) {
    console.time();
    add();
    console.timeEnd();
}

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,100));

// To Get time:

// time(()=>memoizeAdd(100,100));
// time(()=>memoizeAdd(100));
// time(()=>memoizeAdd(100,200));
// time(()=>memoizeAdd(100,100));
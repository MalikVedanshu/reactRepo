var bool = true;

setTimeout(() => {
    while (bool) {
        console.log('loading...');
        bool = false;
    }
}, 3000);


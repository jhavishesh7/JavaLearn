
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 1000);
    });
}

async function getData() {
    let data = await fetchDataPromise();
    return data;
}

let output = "Starting async operations...\n";

fetchData((data) => {
    output += `Callback: ${data}\n`;
    document.getElementById('output').textContent = output;
});

fetchDataPromise().then(data => {
    output += `Promise: ${data}\n`;
    document.getElementById('output').textContent = output;
});

getData().then(data => {
    output += `Async/Await: ${data}`;
    document.getElementById('output').textContent = output;
});

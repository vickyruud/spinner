process.stdout.write('hello from spinner2.js... \rheyyy\n');
let delay = 100;
let spinners = ['\r|  ', '\r/  ', '\r-  ','\r\\  ', '\r\|   ', '\r\/   ', '\r-   ', '\r\\  '];
for (const r of spinners) {
    setTimeout(() =>{
      process.stdout.write(r);
    }, delay)
    delay += 200;
}


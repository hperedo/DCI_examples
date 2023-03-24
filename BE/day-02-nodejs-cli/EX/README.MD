# Tasks

## Task 1
> Create a CLI program, accept three arguments from begining, :
 * row, column, char
 * node stars.js 4 3 '*'
 ```bash
        *   *   *
        *   *   *
        *   *   *
        *   *   *
 ```
  hint:
  let s = `"*\t*\t*\n*\t*\t*\n*\t*\t*\n"//==>`
  ```bash
  *    *   *
  *    *   *
  *    *   *

 ```
 bunos:
       make the edges characters in a differnt color

<hr />

## Task 2

> Create a  CLI program in nodejs, to show System Information:
file: `system-info.js`

* Operating System Type
* Operating System Release
* Operating System CPU Architecture
* CPUs Cores Count
* CPUs: for each CPU: 
    - Model
    - Speed
* Total RAM Memory (in GB)
* Free RAM Memory (in GB)
* Uptime in this format: `hh:mm:ss`

***hint:***  use `os` module:
```js
const os = require('os');
```
Read More about `os` module [here](https://nodejs.org/api/os.html)

example
```bash
node system-info.js
```
Output:
```bash
System Information:
Operating System Type: Linux
Operating System Release: 4.15.0-20-generic
Operating System CPU Architecture: x64
CPUs Cores Count: 4
CPU #1:
    Model: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz
    Speed: 2494
CPU #2:
    Model: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz
    Speed: 2494
CPU #3:
    Model: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz
    Speed: 2494
CPU #4:
    Model: Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz
    Speed: 2494
Total RAM Memory: 7.7 GB
Free RAM Memory: 1.1 GB
Uptime: 00:00:00
```


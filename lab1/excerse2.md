Excerse 2:
A. Explain why do we want sometimes to use setImmediate instead of using setTimeout?

Naha answer: 

1), setTimeout gets executed after delay in the phase of timers, and setImmediate gets executed in the phase of check. 
2) If both setTimeout(cb, 0) and setImmediate() are in the queue of event loop, then setTimeout(cb, 0)gets executed before setImmediate(). But the computer runs faster than the callback of setTimeout(cb,0) get into the queue, then setImmediate() get executed first. And setTimeout(cb, 0) has to wait for next iterate loop. 
3) If we want to something to get executed before the close phase of this current iteration of event loop, we should use setImmediate();

B. Explain the difference between process.nextTick and setImmediate?

Naha Answer:

1), process.nextTick() is not part of the event loop, it adds the callback into the 
nextTick queue. Node processes all the callbacks in the nextTick queue after 
the current operation completes and before the event loop continues. And setImmediate gets executed in phase of check which is part of the event loop.

2), process.nextTick() would block any I/O from happening if there is a recursively setting nextTick callbacks. Because the next-tick-queue is completely drained on each pass of the event loop before additional I/O is processed. 

3), A function passed to process.nextTick() gets executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate, because the phase of timers and check don't be completely drained on each pass of the event loop if there are too many callbacks in the queqe. 

4), A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but after they get into the phase, they will be both run when the event loop reachs the phase.

C. Name 10 global modules/methods available in Node environment.

1) http/https
2) url
3) querystring
4) path
5) fs
6) util
7) readline
8) stream
9) buffer
10) assert
11) cluster
12) timers
13) v8
14) vm
15) zlib
16) chlid_process
17) events
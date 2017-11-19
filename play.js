


const req = {status:404, url: '/api/login/current'}
let found = false;
whiteList()
  .forEach(x => {
    if (req.status == 404 && x.reg.test(req.url)) {
      found = true;
    }
  })

console.log(found);




function whiteList() {
  return [
    {status: 404, reg: new RegExp('^/api/login')}
  ];
}




/*
const Rx = require('rxjs');

var subject = new Rx.BehaviorSubject(0); // 0 is the initial value
var a = {};
a.subscribe = subject.subscribe.bind(subject);

a.subscribe(v => console.log('observerA: ' + v));

subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

subject.next(3);
*/

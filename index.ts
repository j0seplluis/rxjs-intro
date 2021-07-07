import { Observable, fromEvent } from "rxjs";

const emit = document.getElementById('emit');
const err = document.getElementById('error');
const complete = document.getElementById('complete')
const cancel = document.getElementById('cancel')
const print = document.getElementById('print')

print.onclick = () => console.log(subscription)

const observable = new Observable( function(subs){
  subs.next("first value")
  emit.onclick = () =>  subs.next('hello hello') 

  err.onclick = () => subs.error('something craped out')

  complete.onclick = () => subs.complete()
});

const subscription = observable.subscribe({
  next(value) {console.log(value)},
  error(e) {console.log(e)},
  complete() {console.log('completed')}
});

cancel.onclick = () => subscription.unsubscribe()
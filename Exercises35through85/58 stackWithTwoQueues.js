//problem 58 description:

/*
Stack with 2 Queues

Implement a stack using two queues:
You should implement the following functions:
- push (returns the stack)
- pop (returns the value popped)
Comment on your time complexity for push() and pop().
*/

/*
from https://cstheory.stackexchange.com/questions/2562/one-stack-two-queues/2589#2589
this is c# T is roughly equal to a string

public class Stack<T> {
    private Queue<T> first = new Queue<T>();
    private Queue<T> second = new Queue<T>();
    public void Push(T value) {
        // I'll explain what's happening in these comments. Assume we pushed
        // integers onto the stack in increasing order: ie, we pushed 1 first,
        // then 2, then 3 and so on.

        // Suppose our queues look like this:
        // first: in 5 6 out
        // second: in 1 2 3 4 out
        // Note they are both in stack order and first contains the top of
        // the stack.

        // Suppose value == 7:
        first.Enqueue(value);
        // first: in 7 5 6 out
        // second: in 1 2 3 4 out

        // We restore the stack order in first:
        for (int i = 0; i < first.Count - 1; i++)
            first.Enqueue(first.Dequeue());
        // first.Enqueue(first.Dequeue()); is executed twice for this example, the 
        // following happens:
        // first: in 6 7 5 out
        // second: in 1 2 3 4 out
        // first: in 5 6 7 out
        // second: in 1 2 3 4 out
        //me i think this means that after you enqueue an element to first you dequeue/enqueue all the other elements to get back to 'stack order'

        // first exeeded its capacity, so we merge first and second.
            //i understand what we're doing but don't get why
        if (first.Count * first.Count > second.Count) {
            while (second.Count > 0)
                first.Enqueue(second.Dequeue());    // me enqueue into first what you dequeue from second
                                                   // to empty second
            // first: in 4 5 6 7 out
            // second: in 1 2 3 out
            // first: in 3 4 5 6 7 out
            // second: in 1 2 out
            // first: in 2 3 4 5 6 7 out
            // second: in 1 out
            // first: in 1 2 3 4 5 6 7 out
            // second: in out

            Queue<T> temp = first; first = second; second = temp; 
                //me swapping?? and why?? and shouldn't there be a loop or is that a c# thing
            // first: in out
            // second: in 1 2 3 4 5 6 7 out
        }
    }
    public T Pop() {
        if (first.Count == 0) {
            if (second.Count > 0)
                return second.Dequeue();
            else
                throw new InvalidOperationException("Empty stack.");
        } else
            return first.Dequeue();
    }
}
*/

//the beginning of the starter code which we need to change:
/* 
class Stack {
    constructor() {}
    push(val) {}
    pop() {}
} */

/* KO's code (replaces the starter code above)
my solution for this exercise.

    class Stack {
        constructor() {
            this.queue = new Queue();
        }
        push(val) {
            let queue = this.queue;
            queueTwo = new Queue();
            queueTwo.enqueue(val);
            while(queue.size){
                queueTwo.enqueue(queue.dequeue());
            }       
            this.queue = queueTwo;
            return this;
        } //O(n) time complexity
     
        pop() {
            return this.queue.dequeue();
        } //O(1) time complexity
    }
 */

//Test:

var s = new Stack()
s.push(10).push(20).push(30)
s.pop() // 30
s.pop() // 20
s.pop() // 10
s.pop() // null
s.push(30).push(40).push(50)
s.pop() // 50
s.push(60)
s.pop() // 60
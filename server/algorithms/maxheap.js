class Maxheap{
constructor(){
    this.heap=[];
}

parent(i){
    return Math.floor((i-1)/2);
}

swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]];
}

insert(val){
    this.heap.push(val);
let i=this.heap.length;
    while(i>0 && this.parent(i)<this.heap[i]){
        this.swap(i,parent(i));
        i=parent(i);
    }
}

maxvalue(i){
let max=this.heap[0];
let last=this.heap.length -1;

this.heap.pop;
this.heap[0]=last;
this.heapify(0);
return max;
}

heapify(i){
let largest=i;
let left=2*largest+1;
let right=2*largest+2;
const n=this.heap.length;
if(left<n && this.heap[largest]<this.heap[left]) largest=left;
if(right<n && this.heap[largest]<this.heap[right]) largest=right;

if(largest!=i){
    this.swap(this.heap[i],this.heap[largest]);
    this.heapify(largest);
}
}
}
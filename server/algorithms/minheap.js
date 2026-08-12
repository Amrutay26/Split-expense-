class Minheap{
constructor(){
    this.heap=[];
}

parent(i){
return Math.floor((i-1)/2);
}


swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
}
insert(val){
this.heap.push(val);
let i=this.heap.length-1;
while(i>0 && this.heap[this.parent(i)] > this.heap[i]){
this.swap(i,this.parent(i));
i=this.parent(i);
}
}

heapify(i){
    let smallest=i;
    let left=2*i+1;
    let right=2*i+2;
const n = this.heap.length;
    if(left<n && this.heap[left]<this.heap[i]){
        smallest=left;
    }
    if(right<n && this.heap[right]<this.heap[i]){
        smallest=right;
    }
if(smallest!=i){
    this.swap(this.heap[i],this.heap[smallest]);
    heapify(smallest);
}
}

 minvalue(){

if(this.heap.length===0) return null;
    const min = this.heap[0];
    const last = this.heap.pop();     

    if (this.heap.length > 0) {
      this.heap[0] = last;           
      this.heapify(0);                
    }

}
}
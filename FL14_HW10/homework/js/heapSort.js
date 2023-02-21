console.log('Heap sort');

function heapSort(arr){
    let len = arr.length,
        end = len;

    heapify(arr, len);

    while(end > 0){
        swap(arr, --end, 0);
        siftDown(arr, 0, end);
    }
    return arr;
}
function heapify(arr, len){
    let mid = Math.floor((len-2)/2);
    while(mid > 0){
        siftDown(arr, --mid, len-1);
    }
}
function siftDown(arr, start, end){
    let root = start,
        child = root*2,
        toSwap = root;
    while(child <= end){
        if(arr[toSwap] < arr[child]){
            swap(arr, toSwap, child);
        }
        if(child+1 <= end && arr[toSwap] < arr[child+1]){
            swap(arr, toSwap, child+1)
        }
        if(toSwap !== root){
            swap(arr, root, toSwap);
            root = toSwap;
        } else{
            return;
        }
        toSwap = root;
        child = root*2+1
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


console.log(heapSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(heapSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]
console.log(heapSort([1,2,3,4,5,6])); //[1, 2, 3, 4, 5, 6]

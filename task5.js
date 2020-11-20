// 5) Создать новые методы для всех массивов:
// - myForEach - тот же самый forEach
// - myMap - тот же самый map
// - mySort - тот же самый sort
// - myFilter
// - myFind
// Внутри нельзя использовать готовые методы массива, никакие

const arr = [5, 0, 6, 1, 2, 8, 8, 2, 4, 3, 1, 12, 3, 2, 5, 12, 34, 43];

// _______ task5.1 - myForEach

function test(i_) {
    console.log(i_);
}

function myForEach(arr) {
    for (let i = 0; i < arr.length; i++) {
        test(i);
    }
}

console.log(arr);

// _______ task5.2 - myMap

let myMapCallback = function(i){
    return i*(-1);
}

function myMap(arr, Callback) {
    for(let i = 0; i < arr.length; i++){
        arr[i] = Callback(arr[i]);
    }
    return arr;
}

console.log(myMap(arr, myMapCallback)); 

// _______ task5.3 - mySort

function swap(items, firstIndex, secondIndex) {
    let temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function stringConvert(item) {
    for (let i = 0; i < item.length; i++) {
        item[i] = item[i].toString();
    }
    return item;
}

function mySort(arr) {
    let items = stringConvert(arr);
    let len = items.length,
        i, j, stop;
    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (items[j] > items[j + 1]) {
                swap(items, j, j + 1);
            }
        }
    }
    return items;
}

console.log(mySort(arr));

// _______ task5.4 - myFilter

let condition = function (i) {
    if (i % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function myFilter(arr, condition) {
    let res = [];
    
    for (let i = 0, j = 0; i < arr.length; i++) {
        if(condition(arr[i])){
            res[j] = arr[i];
            j++;
        }
        else{
            continue;
        }
    }
    return res;
}

let qwe = myFilter([1, 2, 3, 4, 5, 6, 7], condition);
console.log(qwe);

// _______ task5.5 - myFind

function myFind(item, index, array){
    if(array[index] === item){
        return true
    }
    else{
        return false;
    }
}

console.log(myFind(5, 0, arr));

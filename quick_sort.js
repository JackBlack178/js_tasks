function QuickSort(List) {
    if (List.length <= 1) {
        return List;
    }

    const pivot = List[List.length - 1];
    const leftList = [];
    const rightList = [];

    for (let i = 0; i < List.length - 1; i++) {
        if (List[i] < pivot) {
            leftList.push(List[i]);
        }
        else {
            rightList.push(List[i])
        }
    }

    return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}

const arr = [1, -5, 10, -2, 3, 5, 0, 9, 4, 12, -6]

console.log(QuickSort(arr))
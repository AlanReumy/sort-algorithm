function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let temp = arr[i]
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr
}

function shellSort(arr) {
  let len = arr.length
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i
      let current = arr[i]
      while (j - gap >= 0 && current < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = current
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr
  }

  // Determine minimum and maximum values
  var i
  var minValue = arr[0]
  var maxValue = arr[0]
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }

  // Initialize buckets
  var DEFAULT_BUCKET_SIZE = 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  var buckets = new Array(bucketCount)
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = []
  }

  // Distribute input array values into buckets
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i])
  }

  // Sort buckets and place back into input array
  arr.length = 0
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])
    for (var j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j])
    }
  }

  return arr
}

function radixSort(arr) {
  let maxDigit = getMaxDigit(arr)
  for (let digit = 1; digit <= maxDigit; digit++) {
    arr = bucketSort(arr, digit)
  }
  return arr
}

function getMaxDigit(arr) {
  let maxDigit = 1
  let base = 10
  for (let i = 0; i < arr.length; i++) {
    let temp = 1
    let num = arr[i]
    while (num >= base) {
      num = Math.floor(num / base)
      temp++
    }
    if (temp > maxDigit) {
      maxDigit = temp
    }
  }
  return maxDigit
}

const arr = [4, 5, 1, 3, 2, 7, 6, 0]

console.log(insertionSort(arr))
console.log(bucketSort(arr))
console.log(bubbleSort(arr))
console.log(selectionSort(arr))
console.log(radixSort(arr))
console.log(mergeSort(arr))
console.log(shellSort(arr))
console.log(quickSort(arr))


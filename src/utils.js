export const queryString = (obj) => Object.keys(obj).map(k => `${k}=${encodeURIComponent(obj[k])}`).join('&');

export const chunk = (arr, size) => {
    let rows = [];
    for(let i = 0; i < arr.length; i = i + size) {
        let row = [];

        for(let j = 0; j < size; j++) {
            if (i + j < arr.length)
            row.push(arr[i + j]);
        }

        rows.push(row);
    }

    return rows;
};

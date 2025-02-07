export function isPrimary(key) {
    return key !== '+' ? key : false
}

export function flattenArray(headers = [], rows = []) {
    const keys = headers.map(item => (item.key)).filter(item => item.includes("."));
   // console.log(keys)
    return rows.map((row) => {
        const nestedObjects = {}
        keys.forEach((key) => {
            let colValue = undefined;
            const nestedKeys = key.split(".");
            nestedKeys.forEach((nestedKey) => {
                if (!colValue) {
                    colValue = row[nestedKey];
                } else {
                    colValue = colValue[nestedKey] || undefined;
                }
                console.log(nestedKey,colValue)
            })
            nestedObjects[key] = colValue;
        })
        //console.log(nestedObjects)
        return {
            ...row,
            ...nestedObjects
        }
    })
    //console.log(fRows)
}

export function paginationHandler(currentPage, totalNumberPages) {
    currentPage = currentPage > totalNumberPages ? totalNumberPages : currentPage;
    const arr = new Array(totalNumberPages).fill(0).map((_, i) => i + 1);
    const index = Math.max((currentPage - 1) - 2, 0);

    const shifter = Math.max((((totalNumberPages - currentPage) - totalNumberPages) * -1) - totalNumberPages + 2, 0)
    const indx = index > arr.length - 5 ? index - shifter : index;
    const sliced = arr.slice(indx, index + 5);
    const pages = sliced.map((item, index, arr) => {

        const label = (index == 0 && item !== 1 && item !== 2) ? "..." : (index == arr.length - 1 && item !== totalNumberPages && item !== totalNumberPages - 1) ? "..." : item;
        return {
            value: item,
            label: label
        }
    })

    const firstItem = pages[0] || undefined;
    const lastItem = pages[pages.length - 1] || undefined;

    if(firstItem && (firstItem.label === "..." ||  firstItem.value !== 1)){
        pages.unshift({label:1,value:1})
    }

    if(lastItem && (lastItem.label === "..." ||  lastItem.value !== totalNumberPages)){
        pages.push({label:totalNumberPages,value:totalNumberPages})
    }
    return pages.map((item)=>({...item,isActive:item.value === currentPage}))
}
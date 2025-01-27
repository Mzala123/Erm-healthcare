export function isPrimary(key) {
    return key !== '+' ? key : false
}


export function flattenArray(headers = [], rows = []) {
    const keys = headers.map(item => (item.key)).filter(item => item.includes("."));
    console.log(keys)

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
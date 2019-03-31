export default (keys, namespace) =>
    Object.keys(keys).reduce((acc, key) => {
        acc[key] = namespace ? `${namespace}@${key}` : key;
        console.log(acc)
        return acc;
    }, {})


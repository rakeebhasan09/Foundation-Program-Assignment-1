function describeValue(value) {
    if (value) {
        return `${typeof value} | truthy`;
    } else {
        return `${typeof value} | falsy`;
    }
}
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

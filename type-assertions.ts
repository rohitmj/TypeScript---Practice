let data: any = "Hello, TypeScript!";

function getStringLength(value: any): number{
    return (value as string).length;
}

console.log(getStringLength(data));
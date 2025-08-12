type TypeName<T> =
    T extends string ? "string":
    T extends number ? "number":
    T extends boolean? "boolean":
    "object";

type IsString<T> = T extends string? "Yes" : "No";
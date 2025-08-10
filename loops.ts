const books = {
    "TypeScript Basics": "T. Author",
    "Advanced TypeScript": "A. Expert",
    "TypeScript Projects": "P. Builder"
};

for (let book in books) {
    console.log (book,books[book]);
}
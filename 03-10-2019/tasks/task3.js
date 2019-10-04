// Mamy tablicę:

// Posegreguj tą tablicę po rozszerzeniach plików.

const files = [
    "zdjecie.jpg",
    "wakacje.jpg",
    "kolekcja.filmow.jpg",
    "mem.gif",
    "wpis.na.blog.txt",
    "auto.png",
    "archiwum.zip",
    "dokument.txt",
    "paczka.zip",
    "kwiatek.png",
];

files.sort((a, b) => {
     const filesA = a.substr(a.indexOf("."));
     const filesB = b.substr(b.indexOf("."));
     return filesA.localeCompare(filesB);
});

console.log(files);



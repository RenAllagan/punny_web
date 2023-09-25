let content = {
            
    "status" : true,
    "title" : "Memory",
    "data" : "Memori adalah urutan byte yang berisi sepotong kecil informasi. Informasi ini mungkin menjadi perintah untuk mengatakan pada computar apa yang harus dilakukan. Sel mungkin berisi data yang diperlukan computar untuk melakukan suatu perintah. Setiap slot mungkin berisi salah satu, dan apa yang sekarang menjadi data mungkin saja kemudian menjadi perintah. Ukuran masing-masing sel, dan jumlah sel, berubah secara hebat dari computar ke computar, dan teknologi dalam pembuatan memori sudah berubah secara hebat - dari relay elektromekanik, ke tabung yang diisi dengan air raksa di mana pulsa akustik terbentuk, sampai matriks magnet permanen, ke setiap transistor, ke sirkuit terpadu dengan jutaan transistor di atas satu chip silikon.",
}

let title = document.getElementById("title")
let data = document.getElementById("data")
let count = document.getElementById("count")

let title_content = content.title
let data_content = content.data.replaceAll("computar", "komputer")
let count_sentences = content.data.split(".").length -1

title.innerHTML = title.innerHTML + title_content
data.innerHTML = data.innerHTML + data_content
count.innerHTML = count.innerHTML + count_sentences
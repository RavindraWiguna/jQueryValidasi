// validate form with jquery when document is ready
$(document).ready(function() {
    console.log("ready!");
    /*
    NIM
    NAMA
    ALAMAT
    TANGGAL LAHIR
    UMUR
    ALAMAT EMAIL
    ALAMAT SITUS
    PASSWORD 
    ULANGI PASSWORD
    */
    $("#form").validate({
        rules: {
            nim: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            nama: {
                required: true,
                minlength: 5,
                maxlength: 50
            },
            alamat: {
                required: true,
                minlength: 5,
                maxlength: 100
            },
            tanggal_lahir: {
                required: true,
                date: true
            },
            umur: {
                required: true,
                number: true,
                min: 17,
                max: 50
            },
            email: {
                required: true,
                email: true
            },
            situs: {
                required: true,
                url: true
            },
            password: {
                required: true,
                minlength: 8,
            },
            ulangi_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            nim: {
                required: "NIM harus diisi",
                minlength: "NIM harus 10 karakter",
                maxlength: "NIM harus 10 karakter"
            },
            nama: {
                required: "Nama harus diisi",
                minlength: "Nama minimal 5 karakter",
                maxlength: "Nama maksimal 50 karakter"
            },
            alamat: {
                required: "Alamat harus diisi",
                minlength: "Alamat minimal 5 karakter",
                maxlength: "Alamat maksimal 100 karakter"
            },
            tanggal_lahir: {
                required: "Tanggal lahir harus diisi",
                date: "Format tanggal lahir salah"
            },
            umur: {
                required: "Umur harus diisi",
                number: "Umur harus berupa angka",
                min: "Umur minimal 17 tahun",
                max: "Umur maksimal 50 tahun"
            },
            email: {
                required: "Email harus diisi",
                email: "Format email salah"
            },
            situs: {
                required: "Situs harus diisi",
                url: "Format situs salah"
            },
            password: {
                required: "Password harus diisi",
                minlength: "Password minimal 8 karakter"
            },
            ulangi_password: {
                required: "Ulangi password harus diisi",
                equalTo: "Ulangi password harus sama dengan password"
            }
        }
    });
});
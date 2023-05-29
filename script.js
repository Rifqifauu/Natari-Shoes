// Mendapatkan elemen-elemen yang ingin diubah
var cityElement = document.getElementById('city');
var partnerElement = document.getElementById('partner');
var customersElement = document.getElementById('customers');

// Fungsi untuk mengubah angka secara acak
// Fungsi untuk mengubah angka secara acak
function changeNumber(element, targetNumber) {
    var currentNumber = parseInt(element.textContent.replace(/[^\d]/g, '')); // Mengambil angka dari teks saat ini
    var increment = Math.ceil(targetNumber / 100); // Perubahan inkremen yang diterapkan pada setiap langkah (membulatkan ke atas)
    var stepCount = 0;
    var suffix = getSuffix(element); // Mendapatkan string tambahan berdasarkan elemen

    var incrementIntervalId = setInterval(function() {
        currentNumber += increment;
        element.textContent = currentNumber.toLocaleString() + suffix; // Menampilkan angka yang diformat dengan string tambahan

        stepCount++;

        if (stepCount >= 30) {
            clearInterval(incrementIntervalId); // Menghentikan perubahan angka bertahap
            element.textContent = targetNumber.toLocaleString() + suffix; // Menampilkan angka target yang diformat dengan string tambahan
        }
    }, 50);
}


// Fungsi untuk mendapatkan string tambahan berdasarkan elemen
function getSuffix(element) {
    if (element.id === 'city') {
        return ' City';
    } else if (element.id === 'partner') {
        return ' Partner';
    } else if (element.id === 'customers') {
        return 'K Customers';
    }

    return '';
}

// Memulai perubahan angka secara acak dengan waktu delay
setTimeout(function() {
    changeNumber(cityElement, 50); // Mengubah angka acak di div "city" menjadi 20
    changeNumber(partnerElement, 150); // Mengubah angka acak di div "partner" menjadi 200
    changeNumber(customersElement, 800); // Mengubah angka acak di div "customers" menjadi 8--
}, 1500);
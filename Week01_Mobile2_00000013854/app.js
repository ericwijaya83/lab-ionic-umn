let pengeluaran = [];
let totalBiayaPengeluaran = 0;

async function showAlert() {
    const ionAlert = document.querySelector('ion-alert-controller');

    const alert = await ionAlert.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran.',
        buttons: ['Tutup']
    });

    return await alert.present();
}

function tambahPengeluaran() {
    let nama = document.getElementById("namaPengeluaran").value;
    let jumlah = document.getElementById("jumlahPengeluaran").value;

    if (nama == '' || jumlah == '') {
        showAlert();
        return false;
    }

    let data = {};
    data.nama = nama;
    data.jumlah = jumlah;

    pengeluaran.push(data);

    let item = "";
    let i;

    for (i = 0; i < pengeluaran.length; i++) {
        item += "<ion-item>" + pengeluaran[i].nama + ": Rp. " + pengeluaran[i].jumlah + ",00" + "</ion-item>";
    }

    totalBiayaPengeluaran += parseInt(data.jumlah);

    document.getElementById("printBiayaPengeluaran").innerHTML = item;
    document.getElementById("printTotalPengeluaran").innerHTML = "Total Pengeluaran: Rp. " + totalBiayaPengeluaran + ",00";

    hapusPengeluaran();
}

function hapusPengeluaran() {
    let nama = document.getElementById("namaPengeluaran");
    let jumlah = document.getElementById("jumlahPengeluaran");

    nama.value = "";
    jumlah.value = "";
}
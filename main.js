/**
 * Bài 1 : Quản lý tuyển sinh
 */
function tinhDiem(event) {
    event.preventDefault();

    var diemChuanHD = document.getElementById("diemChuanHD").value;
    var mon1 = document.getElementById("mon1").value;
    var mon2 = document.getElementById("mon2").value;
    var mon3 = document.getElementById("mon3").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;

    if (diemChuanHD === "" || diemChuanHD < 0){
        alert("Nhập điểm chuẩn hội đồng không hợp lệ");
        return 0;
    } 
    if (mon1 === "" || mon1 < 0){
        alert("Nhập điểm môn thứ nhất không hợp lệ");
        return 0;
    } 
    if (mon2 === "" || mon2 < 0){
        alert("Nhập điểm môn thứ hai không hợp lệ");
        return 0;
    } 
    if (mon3 === "" || mon3 < 0){
        alert("Nhập điểm môn thứ ba không hợp lệ");
        return 0;
    } 
    if (khuVuc != "A" && khuVuc != "B" && khuVuc != "C" && khuVuc != "X"){
        alert("Nhập khu vực không hợp lệ");
        return 0;
    } 
    if (doiTuong != "1" && doiTuong != "2" && doiTuong != "3" && doiTuong != "0"){
        alert("Nhập đối tượng không hợp lệ");
        return 0;
    } 

    diemChuanHD = parseFloat(diemChuanHD);
    mon1 = parseFloat(mon1);
    mon2 = parseFloat(mon2);
    mon3 = parseFloat(mon3);
    

    switch (khuVuc) {
        case "A" :
            khuVuc = 2;
            break;
        case "B" :
            khuVuc = 1;
            break;
        case "C":
            khuVuc = 1;
            break;
        case "X":
            khuVuc = 0;
            break;
    }
    khuVuc = parseInt(khuVuc);
    switch (doiTuong) {
        case "1":
            doiTuong = 2.5;
            break;
        case "2":
            doiTuong = 1.5;
            break;
        case "3":
            doiTuong = 1;
            break;
        case "0":
            doiTuong = 0;
            break;
        default:
    }
    console.log(mon1 +  mon2 + mon3);
    doiTuong = parseFloat(doiTuong);
    console.log(khuVuc);
    console.log(doiTuong);
    var thongBao = "";
    var diemUuTien = khuVuc + doiTuong;
    diemUuTien = parseFloat(diemUuTien);
    console.log(diemUuTien);
    var diemTong = mon1 + mon2 + mon3 + diemUuTien ;
    
    console.log(diemTong);

    if (mon1 != 0 && mon2 !=0 && mon3!=0) {
        if(diemTong >= diemChuanHD){
             thongBao = "Tổng điểm của bạn : " 
        + diemTong + "<br>Chúc mừng bạn trúng tuyển";
        }
        else{
            thongBao = "Tổng điểm của bạn : " 
            + diemTong + "<br>Bạn không đủ điểm trúng tuyển"; 
        }
       
    } else{
        thongBao = "Tổng điểm của bạn : " 
        + diemTong + "<br>Bạn không đủ điều kiện trúng tuyển do có môn 0 điểm";  
    }
    console.log(thongBao);
    document.getElementById("cardFooter").innerHTML = thongBao;
    document.getElementById("cardFooter").style.display = "block";

}

/**
 * Bài 2 :  Tính tiền điện
 */
function tinhTienDien(event){
    var ten = document.getElementById("ten").value;
    var soKw = document.getElementById("soKw").value;
    if(ten === ""){
        alert("Vui lòng nhập thông tin tên");
        return 0;
    }
    if(soKw === "" || soKw < 0){
        alert("Số KW không hợp lệ");
        return 0;
    }
    soKw = parseInt(soKw);
    var tienThanhToan = 0;
    if( 0 <= soKw && soKw <=50 ){
        tienThanhToan = 500*soKw;
    } 
    else if(50 < soKw && soKw <=100){
        tienThanhToan = 500*50 + (soKw -50)*650;
    }  
    else if(100 < soKw && soKw  <=200){
        tienThanhToan = 500*50 + 50*650 + (soKw-100)*850;
    }  
    else if(200 < soKw && soKw <= 350){
        tienThanhToan = 500*50 + 50*650 + 100*850 + (soKw-200)*1100;
    } 
    else {
        tienThanhToan = 500*50 + 50*650 + 100*850 + 150*1100 + (soKw -350)*1300;
    }
    console.log(tienThanhToan);
    document.getElementById("hienThiTienDien").innerHTML = "Số tiền phải trả : " + tienThanhToan.toLocaleString() + " VNĐ";
    document.getElementById("hienThiTienDien").style.display = "block";
}

/**
 * Bài 3 : Tính tiền cáp
 */
function tinhTienCap(event){
    event.preventDefault();
    
    var maKH = document.getElementById("maKH").value;
    console.log(maKH);
    var stk = document.getElementById("stk").value;
    var soKetNoiThem = document.getElementById("soKetNoiThem").value;
    var soKenhCaoCap = document.getElementById("soKenhCaoCap").value;
    maKH = parseInt(maKH);
    console.log(maKH);
    soKenhCaoCap = parseInt(soKenhCaoCap);
    soKetNoiThem = parseInt(soKetNoiThem);
    var tongTien = 0;
    if(maKH == 1){
        tongTien = 4.5 + 20.5 + soKenhCaoCap*7.5;
    }
    if(maKH == 2){    
        tongTien = 15 + 75 + soKetNoiThem*5 + soKenhCaoCap*50;
           
    }
    console.log(tongTien);
    if(maKH = "" || (maKH != 1 && maKH != 2)){
        alert("Nhập mã khách hàng không hợp lệ");
        return;
    }
    document.getElementById("hienThiTienCap").innerHTML = "Số tiền phải thành toán : " + tongTien + "$";
    document.getElementById("hienThiTienCap").style.display = "block";

}


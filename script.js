alert('Chào cậu, chúc một ngày tốt lành')
function nhapTuoi() {
    var tuoi;
do {
    tuoi = prompt('Cấm trẻ dưới 18. Vui lòng nhập tuổi');
    if (tuoi < 18 && tuoi !== null)
{
    setTimeout(function() {
    alert('Chưa đủ tuổi đòi vào');
    nhapTuoi()
}, 3000)
}

    else if (tuoi>=18)
{
    setTimeout(function() {
    alert('Đã đủ tuổi đi tù');
    nhapTuoi()
},3000)
    
}
} while (tuoi < 18 && tuoi !== null); }
nhapTuoi();
const $list = document.querySelectorAll('li');

function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('active')
    });
    this.classList.add('active');
}

$list.forEach(($li) => {
    $li.addEventListener(
        'click',
        activeLink,
    );
});
alert('Chào cậu, chúc một ngày tốt lành')
var tuoi = prompt('Cấm trẻ dưới 18. Vui lòng nhập tuổi')
    if (tuoi < 18)
{
    setTimeout(function() {
    alert('Đã đủ tuổi đâu :))?')
}, 3000)
}

    else
{
    setTimeout(function() {
    alert('Đã đủ tuổi đi tù')},3000)
}
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
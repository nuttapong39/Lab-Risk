// ทบทวนและลงนามรับทราบ — สาธิตการเปลี่ยนสถานะ (ยังไม่บันทึกลงฐานข้อมูล)
(function () {
  var btn = document.getElementById('signBtn');
  btn.addEventListener('click', function () {
    document.getElementById('signBtnWrap').hidden = true;
    document.getElementById('signedWrap').hidden = false;
    var dot = document.getElementById('dot');
    dot.style.background = '#0B7A70';
    dot.style.border = '0';
    document.getElementById('lastStep').textContent = 'ผู้จัดการคุณภาพรับทราบแล้ว';
    document.getElementById('lastWhen').textContent = '27 พ.ย. 2569';
  });
})();

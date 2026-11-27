// รายการความเสี่ยง — ข้อมูลตัวอย่างสำหรับ Mockup (ยังไม่เชื่อมฐานข้อมูล)
(function () {
  var T = '#0B7A70', B = '#1E6FD9', O = '#A65F00', R = '#C62828', S = '#4A6A8A';
  var WAIT = { bg: '#FFF4E0', fg: '#8A4F00' };
  var DONE = { bg: '#E3F5F2', fg: '#0B6158' };

  var rows = [
    { no: 'RM-6911-012', date: '27 พ.ย. 2569', title: 'ติดสติกเกอร์ชื่อผิดหลอด พบก่อนวิเคราะห์', kind: 'Clinic', level: 'B', color: T, status: 'รอรับทราบ', st: WAIT },
    { no: 'RM-6911-011', date: '25 พ.ย. 2569', title: 'รายงานผลค่าวิกฤตล่าช้ากว่าเกณฑ์', kind: 'Clinic', level: 'D', color: B, status: 'รอรับทราบ', st: WAIT },
    { no: 'RM-6911-010', date: '22 พ.ย. 2569', title: 'ตู้เย็นเก็บน้ำยาอุณหภูมิเกินช่วง', kind: 'Non clinic', level: 'ปานกลาง', color: O, status: 'รอรับทราบ', st: WAIT },
    { no: 'RM-6911-009', date: '18 พ.ย. 2569', title: 'เจาะเลือดซ้ำเนื่องจากสิ่งส่งตรวจแข็งตัว', kind: 'Clinic', level: 'C', color: B, status: 'รับทราบแล้ว', st: DONE },
    { no: 'RM-6911-008', date: '12 พ.ย. 2569', title: 'พบถุงมือหมดสต็อกก่อนรอบเบิก', kind: 'Non clinic', level: 'Near miss', color: S, status: 'รับทราบแล้ว', st: DONE },
    { no: 'RM-6911-007', date: '5 พ.ย. 2569', title: 'เข็มตำมือเจ้าหน้าที่ขณะทิ้งขยะติดเชื้อ', kind: 'Clinic', level: 'E', color: O, status: 'รับทราบแล้ว', st: DONE }
  ];

  var tbody = document.getElementById('rows');

  function td(text, style) {
    var c = document.createElement('td');
    if (style) c.style.cssText = style;
    if (text != null) c.textContent = text;
    return c;
  }

  rows.forEach(function (r) {
    var tr = document.createElement('tr');
    tr.appendChild(td(r.no, 'font-weight:600;color:#1E6FD9'));
    tr.appendChild(td(r.date, 'color:#33506F'));
    tr.appendChild(td(r.title));
    tr.appendChild(td(r.kind, 'color:#33506F'));

    var lv = td();
    var badge = document.createElement('span');
    badge.style.cssText = 'display:inline-flex;min-width:32px;justify-content:center;padding:4px 10px;border-radius:10px;color:#FFFFFF;font-weight:600;font-size:14px;background:' + r.color;
    badge.textContent = r.level;
    lv.appendChild(badge);
    tr.appendChild(lv);

    var stc = td();
    var chip = document.createElement('span');
    chip.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;font-size:13px;font-weight:600;background:' + r.st.bg + ';color:' + r.st.fg;
    chip.textContent = r.status;
    stc.appendChild(chip);
    tr.appendChild(stc);

    var act = td();
    var a = document.createElement('a');
    a.href = 'review.html';
    a.style.cssText = 'display:inline-flex;align-items:center;gap:6px;font-weight:600;font-size:14px';
    a.textContent = 'เปิดดู ›';
    act.appendChild(a);
    tr.appendChild(act);

    tbody.appendChild(tr);
  });
})();

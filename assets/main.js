// แบบบันทึกความเสี่ยง — เลือกประเภทและระดับความเสี่ยง (ตามแบบฟอร์ม F-LAB-025)
(function () {
  var T = '#0B7A70', B = '#1E6FD9', O = '#A65F00', R = '#C62828', S = '#4A6A8A';

  var LEVELS = {
    clinic: [
      { code: 'A', group: 'ยังไม่เกิดเหตุ', color: T, desc: 'เหตุการณ์ซึ่งมีโอกาสที่จะก่อให้เกิดความเสี่ยง' },
      { code: 'B', group: 'ยังไม่ถึงตัว', color: T, desc: 'เกิดความเสี่ยงขึ้นแต่ยังไม่ถึงกับผู้ป่วย/เจ้าหน้าที่' },
      { code: 'C', group: 'ไม่เป็นอันตราย', color: B, desc: 'เกิดความเสี่ยงกับผู้ป่วย/เจ้าหน้าที่ แต่ไม่ทำให้ได้รับอันตราย' },
      { code: 'D', group: 'ต้องเฝ้าระวัง', color: B, desc: 'เกิดความเสี่ยงแล้ว ไม่เป็นอันตราย แต่ต้องเฝ้าระวังเพื่อไม่ให้เกิดอันตราย' },
      { code: 'E', group: 'อันตรายชั่วคราว', color: O, desc: 'เป็นอันตรายชั่วคราว และต้องมีการรักษาแก้ไขเพิ่มเติม' },
      { code: 'F', group: 'อันตรายชั่วคราว', color: O, desc: 'เป็นอันตรายชั่วคราว และต้องนอนหรืออยู่ ร.พ. นานขึ้น' },
      { code: 'G', group: 'อันตรายถาวร', color: R, desc: 'ส่งผลให้เกิดอันตรายถาวรแก่ผู้ป่วย/เจ้าหน้าที่' },
      { code: 'H', group: 'ต้องช่วยชีวิต', color: R, desc: 'ส่งผลให้ต้องทำการช่วยชีวิต' },
      { code: 'I', group: 'อาจเสียชีวิต', color: R, desc: 'อาจเป็นสาเหตุของการเสียชีวิต' }
    ],
    non: [
      { code: 'Near miss', group: 'เกือบเกิด', color: S, desc: 'ความเสี่ยงที่พบแต่ยังไม่เกิดเหตุการณ์ หรือเกือบเกิดความเสี่ยง' },
      { code: 'ต่ำ', group: 'ความรุนแรงต่ำ', color: T, desc: 'ไม่ทำให้องค์กร/หน่วยงานเสียหาย เจ้าหน้าที่ไม่ได้รับอันตราย มูลค่าไม่เกิน 5,000 บาท' },
      { code: 'ปานกลาง', group: 'ความรุนแรงปานกลาง', color: O, desc: 'การปฏิบัติงานขัดข้อง ใช้เวลาแก้ไขมากกว่า 1 วัน มูลค่า 5,000–100,000 บาท' },
      { code: 'สูง', group: 'ความรุนแรงสูง', color: R, desc: 'งานเสียหาย/เสียชื่อเสียง ใช้เวลาแก้ไขมากกว่า 7 วัน มูลค่ามากกว่า 100,000 บาท' }
    ]
  };

  var state = { kind: 'clinic', level: 'C' };

  var grid = document.getElementById('levels');
  var tabClinic = document.getElementById('tabClinic');
  var tabNon = document.getElementById('tabNon');
  var selCode = document.getElementById('selCode');
  var selDesc = document.getElementById('selDesc');

  function el(tag, style, text) {
    var e = document.createElement(tag);
    if (style) e.style.cssText = style;
    if (text != null) e.textContent = text;
    return e;
  }

  function styleTab(btn, active) {
    btn.style.background = active ? '#FFFFFF' : 'transparent';
    btn.style.color = active ? '#1E6FD9' : '#5B7491';
    btn.style.fontWeight = active ? '600' : '400';
    btn.style.boxShadow = active ? '0 2px 8px rgba(15,42,74,0.08)' : 'none';
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  }

  function render() {
    var list = LEVELS[state.kind];
    grid.textContent = '';
    list.forEach(function (x) {
      var selected = x.code === state.level;
      var btn = el('button',
        'text-align:left;font:inherit;color:#0F2A4A;cursor:pointer;padding:14px;border-radius:16px;display:flex;gap:12px;align-items:flex-start;' +
        (selected ? 'border:2px solid ' + x.color + ';background:#F2F8FF;box-shadow:0 8px 20px rgba(30,111,217,0.16)'
                  : 'border:2px solid #E1ECF8;background:#FFFFFF'));
      btn.type = 'button';
      btn.setAttribute('aria-pressed', selected ? 'true' : 'false');
      btn.appendChild(el('span',
        'flex:none;min-width:40px;height:40px;padding:0 8px;box-sizing:border-box;border-radius:12px;color:#FFFFFF;font-family:Prompt,sans-serif;font-weight:600;font-size:17px;display:flex;align-items:center;justify-content:center;background:' + x.color,
        x.code));
      var txt = el('span', 'display:flex;flex-direction:column;gap:4px');
      txt.appendChild(el('span', 'font-size:12px;font-weight:600;color:' + x.color, x.group));
      txt.appendChild(el('span', 'font-size:14px;line-height:1.5', x.desc));
      btn.appendChild(txt);
      btn.addEventListener('click', function () { state.level = x.code; render(); });
      grid.appendChild(btn);
    });

    var sel = list.filter(function (x) { return x.code === state.level; })[0];
    selCode.textContent = sel ? sel.code : '—';
    selCode.style.background = sel ? sel.color : '#8AA3BF';
    selDesc.textContent = sel ? sel.desc : 'ยังไม่ได้เลือกระดับความเสี่ยง';

    styleTab(tabClinic, state.kind === 'clinic');
    styleTab(tabNon, state.kind === 'non');
  }

  tabClinic.addEventListener('click', function () { state = { kind: 'clinic', level: 'C' }; render(); });
  tabNon.addEventListener('click', function () { state = { kind: 'non', level: 'Near miss' }; render(); });

  render();
})();

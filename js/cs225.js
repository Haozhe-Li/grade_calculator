function runCS225() {
    const mp = document.getElementById("mp").value;
    const lab = document.getElementById("lab").value;
    const exams = document.getElementById("exams").value;
    const final = document.getElementById("final").value;
    const ec = document.getElementById("ec").value;

    var mp_list = mp.split(',');
    var lab_list = lab.split(',');
    var exam_list = exams.split(',');

    var total = 0;

    for (var i = 0; i < mp_list.length; i++) {
        total += parseInt(mp_list[i]) * 0.6;
    }

    for (var i = 0; i < lab_list.length; i++) {
        total += parseInt(lab_list[i]) * 0.1;
    }

    for (var i = 0; i < exam_list.length; i++) {
        total += parseInt(exam_list[i]) * 0.6;
    }

    total += parseInt(final) + parseInt(ec);
    if (total > 1120 || total < 0) {
        document.getElementById("result").innerText = 'Invalid';
    } else [
        
    ]
}
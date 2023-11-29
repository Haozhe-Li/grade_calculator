function cutOff(grade) {
    if (grade < 60) {
        return "F";
    }
    const first = '';
    const second = '';
    const digit = grade % 10;
    grade = grade / 10;

    if (digit >= 7) {
        second = '+';
    } else if (digit < 3) {
        second = '-';
    }

    if (grade >= 90) {
        first = 'A';
    } else if (grade >= 80 && grade < 90) {
        first = 'B';
    } else if (grade >= 70 && grade < 80) {
        first = 'C';
    } else if (grade >= 60 && grade < 70) {
        first = 'D';
    }


    return first + second;
}

function normalize(grade, full_score) {
    return grade * 100 / full_score;
}
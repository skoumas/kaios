 // Add 0 in front of numbers less than 10
 Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}
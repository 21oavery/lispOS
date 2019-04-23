(function() {
    let lisp-functs = {
        "read": function

    let opts = {
        "+": function(t) {
            let i = 1;
            let cnt = 0;
            let shouldTotal = true;
            while (i < t.length) {
                let v = optLisp(t[i]);
                if ((typeof v) == "number") {
                    cnt += v;
                    t = t.splice(i, 1);
                } else {
                    shouldTotal = false;
                }
            }
            if (shouldTotal) {
                return cnt;
            } else {
                t.push(cnt);
                return t;
            }
        },
        "-": function(t) {
            let i = 0;
            switch (t.length) {
                case 1: return 0;
                case 2: return optLisp(t[1]);
                default:
                    t = ["-", t[1], t.splice(0, 2, "+")]
                case 3:
                    t[1] = optLisp(t[1]);
                    t[2] = optLisp(t[2]);
                    if (((typeof t[1]) == "number") && ((typeof t[2]) == "number")) return t[1] - t[2];
    };
    
    let optLisp = function(t) {
        if (t.length == 0) return t;
        let name = t[0];
        let f = opts[name];
        if (f) return f(t);
    };
})();

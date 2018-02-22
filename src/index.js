module.exports = function getZerosCount(number, base) {
  function getPrimes(base) {
        var r = base;
        var obj = {};
        for (var i = 2; i <= r; i++) {
            while (r % i == 0) {
                if (obj[i]) obj[i]++;
                else obj[i] = 1;
                r /= i;
            }
        }
        return obj;
    }

    var primes = getPrimes(base);
    var results = [];

    for (var key in primes) {
        var count = 0;
        var n = number;
        while (n >= 1) {
            var temp = Math.floor(n / key);
            n = temp;
            count += temp;
        }
        results.push(Math.floor(count / primes[key]));
    }

    return Math.min.apply(null, results);
};

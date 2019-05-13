

class Random {
    // --- Returns a random number between a and b
    static randInt = function (a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }


    // --- Randomly selects 1 item from an array
    static choice = function (arr) {
        return Math.floor(Math.random() * (arr[arr.length-1] - arr[0] + 1) + arr[0]);
    }


    // --- Shuffles all elements within an array
    static shuffle = function (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}





class Calc {
    // --- Returns the sum of all INT numbers from an array
    static arraySumInt(arr) {
        let sum;

        if (arr.length === 0 || arr.length === undefined || arr.length === null) {
            sum = 0;
        } else if (arr.length === 1) {
            sum = parseInt(arr[0]);
        } else {
            sum = arr.reduce((partial_sum, a) => parseInt(partial_sum) + parseInt(a))
        }

        return sum;
    }



    // --- Returns the sum of all FLOAT numbers from an array
    static arraySumFloat(arr, format=true, fix=2) {
        let sum;

        if (arr.length === 0 || arr.length === undefined || arr.length === null) {
            sum = 0;
        } else if (arr.length === 1) {
            sum = parseFloat(arr[0]);
        } else {
            sum = arr.reduce((partial_sum, a) => parseFloat(partial_sum) + parseFloat(a))
        }

        if (format === true) {
            return sum.toFixed(fix);
        } else {
            return sum;
        }
    }
}


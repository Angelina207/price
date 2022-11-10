export function showPrice() {
    (function() {
        const percent = 15;
        const sum = document.querySelectorAll('.sum');
        
        document.querySelector('.checkbox-input').addEventListener('change', function() {
            !this.checked ? getSumPerYear() : getSumPerMonth()
        })

        function getSumPerMonth(){
            for (let i = 0; i < sum.length; i++) {
                sum[i].innerHTML = sum[i].dataset.sum;
            }
        }

        function getSumPerYear(arr) {
            for (let i = 0; i < sum.length; i++) {
                arr = parseInt(sum[i].dataset.sum);
                sum[i].innerHTML = getTotalPrice(arr, percent) + '.99';
            }
        }

        function getTotalPrice(minSum, percent) {
            const sumPerYear = minSum * 12;
            const getPercent = Math.floor((sumPerYear / 100) * percent);
            const totalPrice = sumPerYear - getPercent;

            return totalPrice;
        }
    })()
}
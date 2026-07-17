package javap.j4;
public class FibonacciSeries {
    public static void fibonacci(int n) {
        int a = 0, b = 1;
        System.out.print(a + " " + b + " ");
        for (int i = 2; i < n; i++) {
            int c = a + b;
            System.out.print(c + " ");
            a = b;
            b = c;
        }
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.print("Fibonacci series up to " + n + " terms: ");
        fibonacci(n);
    }
}
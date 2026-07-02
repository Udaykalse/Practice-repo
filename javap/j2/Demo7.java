package javap.j2;
public class Demo7 {
    public static void main(String[] args) {
        int num = 5;
        System.out.println(fact(num));
    }
    static int fact(int n) {
        return (n == 0) ? 1 : n * fact(n - 1);
    }
}
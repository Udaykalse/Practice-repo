package j1;
public class Armstrong {
    public static void main(String[] args) {
        int n = 153, temp = n, sum = 0;
        while (temp > 0) {
            int digit = temp % 10;
            sum += (digit * digit * digit);
            temp /= 10;
        }
        System.out.println(n == sum ? "Armstrong" : "Not Armstrong");
    }
}
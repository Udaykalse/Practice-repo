package j1;
public class Demo2 {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int n : arr) {
            if (n > first) {
                second = first;
                first = n;
            } else if (n > second && n != first) {
                second = n;
            }
        }
        System.out.println(second);
    }
}
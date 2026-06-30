public class LargestInArray {
    public static int findLargest(int[] array) {
        int max = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        int[] numbers = {3, 9, 1, 5, 7};
        System.out.println("Largest element is: " + findLargest(numbers));
    }
}
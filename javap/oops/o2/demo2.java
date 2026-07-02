package javap.oops.o2;

class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

public class demo2 {
    public static void main(String[] args) {
        Calculator c = new Calculator();

        System.out.println(c.add(5, 10));
        System.out.println(c.add(5, 10, 15));
    }
}
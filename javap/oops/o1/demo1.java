package javap.oops.o1;

class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

public class demo1 {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
package java.oops.o1;

class Student {

    private String name;

    void setName(String name) {
        this.name = name;
    }

    String getName() {
        return name;
    }
}

public class demo3 {
    public static void main(String[] args) {

        Student s = new Student();

        s.setName("Uday");

        System.out.println(s.getName());
    }
}
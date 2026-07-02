package javap.j1;
public class Palindrome {

    public static void main(String[] args) {
        String str = "madam", rev = "";
        for (int i = str.length() - 1; i >= 0; i--)
            rev += str.charAt((i));
        System.out.println(str.equals(rev) ? "Palindrome" : "Not Palindrome");
    }
}
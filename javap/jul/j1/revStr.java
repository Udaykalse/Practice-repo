package javap.jul.j1;

public class revStr {
    public static void main(String[] args) {
        String str = "Siddharth";
        String rev = "";
        for(int i = str.length()-1;i>=0;i--){
            rev += str.charAt(i);
        }
        System.out.println(rev);
    }
}

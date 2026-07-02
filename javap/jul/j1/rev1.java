package javap.jul.j1;

public class rev1 {
        public static void main(String[] args) {
        String str = "Siddharth";
        String rev = "";
        for(int i = str.length()-1;i>=0;i--){
            rev += str.charAt(i);
        }
        System.out.println(rev);
    }
}

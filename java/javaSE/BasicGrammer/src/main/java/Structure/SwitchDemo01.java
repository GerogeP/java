package Structure;

public class SwitchDemo01 {
    public static void main(String[] args) {
        char grade = 'C';

        switch (grade){
            case 'A':
                System.out.println("excellent");
                break;
            case 'B':
                System.out.println("Good");
                break;
            case 'C':
                System.out.println("Pass");
                break;
            case 'D':
                System.out.println("Try more hard");
                break;
            default:
                System.out.println("?????");
        }
    }
}

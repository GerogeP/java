package Structure;

import java.util.Scanner;

public class IfDemo03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println(" input score : ");
        int score = scanner.nextInt();

        if (score == 100) {
            System.out.println(" full mark!!!");
        } else if (score > 90){
            System.out.println("A");
        } else if (score >80) {
            System.out.println("B");
        } else if (score >70) {
            System.out.println("C");
        } else if (score >60) {
            System.out.println("Passed");
        } else {
            System.out.println("not pass");
        }

        scanner.close();
    }
}

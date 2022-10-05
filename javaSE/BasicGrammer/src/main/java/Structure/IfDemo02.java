package Structure;

import java.util.Scanner;

public class IfDemo02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println(" input score : ");
        int score = scanner.nextInt();

        if (score > 60) {
            System.out.println("passed");
        }else{
            System.out.println("not pass");
        }

        scanner.close();
    }
}

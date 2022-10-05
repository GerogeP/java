package Scanner;

import java.util.Scanner;

public class demo01 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("!!!!!");

        if (scanner.hasNext()){
            String str = scanner.next();
            System.out.println(str);
        }

        scanner.close();
    }
}

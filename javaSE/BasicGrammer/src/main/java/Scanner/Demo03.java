package Scanner;

import java.util.Scanner;

public class Demo03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("#############");

        String str = scanner.nextLine();
        System.out.println(str);

        scanner.close();
    }
}

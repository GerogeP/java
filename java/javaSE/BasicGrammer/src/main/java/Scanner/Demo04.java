package Scanner;

import java.util.Scanner;

public class Demo04 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int i = 0;
        float f = 0.0f;

        System.out.println("input integer : ");

        if (scanner.hasNextInt()){
            i = scanner.nextInt();
            System.out.println(i);
        }else{
            System.out.println("not an integer");
        }

        System.out.println("input float : ");

        if (scanner.hasNextFloat()){
            f = scanner.nextFloat();
            System.out.println(f);
        }else{
            System.out.println("not a float");
        }

        scanner.close();
    }
}

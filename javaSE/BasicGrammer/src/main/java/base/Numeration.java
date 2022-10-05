package base;

public class Numeration {
    public static void main(String[] args) {
        //Decimal
        int i = 10;

        //Binary
        int i2 = 0b10;

        //OCtal
        int i8 = 010;

        //Hexadecimal
        int i16 = 0x10;

        System.out.println(i);
        System.out.println(i2);
        System.out.println(i8);
        System.out.println(i16);

        /*
        float != double
        float:  limitation, distribution, rounding error
         */

        float f = 0.1f;
        double d = 1.0/10;

        System.out.println(f==d);
        System.out.println(f);
        System.out.println(d);

    }
}

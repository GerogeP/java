package Array;

import java.util.Arrays;

public class Demo05 {
    public static void main(String[] args) {
        int[] a = {1,21,3,4,555,888,9546,782,};
        System.out.println(a);
        System.out.println(Arrays.toString(a));

        Arrays.sort(a);
        System.out.println(Arrays.toString(a));

        Arrays.fill(a, 2,4,8);
        System.out.println(Arrays.toString(a));


    }
}

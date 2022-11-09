package Array;

import java.util.Arrays;

public class Demo06 {
    public static void main(String[] args) {

        int[] a = {1,5,6,9,89,75,24,6,3,22,15,89};
        System.out.println(Arrays.toString(sort(a)));


    }

    //pop up sorting
    public static int[] sort(int[] array){
        int temp = 0;
        boolean flag = false;
        for (int i = 0; i < array.length ; i++){
            for (int j = 0; j < array.length - 1 - i ; j ++){
                if (array[j + 1 ] < array[j]){
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j + 1] = temp;
                    flag = true;
                }
            }
            if (!flag) {
                break;
            }
        }
        return array;
    }
}
